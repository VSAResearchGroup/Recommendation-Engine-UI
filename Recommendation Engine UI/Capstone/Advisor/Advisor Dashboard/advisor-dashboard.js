//Note: Change any object properties or comparison value as according to
//actual naming scheme in the database
function vaaDashBuildStudentList() {
	//if needed, this will remove all item in #studentlist: $('#studentlist').empty(); before appending
	var ulElement, status, studentID, studentName, activePlanName, lastApprovedDate;
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
		status = $('<li></li>').text(studentList[i].status);
		if (studentList[i].status == 'In Progress') { //change color based on status
			status.css('color', 'orange');
		} else if (studentList[i].status == 'Pending') {
			status.css('color', 'red');
		} else if (studentList[i].status == 'Completed') {
			status.css('color', 'green');
		}
		studentID = $('<li></li>').text(studentList[i].studentID);
		studentName = $('<li></li>').text(studentList[i].studentName);
		activePlanName = $('<a></a>').text(studentList[i].activePlanName);
		activePlanName.attr('href', 'Advise%20Student%20Active%20Degree%20Plan/advise-degree-plans.html');
		activePlanName.addClass('advise-degree-plan');
		activePlanName = $('<li></li>').append(activePlanName);
		lastApprovedDate = $('<li></li>').text(studentList[i].lastApprovedDate);
		//Need to change lastApprovedDate properties to fit JS format if DB has different format
		ulElement = $('<ul></ul>').append(status, studentID, studentName, activePlanName, lastApprovedDate);
		ulElement.addClass('studentrow');
		$('#studentlist').append(ulElement);
	}
}

//for testing locally without connected to the backend
function vaaDashBuildArray() {
	var index = 0;
	var currentRow, studentObj;
	for (; index < 7; index++) {
		currentRow = $('#studentlist').children().eq(index);
		studentObj = {status:currentRow.children().eq(0).text(),
		              studentID:currentRow.children().eq(1).text(),
					  studentName:currentRow.children().eq(2).text(),
					  activePlanName:currentRow.children().eq(3).text(),
					  lastApprovedDate:currentRow.children().eq(4).text()}
		
		console.log('name is ' + currentRow.children().eq(3).text());
		
		studentList.push(studentObj);
	}
}

function vaaDashSortArray(sortType, sortValue) {
	if (sortType == 'Status') {
		studentList.sort(function(firstStudent, secondStudent) {
		    return vaaDashSortByStatus(firstStudent, secondStudent, sortValue);
		});
	} else if (sortType == 'Student ID') {
		studentList.sort(function(firstStudent, secondStudent) {
		    return vaaDashSortByStudentID(firstStudent, secondStudent, sortValue);
		});
	} else if (sortType == 'Student Name') {
		studentList.sort(function(firstStudent, secondStudent) {
		    return vaaDashSortByStudentName(firstStudent, secondStudent, sortValue);
		});
	} else if (sortType == 'Approved Date') {
		studentList.sort(function(firstStudent, secondStudent) {
		    return vaaDashSortByDate(firstStudent, secondStudent, sortValue);
		});
	}
}

function vaaDashSortByStatus(firstStudent, secondStudent, sortValue) {
	if (sortValue == 'Pending Request') {
		if (firstStudent.status == 'Pending' && secondStudent.status != 'Pending') {
			return -1;
		} else if (firstStudent.status != 'Pending' && secondStudent.status == 'Pending') {
			return 1;
		} else {
			return 0;
		}
	} else if (sortValue == 'In Progress Request') {
		if (firstStudent.status == 'In Progress' && secondStudent.status != 'In Progress') {
			return -1;
		} else if (firstStudent.status != 'In Progress' && secondStudent.status == 'In Progress') {
			return 1;
		} else {
			return 0;
		}
	} else if (sortValue == 'Completed Request') {
		if (firstStudent.status == 'Completed' && secondStudent.status != 'Completed') {
			return -1;
		} else if (firstStudent.status != 'Completed' && secondStudent.status == 'Completed') {
			return 1;
		} else {
			return 0;
		}
	}
}

function vaaDashSortByStudentID(firstStudent, secondStudent, sortValue) {
	return Number(firstStudent.studentID) - Number(secondStudent.studentID);
}

function vaaDashSortByStudentName(firstStudent, secondStudent, sortValue) {
	var firstName = firstStudent.studentName.toLowerCase();
	var secondName = secondStudent.studentName.toLowerCase();
	if (firstName < secondName) {
		return -1;
	} else if (firstName > secondName) {
		return 1;
	} else {
		return 0;
	}
}

function vaaDashSortByDate(firstStudent, secondStudent, sortValue) {
	var firstDateString = firstStudent.lastApprovedDate;
	var secondDateString = secondStudent.lastApprovedDate;
	if (firstDateString == '-' && secondDateString != '-') {
	    return 1;
	} else if (firstDateString != '-' && secondDateString == '-') {
		return -1;
	} else if (firstDateString == '-' && secondDateString == '-') {
		return 0;
	} else {
		var firstDate = new Date(firstDateString.slice(0,firstDateString.search(' ')));
	    var secondDate = new Date(secondDateString.slice(0,secondDateString.search(' ')));
	    if (firstDate > secondDate) {
		    return -1;
	    } else if (firstDate < secondDate) {
		    return 1;
	    } else {
		    return 0;
	    }
	}
}