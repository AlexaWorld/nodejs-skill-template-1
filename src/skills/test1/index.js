/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
'use strict';

var Skill = require('alexaworld-nodeskills').NodeSkill;
var RequestHandler =  require('alexaworld-nodeskills').BuiltInRequestHandler;
var IntentHandler =  require('alexaworld-nodeskills').BuiltInIntentHandler
var ResponseBuilder = require('alexaworld-responsebuilder').ResponseBuilder;

var config = require('./config.json');

var skill = new Skill();

//RequestHandler.AddToSkill(skill);
skill.AppId = config.AppId;
skill.Name = 'test1';
IntentHandler.AddToSkill(skill);
skill.AddRequestHandler('IntentRequest', RequestHandler.IntentRequest);
skill.AddRequestHandler('LaunchRequest',RequestHandler.LaunchRequest);

module.exports = skill.export();

/* 
skill.AddRequestHandler('LaunchRequest', async function (alexaRequest) {
	//return 'So geht es auch';
	var rb = new ResponseBuilder(alexaRequest.Context);
rb.AddSessionAttribute('key','value');
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
