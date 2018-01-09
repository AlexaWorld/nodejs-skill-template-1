/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';

var Skill = require('alexaworld-nodeskills')
//var RequestHandler = require('alexaworld-builtinrequesthandler');
var RequestHandler = require('./BuiltInHandler');
var ResponseBuilder = require('alexaworld-responsebuilder').ResponseBuilder;

var config = require('./config.json');

var skill = new Skill();
RequestHandler.AddToSkill(skill);
skill.AppId = config.AppId;
skill.Name = 'test1';

/* 
skill.AddRequestHandler('LaunchRequest', async function (alexaRequest) {
	//return 'So geht es auch';
	var rb = new ResponseBuilder(alexaRequest.Context);
	var z = alexaRequest.Translate('LaunchRequest');
	var text = skill.GetRandomText(z);
	rb
		.Say(text)
		.Ask("NOch was?")
		.WithCard(builder => {
			builder.WithSimpleCard("alexaWorld", text);
		})
		.WithDisplay(builder => {
			builder
				.WithBodyTemplate(2)
				.WithTitle("Geht doch")
				.WithSecondaryPlainText("Sec")
				.WithPrimaryPlainText("Prim")
			;
		})
	;
	return rb;
});

skill.IntentHandler.IntentRequest = function () {

	this.response.speak('ok');
	this.emit(':responseReady');
};

skill.IntentHandler.TestRequest = function () {
	//	var xy = require("./data/facts-de-DE.js")
	var x = require('./AlexaDate');
	var n = this.event.request.intent.name;
	this.response.speak(Skill.GetRandomText(this.t(n)));
	this.emit(':responseReady');
};

skill.IntentHandler.IntentSelector = function () {
	Skill.requestBody = this.event;
	var n = this.event.request.intent.name;
	var value = Skill.GetSlotValue('IntentName');
	this.response.speak(Skill.GetRandomText(this.t(n)));
	this.emit(':responseReady');
} */
/*
aw.IntentHandler.ArgumentIntent = function () {
	//	var xy = require("./data/facts-de-DE.js")
	aw.requestBody = this.event;
	var x = require('./AlexaDate');
	var n = this.event.request.intent.name;
	var slots = aw.GetSlotValue("argument");
	this.response.speak(aw.GetRandomText(this.t(n)));
	this.emit(':responseReady');
};
*/
module.exports = skill;
