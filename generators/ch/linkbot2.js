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

goog.provide('Blockly.Ch.linkbot2');

goog.require('Blockly.Ch');


Blockly.Ch.addReservedWords('Math');

Blockly.Ch['linkbot_constructor_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  return 'CLinkbotI robot1, robot2;\n';
};

Blockly.Ch['linkbot_speed_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_speed = block.getFieldValue('speed');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot' + dropdown_number + '.setSpeed(' + text_speed + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_blink_LED_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_delay = block.getFieldValue('delay');
  var text_numBlinks = block.getFieldValue('numBlinks');
  var code = 'robot' + dropdown_number + '.blinkLED(' + text_delay + ', ' + text_numBlinks + ');\n';
  return code;
};

Blockly.Ch['linkbot_delay_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_time = block.getFieldValue('time');
  var code = 'robot' + dropdown_number + '.delaySeconds(' + text_time + ');\n';
  return code;
};

Blockly.Ch['linkbot_move_joints_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_angle1 = block.getFieldValue('angle1');
  var text_angle2 = block.getFieldValue('angle2');
  var text_angle3 = block.getFieldValue('angle3');
  var code = 'robot' + dropdown_number + '.move(' + text_angle1 + ', ' + text_angle2 + ', ' + text_angle3 + ');\n';
  return code;
};

Blockly.Ch['linkbot_move_wait_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var code = 'robot' + dropdown_number + '.moveWait();\n';
  return code;
};

Blockly.Ch['linkbot_turn_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'robot' + dropdown_number + '.' + dropdown_direction + '(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_distance_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot' + dropdown_number + '.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_time_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_time = block.getFieldValue('time');
  var code = 'robot' + dropdown_number + '.driveTime(' + text_time + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_angle_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'robot' + dropdown_number + '.driveForward(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'robot' + dropdown_number + '.driveBackward(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Ch['linkbot_reset_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var code = 'robot' + dropdown_number + '.resetToZero();\n';
  return code;
};

Blockly.Ch['linkbot_turn_2_NB'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'robot' + dropdown_number + '.' + dropdown_direction + 'NB(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_distance_2_NB'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot' + dropdown_number + '.driveDistanceNB(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_time_2_NB'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_time = block.getFieldValue('time');
  var code = 'robot' + dropdown_number + '.driveTimeNB(' + text_time + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_angle_2_NB'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'robot' + dropdown_number + '.driveForwardNB(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'robot' + dropdown_number + '.driveBackwardNB(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Ch['linkbot_reset_2_NB'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var code = 'robot' + dropdown_number + '.resetToZeroNB();\n';
  return code;
};