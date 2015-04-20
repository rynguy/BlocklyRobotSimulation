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
 * @fileoverview Helper functions for generating Cpp for blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Cpp');

goog.require('Blockly.Generator');


/**
 * Cpp code generator.
 * @type !Blockly.Generator
 */
Blockly.Cpp = new Blockly.Generator('Cpp');

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.Cpp.addReservedWords(
    // http://www.softintegration.com/download/software/release/docs/chguide.pdf
    // Section 2.2
    'assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,' +
    'print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError');

/**
 * Order of operation ENUMs.
 * http://www.softintegration.com/download/software/release/docs/chguide.pdf
 * Chapter 5
 */
Blockly.Cpp.ORDER_ATOMIC = 0;         // 0 "" ...
Blockly.Cpp.ORDER_UNARY_POSTFIX = 1;  // expr++ expr-- () [] .
Blockly.Cpp.ORDER_UNARY_PREFIX = 2;   // -expr !expr ~expr ++expr --expr
Blockly.Cpp.ORDER_MULTIPLICATIVE = 3; // * / % ~/
Blockly.Cpp.ORDER_ADDITIVE = 4;       // + -
Blockly.Cpp.ORDER_SHIFT = 5;          // << >>
Blockly.Cpp.ORDER_BITWISE_AND = 6;    // &
Blockly.Cpp.ORDER_BITWISE_XOR = 7;    // ^
Blockly.Cpp.ORDER_BITWISE_OR = 8;     // |
Blockly.Cpp.ORDER_RELATIONAL = 9;     // >= > <= < as is is!
Blockly.Cpp.ORDER_EQUALITY = 10;      // == !=
Blockly.Cpp.ORDER_LOGICAL_AND = 11;   // &&
Blockly.Cpp.ORDER_LOGICAL_OR = 12;    // ||
Blockly.Cpp.ORDER_CONDITIONAL = 13;   // expr ? expr : expr
Blockly.Cpp.ORDER_CASCADE = 14;       // ..
Blockly.Cpp.ORDER_ASSIGNMENT = 15;    // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.Cpp.ORDER_NONE = 99;          // (...)

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.Cpp.init = function(workspace) {
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Cpp.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Cpp.functionNames_ = Object.create(null);

  if (!Blockly.Cpp.variableDB_) {
    Blockly.Cpp.variableDB_ =
        new Blockly.Names(Blockly.Cpp.RESERVED_WORDS_);
  } else {
    Blockly.Cpp.variableDB_.reset();
  }

  var defvars = [];
  var variables = Blockly.Variables.allVariables(workspace);
  for (var x = 0; x < variables.length; x++) {
    defvars[x] = 'double ' +
        Blockly.Cpp.variableDB_.getName(variables[x],
        Blockly.Variables.NAME_TYPE) + ';';
  }
  Blockly.Cpp.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.Cpp.finish = function(code) {
  // Indent every line.
  if (code) {
    code = Blockly.Cpp.prefixLines(code, Blockly.Cpp.INDENT);
  }
  code = 'int main() {\n' + code + '  return 0;\n' + '}\n';
  // Convert the definitions dictionary into a list.
  var imports = [];
  var definitions = [];
  var x = 0;
  for (var name in Blockly.Cpp.definitions_) {
    var def = Blockly.Cpp.definitions_[name];
    if (def.match(/^#include\s/)) {
      imports.push(def);
    } else {
      definitions.push(def);
      if(def.match(/^CLinkbotI l_robot1/) || def.match(/^CLinkbotI l_robot2/) || 
        def.match(/^CMindstorms m_robot1/) || def.match(/^CMindstorms m_robot2/)) {
        x++;
      }
    }
  }
  var allDefs = imports.join('\n') + definitions.join('\n');
  var total = allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n') + code;
  if(x == 1) {
      total = total.replace(/l_robot1/g, 'robot');
      total = total.replace(/l_robot2/g, 'robot');
      total = total.replace(/m_robot1/g, 'robot');
      total = total.replace(/m_robot2/g, 'robot');
  }
  else {
      var z = [];
      if(allDefs.indexOf('l_robot1') >= 0)
        z.push(allDefs.indexOf('l_robot1'));
      if(allDefs.indexOf('l_robot2') >= 0)
        z.push(allDefs.indexOf('l_robot2'));
      if(allDefs.indexOf('m_robot1') >= 0)
        z.push(allDefs.indexOf('m_robot1'));
      if(allDefs.indexOf('m_robot2') >= 0)
        z.push(allDefs.indexOf('m_robot2'));
      z.sort(function(a, b){return a-b});
      for(var y = 1; y <= x; y++) {
        if(allDefs.indexOf('l_robot1') == z[y-1]) {
          total = total.replace(/l_robot1/g, 'robot' + y);   
        }
        if(allDefs.indexOf('l_robot2') == z[y-1]) {
          total = total.replace(/l_robot2/g, 'robot' + y);   
        }
        if(allDefs.indexOf('m_robot1') == z[y-1]) {
          total = total.replace(/m_robot1/g, 'robot' + y);   
        }
        if(allDefs.indexOf('m_robot2') == z[y-1]) {
          total = total.replace(/m_robot2/g, 'robot' + y);   
        }
      }
  }
  return total;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.Cpp.scrubNakedValue = function(line) {
  return line + ';\n';
};

/**
 * Encode a string as a properly escaped Cpp string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} Cpp string.
 * @private
 */
Blockly.Cpp.quote_ = function(string) {
  // TODO: This is a quick hack.  Replace with goog.string.quote
  string = string.replace(/\\/g, '\\\\')
                 .replace(/\n/g, '\\\n')
                 .replace(/\$/g, '\\$')
                 .replace(/'/g, '\\\'');
  return '\'' + string + '\'';
};

/**
 * Common tasks for generating Cpp from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Cpp code created for this block.
 * @return {string} Cpp code with comments and subsequent blocks added.
 * @private
 */
Blockly.Cpp.scrub_ = function(block, code) {
  var commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    var comment = block.getCommentText();
    if (comment) {
      commentCode += Blockly.Cpp.prefixLines(comment, '// ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (var x = 0; x < block.inputList.length; x++) {
      if (block.inputList[x].type == Blockly.INPUT_VALUE) {
        var childBlock = block.inputList[x].connection.targetBlock();
        if (childBlock) {
          var comment = Blockly.Cpp.allNestedComments(childBlock);
          if (comment) {
            commentCode += Blockly.Cpp.prefixLines(comment, '// ');
          }
        }
      }
    }
  }
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = Blockly.Cpp.blockToCode(nextBlock);
  return commentCode + code + nextCode;
};
