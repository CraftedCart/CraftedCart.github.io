function updateCountdown () {
	var now = new Date();
	if (now.getMonth() == 11 && now.getDate() >= 25) {
		var target = new Date(now.getFullYear() + 1, 11, 25, 0, 0, 0, 0);
	} else {
		var target = new Date(now.getFullYear(), 11, 25, 0, 0, 0, 0);
	}

	var diffDays = Math.floor((target - now) / (1000 * 60 * 60 * 24));
	var diffHours = Math.floor((target - now) / (1000 * 60 * 60));
	var diffMinutes = Math.floor((target - now) / (1000 * 60));
	var diffSeconds = Math.floor((target - now) / 1000);
	var diffMilliseconds = Math.floor(target - now);

	display (diffDays, diffHours, diffMinutes, diffSeconds, diffMilliseconds);
}

function display (days, hours, minutes, seconds, milliseconds) {
	tdays = ("00" + days).slice(-3);
	thours = ("0" + (hours - ((days) * 24))).slice(-2);
	tminutes = ("0" + (minutes - ((hours) * 60))).slice(-2);
	tseconds = ("0" + (seconds - ((minutes) * 60))).slice(-2);
	tmilliseconds = ("00" + (milliseconds - (seconds * 1000))).slice(-3);

	$("#countdownDays").html(tdays + " Days");
	$("#countdownHours").html(thours + " Hours");
	$("#countdownMinutes").html(tminutes + " Minutes");
	$("#countdownSeconds").html(tseconds + " Seconds");
	$("#countdownMilliseconds").html(tmilliseconds + " Milliseconds");

	$("#countdownDaysProg").css("width", (1 - (days / 365)) * 100 + "%");
	$("#countdownHoursProg").css("width", (1 - (hours - ((days) * 24)) / 24) * 100 + "%");
	$("#countdownMinutesProg").css("width", (1 - (minutes - ((hours) * 60)) / 60) * 100 + "%");
	$("#countdownSecondsProg").css("width", (1 - (seconds - ((minutes) * 60)) / 60) * 100 + "%");
	$("#countdownMillisecondsProg").css("width", (1 - (milliseconds - ((seconds) * 1000)) / 1000) * 100 + "%");
}
