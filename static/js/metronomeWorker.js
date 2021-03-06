// -------------------------------------------------------------------------
// Worker Thread for Metronome class
// -------------------------------------------------------------------------

var timerID = null;
var interval = 100;

self.onmessage = function(e) {
	if (e.data == "start") {
		timerID=setInterval(function() {
			postMessage({"tick": Date.now()})}, interval)
	}
	else if (e.data.interval) {
        console.log("setting interval");
        interval = e.data.interval;
        console.log("interval=" + interval);
		if (timerID) {
			clearInterval(timerID);
			timerID=setInterval(function() {
				postMessage({"tick": Date.now()})}, interval)
		}
	}
	else if (e.data == "stop") {
		clearInterval(timerID);
		timerID = null;
	}
};