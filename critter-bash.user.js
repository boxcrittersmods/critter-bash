// ==UserScript==
// @name Critter Bash
// @description  Useless Kernel
// @author       Tumble
// @version      0.1.0.5
// @run-at       document-start
// @require      https://github.com/SArpnt/joinFunction/raw/master/script.js
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// @require      https://github.com/SArpnt/cardboard/raw/master/script.user.js
// @require      https://github.com/tumble1999/mingj/raw/master/dist/mingj.min.js
// @require      https://github.com/boxcrittersmods/critter-bash/raw/master/message.js
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// ==/UserScript==
cardboard.register("CritterBash");

cardboard.on("worldCreated",(world)=>{
	document.getElementById("message").maxLength = 1000
	console.log(fs);
})


cardboard.on("worldCreated", (world) => {
	commandPrefixes["$"] = function(msg) {
		msg = msg.substr(1);
		Bash(msg)
	}
	console.log(commandPrefixes);
});

cardboard.on("login", (world) => {
	Bash("su -s "+world.player.nickname);
})

var onEvt = cardboard.on.bind(cardboard);
([
	"loadScriptClient","loadScriptLogin","loadScriptIndex",
	"loadScriptUnityProgress","loadScriptUnityLoader","loadScriptShowGame",
	"clientConnected",
	"worldCreated","worldSocketCreated","worldStageCreated",
	"worldStageCreated","worldManifestCreated",
	"login","joinRoom"
]).forEach(e=> {
	onEvt(e,function(a,b){
		function genDev(obj) {
			var name = obj.constructor.name;
			var i = 1;
			while(true){
				if(fs.dev[name+i]==obj||!fs.dev[name+i]) break;
				i++;
			}
			name = name+i;
			fs.dev[name] = obj;
			console.log("bash: found device /dev/"+name,obj);
		}
		if(a) genDev(a);
		if(b) genDev(b);
	})
})

fs.bin.exit = function (argc, argv, sys) {
	cheerio();
}