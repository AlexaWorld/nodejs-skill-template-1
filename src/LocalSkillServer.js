if(process.env.runtime == "aws")
	return;
	
var skillName = 'test1';
var configFile = `./skills/${skillName}/config.json`;
var config = require(configFile);

var skillServer = require('alexaworld-skillserver');

var server = new skillServer(44303);

server.configure(config => {
	config.RootPath = __dirname + '/../';
	config.SkillPath = 'src/skills';
	config.SslPath = 'sslcert';
	config.SslPrivateKey = 'privkey1.pem';
	config.SslCertificate = 'cert1.pem';
	config.SslChain = 'chain1.pem';
});

// Add a skill by it's name
server.addSkill(skillName);

// Add a skill from package.json file. the following line overrides the previous regsitration
server.addSkillFromPackage(skillName);

// TODO ?
//server.addAllSkillsFromPackage();
server.start();
