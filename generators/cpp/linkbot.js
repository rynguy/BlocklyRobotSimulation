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
 * @fileoverview Generating Cpp for linkbot blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Cpp.linkbot');

goog.require('Blockly.Cpp');


Blockly.Cpp.addReservedWords('Math');

Blockly.Cpp['linkbot_constructor'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  return 'CLinkbotI robot;\n';
};

Blockly.Cpp['linkbot_speed'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_speed = block.getFieldValue('speed');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot.' + 'setSpeed(' + text_speed + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Cpp['linkbot_blink_LED'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_delay = block.getFieldValue('delay');
  var text_numBlinks = block.getFieldValue('numBlinks');
  var code = 'robot.blinkLED(' + text_delay + ', ' + text_numBlinks + ');\n';
  return code;
};

Blockly.Cpp['linkbot_delay'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_time = block.getFieldValue('time');
  var code = 'robot.delaySeconds(' + text_time + ');\n';
  return code;
};

Blockly.Cpp['linkbot_move_joints'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_angle1 = block.getFieldValue('angle1');
  var text_angle2 = block.getFieldValue('angle2');
  var text_angle3 = block.getFieldValue('angle3');
  var code = 'robot.move(' + text_angle1 + ', ' + text_angle2 + ', ' + text_angle3 + ');\n';
  return code;
};

Blockly.Cpp['linkbot_move_wait'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var code = 'robot.moveWait();\n';
  return code;
};

Blockly.Cpp['linkbot_turn'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'robot.' + dropdown_direction + '(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_distance'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_time'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_time = block.getFieldValue('time');
  var code = 'robot.driveTime(' + text_time + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_angle'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'robot.driveForward(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'robot.driveBackward(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Cpp['linkbot_reset'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var code = 'robot.resetToZero();\n';
  return code;
};

Blockly.Cpp['linkbot_turn_NB'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'robot.' + dropdown_direction + 'NB(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_distance_NB'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot.driveDistanceNB(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_time_NB'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_time = block.getFieldValue('time');
  var code = 'robot.driveTimeNB(' + text_time + ');\n';
  return code;
};

Blockly.Cpp['linkbot_drive_angle_NB'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Cpp.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'robot.driveForwardNB(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'robot.driveBackwardNB(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Cpp['linkbot_reset_NB'] = function(block) {
  Blockly.Cpp.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var code = 'robot.resetToZeroNB();\n';
  return code;
};