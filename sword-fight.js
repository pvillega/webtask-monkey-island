// See https://webtask.io/docs/model

var listInsults = [
	["You fight like a Dairy Farmer!","How appropriate! You fight like a cow!"],
	["This is the END for you, you gutter crawling cur!","And I've got a little TIP for you, get the POINT?"],
	["I've spoken with apes more polite than you!","I'm glad to hear you attended your family reunion!"],
	["Soon you'll be wearing my sword like a shish kebab!","First you better stop waving it about like a feather duster."],
	["People fall at my feet when they see me coming!","Even BEFORE they smell your breath?"],
	["I'm not going to take your insolence sitting down!","Your hemorroids are flaring up again eh?"],
	["I once owned a dog that was smarter than you.","He must have taught you everything you know."],
	["Nobody's ever drawn blood from me and nobody ever will.","You run THAT fast?"],
	["Have you stopped wearing diapers yet?","Why? Did you want to borrow one?"],
	["There are no words for how disgusting you are.","Yes there are. You just never learned them."],
	["You make me want to puke.","You make me think somebody already did."],
	["My handkerchief will wipe up your blood!","So you got that job as janitor, after all."],
	["I got this scar on my face during a mighty struggle!","I hope now you've learned to stop picking your nose."],
	["I've heard you are a contemptible sneak.","Too bad no one's ever heard of YOU at all."],
	["You're no match for my brains, you poor fool.","I'd be in real trouble if you ever used them."],
	["You have the manners of a beggar.","I wanted to make sure you'd feel comfortable with me."],
	["Every enemy I've met I've annihilated!","With your breath, I'm sure they all suffocated."],
	["You're as repulsive as a monkey in a negligee.","I look THAT much like your fiancée?"],
	["Killing you would be justifiable homicide!","Then killing you must be justifiable fungicide."],
	["You're the ugliest monster ever created!","If you don't count all the ones you've dated."],
	["I'll skewer you like a sow at a buffet!","When I'm done with you, you'll be a boneless filet."],
	["Would you like to be buried, or cremated?","With you around, I'd prefer to be fumigated."],
	["Coming face to face with me must leave you petrified!","Is that your face? I thought it was your backside."],
	["When your father first saw you, he must have been mortified!","At least mine can be identified."],
	["You can't match my witty repartee!","I could, if you would use some breath spray."],
	["I have never seen such clumsy swordplay!","You would have, but you were always running away."],
	["En garde! Touché!","Oh, that is so cliché."],
	["Throughout the Caribbean, my great deeds are celebrated!","Too bad they're all fabricated."],
	["I can't rest 'til you've been exterminated!","Then perhaps you should switch to decaffeinated."],
	["I'll leave you devasted, mutilated, and perforated!","Your odor alone makes me aggravated, agitated, and infuriated."],
	["Heaven preserve me! You look like something that's died!","The only way you'll be preserved is in formaldehyde."],
	["I'll hound you night and day!","Then be a good dog. Sit! Stay!"]
];

var insultsMap = new Map(listInsults);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = function(context, cb) {
	var incoming = context.data.insult || listInsults[getRandomInt(0, listInsults.length)][0]
	var result = {
		received: incoming,
		answer: insultsMap.get(incoming) || 'Incorrect insult!'
	};
	
    cb(null, result);
}        