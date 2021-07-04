var ffi = require('ffi-napi');
var ref = require('ref-napi');
var Struct = require('ref-struct-napi');
const path = require('path');

var apnInfo = Struct({
  'apnName': 'string',
  'pdpType': 'int',
  'authprefType': 'int',
  'proxyIP': 'string',
  'proxyPort': 'string',
  'userName': 'string',
  'password': 'string',
  'timeout': 'uint'
});
var apnInfoPtr = ref.refType(apnInfo);
var bytePtr = ref.refType('byte');

console.log(path.resolve('nativeResources/APModule'))

var apLib = ffi.Library(path.resolve('nativeResources/APModule'), {
  "SearchDevice": ['int16', ['uint32']],
  "OpenDevice": ['int16', ['ushort', 'uint32']],
  "Close": ['int16', []],
  "GetSimKey": ['int16', ['string', 'string', 'string']],
  "Dialup": ['int16', ['string', 'string', 'string', 'string', 'string', 'string', 'string', 'ushort', 'ushort']],
  'DialupWithApn': ['int16', ['string', 'string', apnInfoPtr]],
  'DialingBreak': ['int16', []],
  'ApduCmd': ['int16', ['string', bytePtr, 'int', bytePtr]],
  'DeviceIpInfo': ['int16', ['bool', 'string']],
  'RebootDevice': ['void', []],
  'ModRegisterCheck': ['int16', []],
  'ModRegister': ['int16', ['string']]
});

module.exports = apLib;
