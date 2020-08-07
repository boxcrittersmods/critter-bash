// ==UserScript==
// @name Critter Bash
// @description  Useless Kernel
// @author       Tumble
// @version      0.0.1.1
// @run-at       document-start
// @require      https://github.com/SArpnt/joinFunction/raw/master/script.js
// @require      https://github.com/SArpnt/EventHandler/raw/master/script.js
// @require      https://github.com/SArpnt/cardboard/raw/master/script.user.js
// @require      https://github.com/tumble1999/min-gj/raw/master/dist/min-gj.min.js
// @require      https://github.com/boxcrittersmods/critter-bash/message.js
// @match        https://boxcritters.com/play/
// @match        https://boxcritters.com/play/?*
// @match        https://boxcritters.com/play/#*
// @match        https://boxcritters.com/play/index.html
// @match        https://boxcritters.com/play/index.html?*
// @match        https://boxcritters.com/play/index.html#*
// ==/UserScript==
cardboard.register("CritterBash");
console.log(EventHandler);
console.log(cardboard)

cardboard.on("worldCreated",(world)=>{
	document.getElementById("message").maxLength = 1000
	console.log(MinGJ);
})

MinGJ.etc.username = world.player.nickname


cardboard.on("worldCreated", (world) => {
	commandPrefixes["$"] = function(msg) {
		msg = msg.substr(1);
		Bash(msg)
	}
	console.log(commandPrefixes);
});

cardboard.on("login", (world) => {
	MGJLogin(world.player.nickname);
})

var onEvt = cardboard.on.bind(cardboard);
([
	"loadScriptClient","loadScriptLogin","loadScriptIndex",
	"loadScriptUnityProgress","loadScriptUnityLoader","loadScriptShowGame",
	"clientConnected",
	"worldCreated","worldSocketCreated","woldStageCreated",
	"worldStageCreated","worldManifestCreated",
	"login","joinRoom"
]).forEach(e=> {
	onEvt(e,function(a,b){
		function genDev(obj) {
			var name = obj.constructor.name;
			var i = 1;
			while(true){
				if(MinGJ.dev[name+i]==obj||!MinGJ.dev[name+i]) break;
				i++;
			}
			name = name+i;
			MinGJ.dev[name] = obj;
			console.log("bash: found device /dev/"+name,obj);
		}
		if(a) genDev(a);
		if(b) genDev(b);
	})
})