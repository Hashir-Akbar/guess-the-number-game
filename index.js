$(document).ready(function () {
	$(".fromToNum").hide();
	$(".guess-btn").hide();
	$(".restart-btn").hide();
	$(".input").prop("disabled", true);
	$(".input").val("");
	$(".gif").removeAttr("src");

	let audio = new Audio("/audio/firework-show-short-64657.mp3");
	let regExp = new RegExp("^([1-9]|1[0-9]|2[0-5])$");

	function arrows() {
		$(`[data-arrow='up']`).on("click", () => {
			let inputVal = Number($(".input").val());
			let i = inputVal;

			if (i >= 0 && i < 25) {
				i++;
				$(".input").val(i);
			}
		});
		$(`[data-arrow='down']`).on("click", () => {
			let inputVal = Number($(".input").val());
			let i = inputVal;
			if (i > 1 && i <= 25) {
				i--;
				$(".input").val(i);
			}
		});
	}
	function guessLowSms() {
		let guessLow = [
			"Guess Low",
			"hehe, guess more low",
			"Ehhh, not reached guess low",
			"More down yet, guess low",
			"Guess low yet",
		];

		let i = Math.floor(Math.random(guessLow.length) * guessLow.length);
		return guessLow[i];
	}
	function guessHighSms() {
		let guessHigh = [
			"Guess High",
			"Guess more, high to the sky",
			"not yet, guess high",
			"More high, like an eagle ",
			"Guess high, ..EHH",
		];

		let i = Math.floor(Math.random(guessHigh.length) * guessHigh.length);
		return guessHigh[i];
	}

	let randomNum;
	function startBtn() {
		$(".start").on("click", () => {
			$(".fromToNum").show();
			$(".guess-btn").show();
			$(".start").hide();
			$(".input").removeAttr("disabled");
			if ($(".start").is(":hidden")) {
				arrows();
			} else {
			}
			randomNum = randomNumber();
			randomNum;
		});
	}
	startBtn();

	$(".restart-btn").on("click", () => {
		$(".restart-btn").hide();
		$(".start").show();
		$(".input").val("");
		$(".check").html("");
		$(".gif").removeAttr("src");
		audio.pause();
	});

	function randomNumber() {
		let randomNum = Math.floor(Math.random() * 25) + 1;
		return randomNum;
	}

	$(".guess-btn").on("click", () => {
		if ($(".input").val().match(regExp)) {
			$(".check").css("font-size", "1.4rem");
			let inputVal = $(".input").val();
			if (inputVal == randomNum) {
				$(".check").html("Congrats, you won");
				$(".input").prop("disabled", true);
				$(".restart-btn").show();
				$(".guess-btn").hide();
				$(".gif").attr("src", "img/firework.gif");
				audio.currentTime = 0;
				audio.play();
			} else if (inputVal == "") {
				$(".check").html("");
			} else if (inputVal > randomNum) {
				$(".check").html(guessLowSms());
			} else if (inputVal < randomNum) {
				$(".check").html(guessHighSms());
			}
		} else {
			$(".check").html("Only input numbers between 1-25");

			$(".check").css("font-size", "1.9rem");
		}
	});
});
