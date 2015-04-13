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
 * @fileoverview Generating Ch for mindstorms2 blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Ch.mindstorms2');

goog.require('Blockly.Ch');

Blockly.Ch['mindstorms2_speed_in'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_speed = block.getFieldValue('speed');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.' + 'setSpeed(' + text_speed + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_speed_cm'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_speed = block.getFieldValue('speed');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.' + 'setSpeed(' + text_speed + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_blink_LED'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_delay = block.getFieldValue('delay');
  var text_numBlinks = block.getFieldValue('numBlinks');
  var code = 'm_robot2.blinkLED(' + text_delay + ', ' + text_numBlinks + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_delay'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_time = block.getFieldValue('time');
  var code = 'm_robot2.delaySeconds(' + text_time + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_move_joints'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_angle1 = block.getFieldValue('angle1');
  var text_angle2 = block.getFieldValue('angle2');
  var text_angle3 = block.getFieldValue('angle3');
  var code = 'm_robot2.move(' + text_angle1 + ', ' + text_angle2 + ', ' + text_angle3 + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_move_wait'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var code = 'm_robot2.moveWait();\n';
  return code;
};

Blockly.Ch['mindstorms2_turn_in'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'm_robot2.' + dropdown_direction + '(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_turn_cm'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'm_robot2.' + dropdown_direction + '(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_distance_in'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_distance_cm'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.driveDistance(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_time'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_time = block.getFieldValue('time');
  var code = 'm_robot2.driveTime(' + text_time + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_angle'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'm_robot2.driveForward(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'm_robot2.driveBackward(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Ch['mindstorms2_reset'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var code = 'm_robot2.resetToZero();\n';
  return code;
};

Blockly.Ch['mindstorms2_turn_in_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'm_robot2.' + dropdown_direction + 'NB(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_turn_cm_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var dropdown_direction = block.getFieldValue('direction');
  var angle_turn_direction = block.getFieldValue('turn direction');
  var dropdown_radius = block.getFieldValue('radius');
  var dropdown_width = block.getFieldValue('width');
  var code = 'm_robot2.' + dropdown_direction + 'NB(' + angle_turn_direction + ', ' + dropdown_radius + ', ' + dropdown_width + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_distance_in_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.driveDistanceNB(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_distance_cm_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_distance = block.getFieldValue('distance');
  var dropdown_radius = block.getFieldValue('radius');
  var code = 'm_robot2.driveDistanceNB(' + text_distance + ', ' + dropdown_radius + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_time_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_time = block.getFieldValue('time');
  var code = 'm_robot2.driveTimeNB(' + text_time + ');\n';
  return code;
};

Blockly.Ch['mindstorms2_drive_angle_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var text_angle = block.getFieldValue('angle');
  if(Number(text_angle) >= 0)
    var code = 'm_robot2.driveForwardNB(' + text_angle + ');\n';
  else {
    text_angle = (-Number(text_angle)).toString();
    var code = 'm_robot2.driveBackwardNB(' + text_angle + ');\n';
  }
  return code;
};

Blockly.Ch['mindstorms2_reset_NB'] = function(block) {
  Blockly.Ch.definitions_['include_mindstorms'] =
      '#include <mindstorms.h>';
  Blockly.Ch.definitions_['include_mrobot2'] = 
      'CMindstorms m_robot2;';
  var code = 'm_robot2.resetToZeroNB();\n';
  return code;
};