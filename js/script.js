let progressBar = $("#my-progress-bar-1");
let currentWidthOfProgressBar = 0;

$('.btnUp1').click(function() {
	let widthProgress = $(".j-progress").width();
	let onePctOfWidthProgress = widthProgress * 0.01;
	if (currentWidthOfProgressBar < widthProgress) {
		currentWidthOfProgressBar += onePctOfWidthProgress; //+1%
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
	if (currentWidthOfProgressBar > widthProgress) {
		currentWidthOfProgressBar = widthProgress;
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
})

$('.btnUp3').click(function() {
	let widthProgress = $(".j-progress").width();
	let onePctOfWidthProgress = widthProgress * 0.01;
	if (currentWidthOfProgressBar < widthProgress) {
		currentWidthOfProgressBar += onePctOfWidthProgress * 3; //+3%
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
	if (currentWidthOfProgressBar > widthProgress) {
		currentWidthOfProgressBar = widthProgress;
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
})

$('.btnUp7').click(function() {
	let widthProgress = $(".j-progress").width();
	let onePctOfWidthProgress = widthProgress * 0.01;
	if (currentWidthOfProgressBar < widthProgress) {
		currentWidthOfProgressBar += onePctOfWidthProgress * 7; //+7%
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
	if (currentWidthOfProgressBar > widthProgress) {
		currentWidthOfProgressBar = widthProgress;
		progressBar.width(currentWidthOfProgressBar);
		//output of percent
		let y = currentWidthOfProgressBar / onePctOfWidthProgress;
		$('#my-progress-bar-1').text(y.toFixed(0) + '%');
	};
})
