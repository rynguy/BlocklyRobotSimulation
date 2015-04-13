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

goog.provide('Blockly.Blocks.linkbot2');

goog.require('Blockly.Blocks');

Blockly.Blocks.linkbot2.HUE = 90;

Blockly.Blocks['linkbot2_speed_in'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("setSpeed(speed")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
        .appendField("in/sec, radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("in);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_speed_cm'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("setSpeed(speed")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
        .appendField("cm/sec, radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("cm);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_blink_LED'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("blinkLED(delay")
        .appendField(new Blockly.FieldTextInput(".1",
            Blockly.FieldTextInput.numberValidator), "delay")
        .appendField(", numBlinks")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "numBlinks")
        .appendField(");");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_delay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("delaySeconds(seconds")
        .appendField(new Blockly.FieldTextInput("3",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "time")
        .appendField(");");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_move_joints'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("move(angle1")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle1")
        .appendField("°, angle2")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle2")
        .appendField("°, angle3")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle3")
        .appendField("°);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_move_wait'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("moveWait();");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_turn_in'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["Left", "turnLeft"], ["Right", "turnRight"]]), "direction")
        .appendField("(angle")
        .appendField(new Blockly.FieldAngle("90"), "turn direction")
        .appendField(", radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("in, trackwidth")
        .appendField(new Blockly.FieldDropdown([["3.69", "3.69"]]), "width")
        .appendField("in);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_turn_cm'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["Left", "turnLeft"], ["Right", "turnRight"]]), "direction")
        .appendField("(angle")
        .appendField(new Blockly.FieldAngle("90"), "turn direction")
        .appendField(", radius")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm, trackwidth")
        .appendField(new Blockly.FieldDropdown([["9.37", "9.37"]]), "width")
        .appendField("cm);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_distance_in'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveDistance(distance")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("in, radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("in);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_distance_cm'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveDistance(distance")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("cm, radius")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_time'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveTime(")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "time")
        .appendField("sec);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_angle'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveAngle(angle")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle")
        .appendField("°);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_reset'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("resetToZero();");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_turn_in_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["Left", "turnLeft"], ["Right", "turnRight"]]), "direction")
        .appendField("NB(angle")
        .appendField(new Blockly.FieldAngle("90"), "turn direction")
        .appendField(", radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("in, trackwidth")
        .appendField(new Blockly.FieldDropdown([["3.69", "3.69"]]), "width")
        .appendField("in);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_turn_cm_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["Left", "turnLeft"], ["Right", "turnRight"]]), "direction")
        .appendField("NB(angle")
        .appendField(new Blockly.FieldAngle("90"), "turn direction")
        .appendField(", radius")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm, trackwidth")
        .appendField(new Blockly.FieldDropdown([["9.37", "9.37"]]), "width")
        .appendField("cm);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_distance_in_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveDistanceNB(distance")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("in, radius")
        .appendField(new Blockly.FieldDropdown([["1.75", "1.75"], ["1.625", "1.625"], ["2.0", "2.0"]]), "radius")
        .appendField("in);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_distance_cm_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveDistanceNB(distance")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "distance")
        .appendField("cm, radius")
        .appendField(new Blockly.FieldDropdown([["4.45", "4.45"], ["4.13", "4.13"], ["5.08", "5.08"]]), "radius")
        .appendField("cm);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_time_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveTimeNB(")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.numberValidator), "time")
        .appendField("sec);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_drive_angle_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("driveAngleNB(angle")
        .appendField(new Blockly.FieldTextInput("90",
            Blockly.FieldTextInput.numberValidator), "angle")
        .appendField("°);");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};

Blockly.Blocks['linkbot2_reset_NB'] = {
  init: function() {
    this.setColour(Blockly.Blocks.linkbot2.HUE);
    this.appendDummyInput()
        .appendField("resetToZeroNB();");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};