/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
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
 * @fileoverview Variable blocks for Blockly.
 * @author 
 */
'use strict';

goog.provide('Blockly.Blocks.mindstorms2');

goog.require('Blockly.Blocks');


Blockly.Blocks.mindstorms2.HUE = 290;

Blockly.Blocks['mindstorms_speed_in_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("set speed")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
        .appendField("in/sec");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("inches");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_speed_cm_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("set speed")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
        .appendField("cm/sec");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_blink_LED_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("blink for")
        .appendField(new Blockly.FieldTextInput(".1",
            Blockly.FieldTextInput.numberValidator), "delay")
        .appendField("seconds");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "numBlinks")
        .appendField("times");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_delay_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("delay by")
        .appendField(new Blockly.FieldTextInput("3",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "time")
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_move_joints_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("move joints")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle1")
        .appendField("°,")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle2")
        .appendField("°,")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle3")
        .appendField("°");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_move_wait_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("move wait");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_turn_in_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "turn direction");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("inches");
    this.appendDummyInput()
        .appendField("and a track width of")
        .appendField(new Blockly.FieldDropdown([["3.69", "3.69"]]), "width")
        .appendField("inches");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_turn_cm_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "turn direction");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("and a track width of")
        .appendField(new Blockly.FieldDropdown([["9.37", "9.37"]]), "width")
        .appendField("cm");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_distance_in_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("inches");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("inches");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_distance_cm_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_time_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive for")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "time")
        .appendField("seconds");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_angle_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive wheels by")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle")
        .appendField("°");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_reset_2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("reset to zero position");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_turn_in_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "turn direction");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("inches");
    this.appendDummyInput()
        .appendField("and a track width of")
        .appendField(new Blockly.FieldDropdown([["3.69", "3.69"]]), "width")
        .appendField("inches (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_turn_cm_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
        .appendField("by")
        .appendField(new Blockly.FieldAngle("90"), "turn direction");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("and a track width of")
        .appendField(new Blockly.FieldDropdown([["9.37", "9.37"]]), "width")
        .appendField("cm (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_distance_in_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("inches");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("inches (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_distance_cm_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("cm");
    this.appendDummyInput()
        .appendField("with a wheel radius of")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_time_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive for")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "time")
        .appendField("seconds (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_drive_angle_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("drive wheels by")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle")
        .appendField("° (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['mindstorms_reset_2_NB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["m_robot 1", "1"], ["m_robot 2", "2"]]), "number")
        .appendField("reset to zero position (NB)");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};