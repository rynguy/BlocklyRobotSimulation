// Do not edit this file; automatically generated by build.py.
"use strict";


// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch=new Blockly.Generator("Ch");Blockly.Ch.addReservedWords("assert,break,case,catch,class,const,continue,default,do,else,enum,extends,false,final,finally,for,if,in,is,new,null,rethrow,return,super,switch,this,throw,true,try,var,void,while,with,print,identityHashCode,identical,BidirectionalIterator,Comparable,double,Function,int,Invocation,Iterable,Iterator,List,Map,Match,num,Pattern,RegExp,Set,StackTrace,String,StringSink,Type,bool,DateTime,Deprecated,Duration,Expando,Null,Object,RuneIterator,Runes,Stopwatch,StringBuffer,Symbol,Uri,Comparator,AbstractClassInstantiationError,ArgumentError,AssertionError,CastError,ConcurrentModificationError,CyclicInitializationError,Error,Exception,FallThroughError,FormatException,IntegerDivisionByZeroException,NoSuchMethodError,NullThrownError,OutOfMemoryError,RangeError,StackOverflowError,StateError,TypeError,UnimplementedError,UnsupportedError");
Blockly.Ch.ORDER_ATOMIC=0;Blockly.Ch.ORDER_UNARY_POSTFIX=1;Blockly.Ch.ORDER_UNARY_PREFIX=2;Blockly.Ch.ORDER_MULTIPLICATIVE=3;Blockly.Ch.ORDER_ADDITIVE=4;Blockly.Ch.ORDER_SHIFT=5;Blockly.Ch.ORDER_BITWISE_AND=6;Blockly.Ch.ORDER_BITWISE_XOR=7;Blockly.Ch.ORDER_BITWISE_OR=8;Blockly.Ch.ORDER_RELATIONAL=9;Blockly.Ch.ORDER_EQUALITY=10;Blockly.Ch.ORDER_LOGICAL_AND=11;Blockly.Ch.ORDER_LOGICAL_OR=12;Blockly.Ch.ORDER_CONDITIONAL=13;Blockly.Ch.ORDER_CASCADE=14;Blockly.Ch.ORDER_ASSIGNMENT=15;
Blockly.Ch.ORDER_NONE=99;Blockly.Ch.finish=function(a){Blockly.Ch.definitions_=Object.create(null);Blockly.Ch.functionNames_=Object.create(null);Blockly.Ch.variableDB_?Blockly.Ch.variableDB_.reset():Blockly.Ch.variableDB_=new Blockly.Names(Blockly.Ch.RESERVED_WORDS_);var b=[];a=Blockly.Variables.allVariables(a);b[0]="CLinkbotI robot;\n";for(var c=1;c<a.length+1;c++)b[c]="double "+Blockly.Ch.variableDB_.getName(a[c-1],Blockly.Variables.NAME_TYPE)+";";Blockly.Ch.definitions_.variables=b.join("\n")};
Blockly.Ch.init=function(a){a&&(a=Blockly.Ch.prefixLines(a,Blockly.Ch.INDENT));var b=[],c=[],d;for(d in Blockly.Ch.definitions_){var e=Blockly.Ch.definitions_[d];e.match(/^import\s/)?b.push(e):c.push(e)}return(b.join("\n")+"\n\n"+c.join("\n\n")).replace(/\n\n+/g,"\n\n").replace(/\n*$/,"\n\n\n")+a};Blockly.Ch.scrubNakedValue=function(a){return a+";\n"};Blockly.Ch.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return"'"+a+"'"};
Blockly.Ch.scrub_=function(a,b){var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=Blockly.Ch.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=Blockly.Ch.allNestedComments(d))&&(c+=Blockly.Ch.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Ch.blockToCode(e);return c+b+e};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.linkbot={};Blockly.Ch.addReservedWords("Math");Blockly.Ch.linkbot_turn=function(a){Blockly.Ch.definitions_.include_linkbot="#include <linkbot.h>";var b=a.getFieldValue("direction"),c=a.getFieldValue("turn direction"),d=a.getFieldValue("radius");a=a.getFieldValue("width");return"robot."+b+"("+c+", "+d+", "+a+");\n"};
Blockly.Ch.linkbot_drive=function(a){Blockly.Ch.definitions_.include_linkbot="#include <linkbot.h>";Blockly.Ch.definitions_.include_ch_math="#include <math.h>";var b=a.getFieldValue("direction"),c=a.getFieldValue("distance"),d=a.getFieldValue("radius");a=a.getFieldValue("width");return"robot."+b+"(("+c+" * 180.0 / (PI * "+d+")), "+d+", "+a+");\n"};Blockly.Ch.linkbot_speed=function(a){Blockly.Ch.definitions_.include_linkbot="#include <linkbot.h>";return"robot.setSpeed("+a.getFieldValue("speed")+", radius);\n"};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.logic={};Blockly.Ch.controls_if=function(a){for(var b=0,c=Blockly.Ch.valueToCode(a,"IF"+b,Blockly.Ch.ORDER_NONE)||"false",d=Blockly.Ch.statementToCode(a,"DO"+b),e="if ("+c+") {\n"+d+"}",b=1;b<=a.elseifCount_;b++)c=Blockly.Ch.valueToCode(a,"IF"+b,Blockly.Ch.ORDER_NONE)||"false",d=Blockly.Ch.statementToCode(a,"DO"+b),e+=" else if ("+c+") {\n"+d+"}";a.elseCount_&&(d=Blockly.Ch.statementToCode(a,"ELSE"),e+=" else {\n"+d+"}");return e+"\n"};
Blockly.Ch.logic_compare=function(a){var b={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[a.getFieldValue("OP")],c="=="==b||"!="==b?Blockly.Ch.ORDER_EQUALITY:Blockly.Ch.ORDER_RELATIONAL,d=Blockly.Ch.valueToCode(a,"A",c)||"0";a=Blockly.Ch.valueToCode(a,"B",c)||"0";return[d+" "+b+" "+a,c]};
Blockly.Ch.logic_operation=function(a){var b="AND"==a.getFieldValue("OP")?"&&":"||",c="&&"==b?Blockly.Ch.ORDER_LOGICAL_AND:Blockly.Ch.ORDER_LOGICAL_OR,d=Blockly.Ch.valueToCode(a,"A",c);a=Blockly.Ch.valueToCode(a,"B",c);if(d||a){var e="&&"==b?"true":"false";d||(d=e);a||(a=e)}else a=d="false";return[d+" "+b+" "+a,c]};Blockly.Ch.logic_negate=function(a){var b=Blockly.Ch.ORDER_UNARY_PREFIX;return["!"+(Blockly.Ch.valueToCode(a,"BOOL",b)||"true"),b]};
Blockly.Ch.logic_boolean=function(a){return["TRUE"==a.getFieldValue("BOOL")?"true":"false",Blockly.Ch.ORDER_ATOMIC]};Blockly.Ch.logic_null=function(a){return["NULL",Blockly.Ch.ORDER_ATOMIC]};Blockly.Ch.logic_ternary=function(a){var b=Blockly.Ch.valueToCode(a,"IF",Blockly.Ch.ORDER_CONDITIONAL)||"false",c=Blockly.Ch.valueToCode(a,"THEN",Blockly.Ch.ORDER_CONDITIONAL)||"NULL";a=Blockly.Ch.valueToCode(a,"ELSE",Blockly.Ch.ORDER_CONDITIONAL)||"NULL";return[b+" ? "+c+" : "+a,Blockly.Ch.ORDER_CONDITIONAL]};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.loops={};Blockly.Ch.controls_repeat=function(a){var b=Number(a.getFieldValue("TIMES")),c=Blockly.Ch.statementToCode(a,"DO"),c=Blockly.Ch.addLoopTrap(c,a.id);a=Blockly.Ch.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE);return"for (int "+a+" = 0; "+a+" < "+b+"; "+a+"++) {\n"+c+"}\n"};
Blockly.Ch.controls_repeat_ext=function(a){var b=Blockly.Ch.valueToCode(a,"TIMES",Blockly.Ch.ORDER_ASSIGNMENT)||"0",c=Blockly.Ch.statementToCode(a,"DO"),c=Blockly.Ch.addLoopTrap(c,a.id);a="";var d=Blockly.Ch.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE),e=b;b.match(/^\w+$/)||Blockly.isNumber(b)||(e=Blockly.Ch.variableDB_.getDistinctName("repeat_end",Blockly.Variables.NAME_TYPE),a+="var "+e+" = "+b+";\n");return a+("for (int "+d+" = 0; "+d+" < "+e+"; "+d+"++) {\n"+c+"}\n")};
Blockly.Ch.controls_whileUntil=function(a){var b="UNTIL"==a.getFieldValue("MODE"),c=Blockly.Ch.valueToCode(a,"BOOL",b?Blockly.Ch.ORDER_UNARY_PREFIX:Blockly.Ch.ORDER_NONE)||"false",d=Blockly.Ch.statementToCode(a,"DO"),d=Blockly.Ch.addLoopTrap(d,a.id);b&&(c="!"+c);return"while ("+c+") {\n"+d+"}\n"};
Blockly.Ch.controls_for=function(a){var b=Blockly.Ch.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Ch.valueToCode(a,"FROM",Blockly.Ch.ORDER_ASSIGNMENT)||"0",d=Blockly.Ch.valueToCode(a,"TO",Blockly.Ch.ORDER_ASSIGNMENT)||"0",e=Blockly.Ch.valueToCode(a,"BY",Blockly.Ch.ORDER_ASSIGNMENT)||"1",g=Blockly.Ch.statementToCode(a,"DO"),g=Blockly.Ch.addLoopTrap(g,a.id);if(Blockly.isNumber(c)&&Blockly.isNumber(d)&&Blockly.isNumber(e)){var f=parseFloat(c)<=parseFloat(d);a="for ("+
b+" = "+c+"; "+b+(f?" <= ":" >= ")+d+"; "+b;b=Math.abs(parseFloat(e));a=(1==b?a+(f?"++":"--"):a+((f?" += ":" -= ")+b))+(") {\n"+g+"}\n")}else a="",f=c,c.match(/^\w+$/)||Blockly.isNumber(c)||(f=Blockly.Ch.variableDB_.getDistinctName(b+"_start",Blockly.Variables.NAME_TYPE),a+="var "+f+" = "+c+";\n"),c=d,d.match(/^\w+$/)||Blockly.isNumber(d)||(c=Blockly.Ch.variableDB_.getDistinctName(b+"_end",Blockly.Variables.NAME_TYPE),a+="var "+c+" = "+d+";\n"),d=Blockly.Ch.variableDB_.getDistinctName(b+"_inc",Blockly.Variables.NAME_TYPE),
a+="num "+d+" = ",a=Blockly.isNumber(e)?a+(Math.abs(e)+";\n"):a+("("+e+").abs();\n"),a+="if ("+f+" > "+c+") {\n",a+=Blockly.Ch.INDENT+d+" = -"+d+";\n",a+="}\n",a+="for ("+b+" = "+f+";\n     "+d+" >= 0 ? "+b+" <= "+c+" : "+b+" >= "+c+";\n     "+b+" += "+d+") {\n"+g+"}\n";return a};
Blockly.Ch.controls_forEach=function(a){var b=Blockly.Ch.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),c=Blockly.Ch.valueToCode(a,"LIST",Blockly.Ch.ORDER_ASSIGNMENT)||"[]",d=Blockly.Ch.statementToCode(a,"DO"),d=Blockly.Ch.addLoopTrap(d,a.id);return"for (var "+b+" in  "+c+") {\n"+d+"}\n"};Blockly.Ch.controls_flow_statements=function(a){switch(a.getFieldValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.math={};Blockly.Ch.addReservedWords("Math");Blockly.Ch.math_number=function(a){a=window.parseFloat(a.getFieldValue("NUM"));return[a,0>a?Blockly.Ch.ORDER_UNARY_PREFIX:Blockly.Ch.ORDER_ATOMIC]};
Blockly.Ch.math_arithmetic=function(a){var b={ADD:[" + ",Blockly.Ch.ORDER_ADDITIVE],MINUS:[" - ",Blockly.Ch.ORDER_ADDITIVE],MULTIPLY:[" * ",Blockly.Ch.ORDER_MULTIPLICATIVE],DIVIDE:[" / ",Blockly.Ch.ORDER_MULTIPLICATIVE],POWER:[null,Blockly.Ch.ORDER_NONE]}[a.getFieldValue("OP")],c=b[0],b=b[1],d=Blockly.Ch.valueToCode(a,"A",b)||"0";a=Blockly.Ch.valueToCode(a,"B",b)||"0";return c?[d+c+a,b]:(Blockly.Ch.definitions_.include_ch_math="#include <math.h>",["pow("+d+", "+a+")",Blockly.Ch.ORDER_UNARY_POSTFIX])};
Blockly.Ch.math_single=function(a){var b=a.getFieldValue("OP"),c;if("NEG"==b)return a=Blockly.Ch.valueToCode(a,"NUM",Blockly.Ch.ORDER_UNARY_PREFIX)||"0","-"==a[0]&&(a=" "+a),["-"+a,Blockly.Ch.ORDER_UNARY_PREFIX];Blockly.Ch.definitions_.include_ch_math="#include <math.h>";a="ABS"==b||"ROUND"==b.substring(0,5)?Blockly.Ch.valueToCode(a,"NUM",Blockly.Ch.ORDER_UNARY_POSTFIX)||"0":"SIN"==b||"COS"==b||"TAN"==b?Blockly.Ch.valueToCode(a,"NUM",Blockly.Ch.ORDER_MULTIPLICATIVE)||"0":Blockly.Ch.valueToCode(a,
"NUM",Blockly.Ch.ORDER_NONE)||"0";switch(b){case "ABS":c="abs("+a+")";break;case "ROOT":c="sqrt("+a+")";break;case "LN":c="log("+a+")";break;case "EXP":c="exp("+a+")";break;case "POW10":c="pow(10.0,"+a+")";break;case "ROUND":c="round("+a+")";break;case "ROUNDUP":c="ceil("+a+")";break;case "ROUNDDOWN":c="floor("+a+")";break;case "SIN":c="sin("+a+" / 180.0 * M_PI)";break;case "COS":c="cos("+a+" / 180.0 * M_PI)";break;case "TAN":c="tan("+a+" / 180.0 * M_PI)"}if(c)return[c,Blockly.Ch.ORDER_UNARY_POSTFIX];
switch(b){case "LOG10":c="log10("+a+")";break;case "ASIN":c="asin("+a+") / M_PI * 180.0";break;case "ACOS":c="acos("+a+") / M_PI * 180.0";break;case "ATAN":c="atan("+a+") / M_PI * 180.0";break;default:throw"Unknown math operator: "+b;}return[c,Blockly.Ch.ORDER_MULTIPLICATIVE]};
Blockly.Ch.math_constant=function(a){var b={PI:["M_PI",Blockly.Ch.ORDER_UNARY_POSTFIX],E:["M_E",Blockly.Ch.ORDER_UNARY_POSTFIX],GOLDEN_RATIO:["(1.0 + sqrt(5.0)) / 2.0",Blockly.Ch.ORDER_MULTIPLICATIVE],SQRT2:["M_SQRT2",Blockly.Ch.ORDER_UNARY_POSTFIX],SQRT1_2:["M_SQRT1_2",Blockly.Ch.ORDER_UNARY_POSTFIX],INFINITY:["INFINITY",Blockly.Ch.ORDER_ATOMIC]};a=a.getFieldValue("CONSTANT");"INFINITY"!=a&&(Blockly.Ch.definitions_.include_ch_math="#include <math.h>");return b[a]};
Blockly.Ch.math_number_property=function(a){var b=Blockly.Ch.valueToCode(a,"NUMBER_TO_CHECK",Blockly.Ch.ORDER_MULTIPLICATIVE);if(!b)return["false",Blockly.Python.ORDER_ATOMIC];var c=a.getFieldValue("PROPERTY"),d;if("PRIME"==c)return Blockly.Ch.definitions_.include_ch_math="#include <math.h>",d=Blockly.Ch.provideFunction_("math_isPrime",["bool "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(n) {","  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods","  if (n == 2 || n == 3) {","    return true;",
"  }","  // False if n is null, negative, is 1, or not whole.","  // And false if n is divisible by 2 or 3.","  if (n == null || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {","    return false;","  }","  // Check all the numbers of form 6k +/- 1, up to sqrt(n).","  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {","    if (n % (x - 1) == 0 || n % (x + 1) == 0) {","      return false;","    }","  }","  return true;","}"])+"("+b+")",[d,Blockly.Ch.ORDER_UNARY_POSTFIX];switch(c){case "EVEN":d=
b+" % 2 == 0";break;case "ODD":d=b+" % 2 == 1";break;case "WHOLE":d=b+" % 1 == 0";break;case "POSITIVE":d=b+" > 0";break;case "NEGATIVE":d=b+" < 0";break;case "DIVISIBLE_BY":a=Blockly.Ch.valueToCode(a,"DIVISOR",Blockly.Ch.ORDER_MULTIPLICATIVE);if(!a)return["false",Blockly.Python.ORDER_ATOMIC];d=b+" % "+a+" == 0"}return[d,Blockly.Ch.ORDER_EQUALITY]};
Blockly.Ch.math_change=function(a){var b=Blockly.Ch.valueToCode(a,"DELTA",Blockly.Ch.ORDER_ADDITIVE)||"0";a=Blockly.Ch.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE);return a+" = ("+a+" is num ? "+a+" : 0) + "+b+";\n"};Blockly.Ch.math_round=Blockly.Ch.math_single;Blockly.Ch.math_trig=Blockly.Ch.math_single;
Blockly.Ch.math_on_list=function(a){var b=a.getFieldValue("OP");a=Blockly.Ch.valueToCode(a,"LIST",Blockly.Ch.ORDER_NONE)||"[]";switch(b){case "SUM":b=Blockly.Ch.provideFunction_("math_sum",["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  num sumVal = 0;","  myList.forEach((num entry) {sumVal += entry;});","  return sumVal;","}"]);b=b+"("+a+")";break;case "MIN":Blockly.Ch.definitions_.include_ch_math="#include <math.h>";b=Blockly.Ch.provideFunction_("math_min",["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+
"(List myList) {","  if (myList.isEmpty) return null;","  num minVal = myList[0];","  myList.forEach((num entry) {minVal = Math.min(minVal, entry);});","  return minVal;","}"]);b=b+"("+a+")";break;case "MAX":Blockly.Ch.definitions_.include_ch_math="#include <math.h>";b=Blockly.Ch.provideFunction_("math_max",["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  if (myList.isEmpty) return null;","  num maxVal = myList[0];","  myList.forEach((num entry) {maxVal = Math.max(maxVal, entry);});",
"  return maxVal;","}"]);b=b+"("+a+")";break;case "AVERAGE":b=Blockly.Ch.provideFunction_("math_average",["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List localList = new List.from(myList);","  localList.removeMatching((a) => a is! num);","  if (localList.isEmpty) return null;","  num sumVal = 0;","  localList.forEach((num entry) {sumVal += entry;});","  return sumVal / localList.length;","}"]);b=b+"("+a+")";break;case "MEDIAN":b=Blockly.Ch.provideFunction_("math_median",
["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only, then sort, then return middle value","  // or the average of two middle values if list has an even number of elements.","  List localList = new List.from(myList);","  localList.removeMatching((a) => a is! num);","  if (localList.isEmpty) return null;","  localList.sort((a, b) => (a - b));","  int index = localList.length ~/ 2;","  if (localList.length % 2 == 1) {","    return localList[index];",
"  } else {","    return (localList[index - 1] + localList[index]) / 2;","  }","}"]);b=b+"("+a+")";break;case "MODE":Blockly.Ch.definitions_.include_ch_math="#include <math.h>";b=Blockly.Ch.provideFunction_("math_modes",["List "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List values) {","  List modes = [];","  List counts = [];","  int maxCount = 0;","  for (int i = 0; i < values.length; i++) {","    var value = values[i];","    bool found = false;","    int thisCount;","    for (int j = 0; j < counts.length; j++) {",
"      if (counts[j][0] == value) {","        thisCount = ++counts[j][1];","        found = true;","        break;","      }","    }","    if (!found) {","      counts.add([value, 1]);","      thisCount = 1;","    }","    maxCount = Math.max(thisCount, maxCount);","  }","  for (int j = 0; j < counts.length; j++) {","    if (counts[j][1] == maxCount) {","        modes.add(counts[j][0]);","    }","  }","  return modes;","}"]);b=b+"("+a+")";break;case "STD_DEV":Blockly.Ch.definitions_.include_ch_math=
"#include <math.h>";b=Blockly.Ch.provideFunction_("math_standard_deviation",["num "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  // First filter list for numbers only.","  List numbers = new List.from(myList);","  numbers.removeMatching((a) => a is! num);","  if (numbers.isEmpty) return null;","  num n = numbers.length;","  num sum = 0;","  numbers.forEach((x) => sum += x);","  num mean = sum / n;","  num sumSquare = 0;","  numbers.forEach((x) => sumSquare += Math.pow(x - mean, 2));",
"  return Math.sqrt(sumSquare / n);","}"]);b=b+"("+a+")";break;case "RANDOM":Blockly.Ch.definitions_.include_ch_math="#include <math.h>";b=Blockly.Ch.provideFunction_("math_random_item",["dynamic "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(List myList) {","  int x = new Math.Random().nextInt(myList.length);","  return myList[x];","}"]);b=b+"("+a+")";break;default:throw"Unknown operator: "+b;}return[b,Blockly.Ch.ORDER_UNARY_POSTFIX]};
Blockly.Ch.math_modulo=function(a){var b=Blockly.Ch.valueToCode(a,"DIVIDEND",Blockly.Ch.ORDER_MULTIPLICATIVE)||"0";a=Blockly.Ch.valueToCode(a,"DIVISOR",Blockly.Ch.ORDER_MULTIPLICATIVE)||"0";return[b+" % "+a,Blockly.Ch.ORDER_MULTIPLICATIVE]};
Blockly.Ch.math_constrain=function(a){Blockly.Ch.definitions_.include_ch_math="#include <math.h>";var b=Blockly.Ch.valueToCode(a,"VALUE",Blockly.Ch.ORDER_NONE)||"0",c=Blockly.Ch.valueToCode(a,"LOW",Blockly.Ch.ORDER_NONE)||"0";a=Blockly.Ch.valueToCode(a,"HIGH",Blockly.Ch.ORDER_NONE)||"INFINITY";return["Math.min(Math.max("+b+", "+c+"), "+a+")",Blockly.Ch.ORDER_UNARY_POSTFIX]};
Blockly.Ch.math_random_int=function(a){Blockly.Ch.definitions_.include_ch_math="#include <math.h>";var b=Blockly.Ch.valueToCode(a,"FROM",Blockly.Ch.ORDER_NONE)||"0";a=Blockly.Ch.valueToCode(a,"TO",Blockly.Ch.ORDER_NONE)||"0";return[Blockly.Ch.provideFunction_("math_random_int",["int "+Blockly.Ch.FUNCTION_NAME_PLACEHOLDER_+"(int a, int b) {","  if (a > b) {","    // Swap a and b to ensure a is smaller.","    int c = a;","    a = b;","    b = c;","  }","  return round(rand() % (b - a + 1) + a;","}"])+
"("+b+", "+a+")",Blockly.Ch.ORDER_UNARY_POSTFIX]};Blockly.Ch.math_random_float=function(a){Blockly.Ch.definitions_.include_ch_math="#include <math.h>";return["(float)rand()/(float)(RAND_MAX);",Blockly.Ch.ORDER_UNARY_POSTFIX]};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.procedures={};
Blockly.Ch.procedures_defreturn=function(a){var b=Blockly.Ch.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=Blockly.Ch.statementToCode(a,"STACK");Blockly.Ch.STATEMENT_PREFIX&&(c=Blockly.Ch.prefixLines(Blockly.Ch.STATEMENT_PREFIX.replace(/%1/g,"'"+a.id+"'"),Blockly.Ch.INDENT)+c);Blockly.Ch.INFINITE_LOOP_TRAP&&(c=Blockly.Ch.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+a.id+"'")+c);var d=Blockly.Ch.valueToCode(a,"RETURN",Blockly.Ch.ORDER_NONE)||"";d&&(d="  return "+d+";\n");for(var e=
d?"double":"void",g=[],f=0;f<a.arguments_.length;f++)g[f]=Blockly.Ch.variableDB_.getName(a.arguments_[f],Blockly.Variables.NAME_TYPE);c=e+" "+b+"("+g.join(", ")+") {\n"+c+d+"}";c=Blockly.Ch.scrub_(a,c);Blockly.Ch.definitions_[b]=c;return null};Blockly.Ch.procedures_defnoreturn=Blockly.Ch.procedures_defreturn;
Blockly.Ch.procedures_callreturn=function(a){for(var b=Blockly.Ch.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Ch.valueToCode(a,"ARG"+d,Blockly.Ch.ORDER_NONE)||"null";return[b+"("+c.join(", ")+")",Blockly.Ch.ORDER_UNARY_POSTFIX]};
Blockly.Ch.procedures_callnoreturn=function(a){for(var b=Blockly.Ch.variableDB_.getName(a.getFieldValue("NAME"),Blockly.Procedures.NAME_TYPE),c=[],d=0;d<a.arguments_.length;d++)c[d]=Blockly.Ch.valueToCode(a,"ARG"+d,Blockly.Ch.ORDER_NONE)||"null";return b+"("+c.join(", ")+");\n"};
Blockly.Ch.procedures_ifreturn=function(a){var b="if ("+(Blockly.Ch.valueToCode(a,"CONDITION",Blockly.Ch.ORDER_NONE)||"false")+") {\n";a.hasReturnValue_?(a=Blockly.Ch.valueToCode(a,"VALUE",Blockly.Ch.ORDER_NONE)||"null",b+="  return "+a+";\n"):b+="  return;\n";return b+"}\n"};
// Copyright 2014 Google Inc.  Apache License 2.0
Blockly.Ch.variables={};Blockly.Ch.variables_get=function(a){return[Blockly.Ch.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE),Blockly.Ch.ORDER_ATOMIC]};Blockly.Ch.variables_set=function(a){var b=Blockly.Ch.valueToCode(a,"VALUE",Blockly.Ch.ORDER_ASSIGNMENT)||"0";return Blockly.Ch.variableDB_.getName(a.getFieldValue("VAR"),Blockly.Variables.NAME_TYPE)+" = "+b+";\n"};