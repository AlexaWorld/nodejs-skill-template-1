
var Debugger = require('alexaworld-skilldebugger');
Debugger.appId = config.AppId;
Debugger.roleArn = 'arn:aws:iam::977739547106:role/lambda-dynamo-cloudwatch';
Debugger.roleSessionName = 'LocalDebugSession';

Debugger.skillHandler = require('../index');
//Debugger.skillRequestBody = require('./RequestBodies/TestRequest.json');
Debugger.skillRequestBody = require('./RequestBodies/LaunchRequest.json');
Debugger.skillRequestBody = require('./RequestBodies/ArgumentIntent.json');
// Debug help intent
//Debugger.skillRequestBody = require('./RequestBodies/AMAZON.HelpIntent.json');

Debugger.debug();
