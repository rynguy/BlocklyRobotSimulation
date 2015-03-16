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

Blockly.Ch['linkbot_drive_distance'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_time'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var text_time = block.getFieldValue('time');
  var code = 'robot.driveTime(' + text_time + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_angle'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
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

Blockly.Ch['linkbot_speed'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_speed = block.getFieldValue('speed');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'robot.' + 'setSpeed(' + text_speed + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_blink_LED'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var text_delay = block.getFieldValue('delay');
  var text_numBlinks = block.getFieldValue('numBlinks');
  var code = 'robot.blinkLED(' + text_delay + ', ' + text_numBlinks + ');\n';
  return code;
};

Blockly.Ch['linkbot_connect'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var code = 'robot.connect();\n';
  return code;
};

Blockly.Ch['linkbot_close_gripper'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var code = 'robot.closeGripper();\n';
  return code;
};

Blockly.Ch['linkbot_constructor'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  return 'CLinkbotI robot;\n';
};

Blockly.Ch['linkbot_turn_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  if(dropdown_number == "robot 1")
    var code = 'robot1.' + dropdown_direction + '(' + angle_turn_direction + ', radius, trackwidth);\n';
  else
    var code = 'robot2.' + dropdown_direction + '(' + angle_turn_direction + ', radius, trackwidth);\n';
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
  if(dropdown_number == "robot 1")
    var code = 'robot1.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  else
    var code = 'robot2.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_time_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_time = block.getFieldValue('time');
  if(dropdown_number == "robot 1")
    var code = 'robot1.driveTime(' + text_time + ');\n';
  else
    var code = 'robot2.driveTime(' + text_time + ');\n';
  return code;
};

Blockly.Ch['linkbot_drive_angle_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  Blockly.Ch.definitions_['include_ch_math'] =
      '#include <math.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0) {
    if(dropdown_number == "robot 1")
      var code = 'robot1.driveForward(' + text_angle + ');\n';
    else
      var code = 'robot2.driveForward(' + text_angle + ');\n';
  }
  else {
    text_angle = (-Number(text_angle)).toString();
    if(dropdown_number == "robot 1")
      var code = 'robot1.driveBackward(' + text_angle + ');\n';
    else
      var code = 'robot2.driveBackward(' + text_angle + ');\n';
  }
  return code;
};
  
Blockly.Ch['linkbot_speed_2'] = function(block) {
  Blockly.Ch.definitions_['include_linkbot'] =
      '#include <linkbot.h>';
  var dropdown_number = block.getFieldValue('number');
  var text_speed = block.getFieldValue('speed');
  if(dropdown_number == "robot 1")
    var code = 'robot1.' + 'setSpeed(' + text_speed + ', radius);\n';
  else
    var code = 'robot2.' + 'setSpeed(' + text_speed + ', radius);\n';
  return code;
};
