/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

var ReactDOM = require('ReactDOM');

Object.assign(ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
  // These should be easy to copy into react_contrib and remove from here:
  adler32: require('adler32'),
  getVendorPrefixedEventName: require('getVendorPrefixedEventName'),
  getEventCharCode: require('getEventCharCode'),
  getEventKey: require('getEventKey'),
  getEventTarget: require('getEventTarget'),
  isEventSupported: require('isEventSupported'),
  setInnerHTML: require('setInnerHTML'),
  setTextContent: require('setTextContent'),
  PooledClass: require('PooledClass'),
  ReactDOMSelection: require('ReactDOMSelection'),
  ReactInputSelection: require('ReactInputSelection'),
  // These are mostly used in incorrect Flow typings and are codemoddable:
  SyntheticEvent: require('SyntheticEvent'),
  SyntheticKeyboardEvent: require('SyntheticKeyboardEvent'),
  SyntheticMouseEvent: require('SyntheticMouseEvent'),
  // These are real internal dependencies that are trickier to remove:
  ReactBrowserEventEmitter: require('ReactBrowserEventEmitter'),
  ReactErrorUtils: require('ReactErrorUtils'),
  ReactDOMComponentTree: require('ReactDOMComponentTree'),
  ReactInstanceMap: require('ReactInstanceMap'),
  // This is used for ajaxify on www:
  DOMProperty: require('DOMProperty'),
  // These are dependencies of TapEventPlugin:
  EventPluginUtils: require('EventPluginUtils'),
  EventPropagators: require('EventPropagators'),
  SyntheticUIEvent: require('SyntheticUIEvent'),
});

if (__DEV__) {
  Object.assign(ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // ReactPerf currently only works with the DOM renderer
    // so we expose it here, but only in DEV mode.
    ReactPerf: require('ReactPerf'),
  });
}

module.exports = ReactDOM;
