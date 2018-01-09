
var ResponseBuilder = require('alexaworld-responsebuilder').ResponseBuilder;

module.exports.AddToSkill = function(skill){
	skill.AddRequestHandler('LaunchRequest', async function (alexaRequest) {
		var rb = new ResponseBuilder(alexaRequest.Context);
		rb.AddSessionAttribute('key','value');
		var text = skill.GetRandomText( alexaRequest.Translate('LaunchRequest'));
		var ask = "Noch was?"; // TODO: text library
		rb
			.Say(text)
			.Ask(ask)
			.WithCard(builder => {
				builder.WithSimpleCard(skill.Name, text);
			})
			.WithDisplay(builder => {
				builder
					.WithBodyTemplate(2)
					.WithTitle(skill.Name)
					.WithSecondaryPlainText(ask)
				;
			})
		;
		return rb;
	});
}


var builtInHandlers = {
	'LaunchRequest': function () {
		aw.requestBody = this.event;
		this.response.speak(aw.GetRandomText(this.t('LaunchRequest')));
		this.emit(':responseReady');
	},
	'Unhandled':function(){
		aw.requestBody = this.event;
		this.response.speak(aw.GetRandomText(this.t('LaunchRequest')));
		this.emit(':responseReady');

	},
	'IntentRequest': function () {
		aw.requestBody = this.event;
		this.response.speak(aw.GetRandomText(this.t('LaunchRequest')));
		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		aw.requestBody = this.event;
		const speak = aw.GetRandomText(this.t('AMAZON_HelpIntent'));
		const listen = aw.GetRandomText(this.t('AMAZON_HelpIntent_Ask'));

		this.response.speak(listen).listen(listen);
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		aw.requestBody = this.event;
		this.response.speak(aw.GetRandomText(this.t('EndMessage')));
		this.emit(':responseReady');
	},
	'AMAZON.StopIntent': function () {
		aw.requestBody = this.event;
		this.response.speak(aw.GetRandomText(this.t('EndMessage')));
		this.emit(':responseReady');
	}
};