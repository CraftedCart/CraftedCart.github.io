var greMonths = [
	["January", 31],
	["February", 28],
	["March", 31],
	["April", 30],
	["May", 31],
	["June", 30],
	["July", 31],
	["August", 31],
	["September", 30],
	["October", 31],
	["November", 30],
	["December", 31],
];

var gorMonths = [
	["March", 28],
	["April", 28],
	["May", 28],
	["June", 28],
	["Quintilis", 28],
	["Sextilis", 28],
	["September", 28],
	["October", 28],
	["November", 28],
	["December", 28],
	["January", 28],
	["February", 28],
	["Gormanuary", 28],
	["Intermission", 1],
];

function greToGor () {
	var day = parseInt($("#greDay").val());
	var month = parseInt($("#greMonth").val());
	var gDay = 0;
	var gMonth = 1;

	var dayOfYear = 0;

	if (month > 0 && month <= 12) {
		for (i = 0; i < month - 1; i++) {
			dayOfYear += greMonths[i][1];
		}
		dayOfYear += day;
	} else {
		dayOfYear = 366;
	}

	if (dayOfYear > 0 && dayOfYear <= 365) {

		var daysLeft = dayOfYear;
		for (i = 0; i < 14; i++) {
			if (daysLeft > gorMonths[gMonth - 1][1]) {
				daysLeft -= gorMonths[gMonth - 1][1];
				gMonth++;
			} else {
				for (daysLeft; daysLeft > 0; daysLeft--) {
					gDay++;
					if (gDay > 28) {
						gDay = 0;
						gMonth++;
					}
				}
				break;
			}
		}

		$("#outDayOfYear").html(dayOfYear);
		$("#outDay").html(gDay);
		$("#outMonth").html(gMonth + " (" + gorMonths[gMonth - 1][0] + ")");

	} else {
		$("#outDayOfYear").html("Huh?");
		$("#outDay").html("Huh?");
		$("#outMonth").html("Huh?");
	}
}

function gorToGre () {
	var day = parseInt($("#greDay").val());
	var month = parseInt($("#greMonth").val());
	var gDay = 0;
	var gMonth = 1;

	var dayOfYear = 0;

	if (month > 0 && month <= 14) {
		for (i = 0; i < month - 1; i++) {
			dayOfYear += gorMonths[i][1];
		}
		dayOfYear += day;
	} else {
		dayOfYear = 366;
	}

	if (dayOfYear > 0 && dayOfYear <= 365) {

		var daysLeft = dayOfYear;
		for (i = 0; i < 12; i++) {
			if (daysLeft > greMonths[gMonth - 1][1]) {
				daysLeft -= greMonths[gMonth - 1][1];
				gMonth++;
			} else {
				for (daysLeft; daysLeft > 0; daysLeft--) {
					gDay++;
					if (gDay > greMonths[gMonth - 1][1]) {
						gDay = 0;
						gMonth++;
					}
				}
				break;
			}
		}

		$("#outDayOfYear").html(dayOfYear);
		$("#outDay").html(gDay);
		$("#outMonth").html(gMonth + " (" + greMonths[gMonth - 1][0] + ")");

	} else {
		$("#outDayOfYear").html("Huh?");
		$("#outDay").html("Huh?");
		$("#outMonth").html("Huh?");
	}
}
