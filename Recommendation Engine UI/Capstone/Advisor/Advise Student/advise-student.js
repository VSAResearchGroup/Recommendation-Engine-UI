//Note: Change any object properties or comparison value as according to
//actual naming scheme in the database
function vaaASBuildStudentList() {
	//if needed, this will remove all item in #studentlist: $('#studentlist').empty(); before appending
	var ulElement, studentID, studentName, pendingPlanStatus, adviseButton;
	var i = 0;
	/*
	Uncomment these codes if testing locally and connected to the backend (i.e. making AJAX calls)
	Comment these codes if testing locally without connected to the backend (i.e. not making AJAX calls)
    //retrieve list of student this advisor responsible for
	var dbStudentList = JSON.parse(sessionStorage.getItem('studentListArray'));
	while (typeof dbStudentList[dbStudentList.length - 1] === 'object') {
		studentList.push(dbStudentList.pop());
	}*/
	for (;i < 7; i++) {
		studentID = $('<li></li>').text(studentList[i].studentID);
		studentName = $('<li></li>').text(studentList[i].studentName);
		pendingPlanStatus = $('<li></li>').text(studentList[i].pendingStatus);
		adviseButton = $('<Button></Button>').text('Advise');
		adviseButton.addClass('advise-button');
		adviseButton = $('<li></li>').append(adviseButton);
		ulElement = $('<ul></ul>').append(studentID, studentName, pendingPlanStatus, adviseButton);
		ulElement.addClass('studentrow');
		$('#studentlist').append(ulElement);
	}
}
	
function vaaASBuildArray() {
	var index = 0;
	var currentRow, studentObj;
	for (; index < 7; index++) {
		currentRow = $('#studentlist').children().eq(index);
		studentObj = {studentID:currentRow.children().eq(0).text(),
					  studentName:currentRow.children().eq(1).text(),
					  pendingStatus:currentRow.children().eq(2).text()}
		
		studentList.push(studentObj);
	}
}

function vaaASSortArray() {
	studentList.sort(function(firstStudent, secondStudent) {
		var firstName = firstStudent.studentName.toLowerCase();
		var secondName = secondStudent.studentName.toLowerCase();
		if (firstName < secondName) {
		    return -1;
	    } else if (firstName > secondName) {
		    return 1;
	    } else {
		    return 0;
	    }
	});
}