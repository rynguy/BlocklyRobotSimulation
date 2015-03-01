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
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.linkbot');

goog.require('Blockly.Blocks');


Blockly.Blocks.linkbot.HUE = 290;

Blockly.Blocks['linkbot_turn'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
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

Blockly.Blocks['linkbot_drive'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("drive")
        .appendField(new Blockly.FieldDropdown([["forward", "driveForward"], ["backward", "driveBackward"]]), "direction")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "distance")
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

Blockly.Blocks['linkbot_speed'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("set speed to")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  }
};
