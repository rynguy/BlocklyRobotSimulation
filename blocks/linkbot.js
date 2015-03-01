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

Blockly.Blocks['linkbot_constructor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField("Creating Linkbot with name")
        .appendField(new Blockly.FieldVariable("robot"), "Linkbot");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('Linkbot')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('Linkbot'))) {
      this.setFieldValue(newName, 'Linkbot');
    }
  }
};

Blockly.Blocks['linkbot_turn'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("robot"), "Linkbot")
        .appendField("turn")
        .appendField(new Blockly.FieldDropdown([["left", "turnLeft"], ["right", "turnRight"]]), "direction")
        .appendField(new Blockly.FieldAngle("90"), "turn direction");
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('Linkbot')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('Linkbot'))) {
      this.setFieldValue(newName, 'Linkbot');
    }
  }
};

Blockly.Blocks['linkbot_drive'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("robot"), "Linkbot")
        .appendField("drive")
        .appendField(new Blockly.FieldDropdown([["forward", "driveForward"], ["backward", "driveBackward"]]), "direction")
        .appendField(new Blockly.FieldTextInput("30",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "degree")
        .appendField(" °");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('Linkbot')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('Linkbot'))) {
      this.setFieldValue(newName, 'Linkbot');
    }
  }
};

Blockly.Blocks['linkbot_speed'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("robot"), "Linkbot")
        .appendField("set speed to")
        .appendField(new Blockly.FieldTextInput("10",
            Blockly.FieldTextInput.nonnegativeIntegerValidator), "speed")
    this.setInputsInline(true);
    this.setPreviousStatement(true, "null");
    this.setNextStatement(true, "null");
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getFieldValue('Linkbot')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('Linkbot'))) {
      this.setFieldValue(newName, 'Linkbot');
    }
  }
};


