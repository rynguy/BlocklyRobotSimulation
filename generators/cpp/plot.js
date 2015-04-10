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
 * @fileoverview Generating Cpp for plot blocks.
 * @author 
 */
'use strict';

goog.provide('Blockly.Cpp.plot');

goog.require('Blockly.Cpp');


Blockly.Cpp.addReservedWords('Math');

Blockly.Cpp['plot_coord'] = function(block) {
  Blockly.Cpp.definitions_['include_chplot'] =
      '#include <chplot.h>';
  return 'plot.mathCoord();\n';
};

Blockly.Cpp['plot_title'] = function(block) {
  Blockly.Cpp.definitions_['include_chplot'] =
      '#include <chplot.h>';
  var text_title = block.getFieldValue('Title');
  var code = 'plot.title("' + text_title + '");\n';
  return code;
};

Blockly.Cpp['plot_label'] = function(block) {
  Blockly.Cpp.definitions_['include_chplot'] =
      '#include <chplot.h>';
  var dropdown_axis = block.getFieldValue('axis');
  var text_label = block.getFieldValue('label');
  var code = 'plot.label(PLOT_AXIS_' + dropdown_axis + ', "' + text_label + '");\n';
  return code;
};