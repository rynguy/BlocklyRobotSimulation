/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating Ch for blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Ch');

goog.require('Blockly.Generator');


/**
 * Ch code generator.
 * @type !Blockly.Generator
 */
Blockly.Ch = new Blockly.Generator('Ch');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Ch.addReservedWords(
    // http://www.softintegration.com/download/software/release/docs/chguide.pdf
    // Section 2.2
    'assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,' +
    'print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError');

/**
 * Order of operation ENUMs.
 * http://www.softintegration.com/download/software/release/docs/chguide.pdf
 * Chapter 5
 */
Blockly.Ch.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Ch.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Ch.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Ch.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Ch.ORDER_ADDITIVE = 4;       // + -
Blockly.Ch.ORDER_SHIFT = 5;          // << >>
Blockly.Ch.ORDER_BITWISE_AND = 6;    // &
Blockly.Ch.ORDER_BITWISE_XOR = 7;    // ^
Blockly.Ch.ORDER_BITWISE_OR = 8;     // |
Blockly.Ch.ORDER_RELATIONAL = 9;     // >= > <= < as is is!
Blockly.Ch.ORDER_EQUALITY = 10;      // == !=
Blockly.Ch.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Ch.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Ch.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Ch.ORDER_CASCADE = 14;       // ..
Blockly.Ch.ORDER_ASSIGNMENT = 15;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Ch.ORDER_NONE = 99;          // (...)

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Ch.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Ch.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Ch.functionNames_ = Object.create(null);

  if (!Blockly.Ch.variableDB_) {
    Blockly.Ch.variableDB_ =
        new Blockly.Names(Blockly.Ch.RESERVED_WORDS_);
  } else {
    Blockly.Ch.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  defvars[0] = 'CLinkbotI robot;\nrobot.connect();\nrobot.resetToZero();\n';
  for (var x = 1; x < variables.length + 1; x++) {
    defvars[x] = 'double ' +
        Blockly.Ch.variableDB_.getName(variables[x-1],
        Blockly.Variables.NAME_TYPE) + ';';
  }
  Blockly.Ch.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Ch.finish = function(code) {
  // Indent every line.
  if (code) {
    code = Blockly.Ch.prefixLines(code, Blockly.Ch.INDENT);
  }

  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  for (var name in Blockly.Ch.definitions_) {
    var def = Blockly.Ch.definitions_[name];
    if (def.match(/^#include\s/)) {
      imports.push(def);
    } else {
      definitions.push(def);
    }
  }
  var allDefs = imports.join('\n') + '\n\n' + definitions.join('\n\n');
  return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Ch.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Ch string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Ch string.
 * @private
 */
Blockly.Ch.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating Ch from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Ch code created for this block.
 * @return {string} Ch code with comments and subsequent blocks added.
 * @private
 */
Blockly.Ch.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Ch.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.Ch.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Ch.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.Ch.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
