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
 * @fileoverview Generating Ch for linkbot blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Ch.linkbot');

goog.require('Blockly.Ch');


Blockly.Ch.addReservedWords('Math');

Blockly.Ch['linkbot_turn'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'robot.' + dropdown_direction + '(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive'] = function(block) {
  /*Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';*/
  var dropdown_direction = block.getFieldValue('direction');
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  // TODO: Assemble Dart into code variable.
  var code = 'robot.' + dropdown_direction + '((' + text_distance + ' * 180.0 / (PI * ' + dropdown_radius + ')), ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['linkbot_speed'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_speed = block.getFieldValue('speed');
  var code = 'robot.' + 'setSpeed(' + text_speed + ', radius);\n';
  return code;
};
