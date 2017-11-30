function vaaDashSetActivePlanInfo() {
	vaaSetActivePlanInfo();
	$('.degreeplanblock').css('margin-bottom', '1em');
}

function fillProgressBar(progress) {
	var width = 10;
	var id = setInterval(frame, 20);
	function frame() {
		if (width >= progress) {
			clearInterval(id);
		} else {
			width++;
			$('#fill').css('width', width + '%');
			$('#fill').text(width + '%');
		}
	}
}