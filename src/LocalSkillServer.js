var skillServer = require('alexaworld-skillserver');

var skillName = 'test1';
var configFile = `./skills/${skillName}/config.json`;
var config = require(configFile);

var server = new skillServer(44303);

server.configure(config => {
	config.RootPath = __dirname + '/../';
	config.SkillPath = 'src/skills';
	config.SslPath = 'sslcert';
	config.SslPrivateKey = 'privkey1.pem';
	config.SslCertificate = 'cert1.pem';
	config.SslChain = 'chain1.pem';
});

server.addSkill(skillName);
// the following line overrides the previous regsitration
server.addSkillFromPackage(skillName);

server.start();