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
 * @fileoverview Generating Dart for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Dart.linkbot');

goog.require('Blockly.Dart');


Blockly.Dart.addReservedWords('Math');

Blockly.Dart['linkbot_turn'] = function(block) {
  Blockly.Dart.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  // TODO: Assemble Dart into code variable.
  var code = dropdown_direction + '(' + angle_turn_direction + ', radius, trackwidth);\n';
  return code;
};

Blockly.Dart['linkbot_drive'] = function(block) {
  Blockly.Dart.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_direction = block.getFieldValue('direction');
  var text_degree = block.getFieldValue('degree');
  // TODO: Assemble Dart into code variable.
  var code = dropdown_direction + '(' + text_degree + ');\n';
  return code;
};

Blockly.Dart['linkbot_speed'] = function(block) {
  Blockly.Dart.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var value_speed = Blockly.Dart.valueToCode(block, 'speed', Blockly.Dart.ORDER_ATOMIC);
  // TODO: Assemble Dart into code variable.
  var code = 'setSpeed(' + value_speed + ', radius);\n';
  return code;
};
