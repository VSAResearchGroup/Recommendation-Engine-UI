function displayActivePlan(text, status) {
	if (status == 1) {
		text+= '<div id="degreeplanblock">';
		
	    text+= '<h2 id="major">';
	    text+= '<a id="activedegreelink" href="../active-degree-table.html">';
	    text+= localStorage.getItem('jsonCollege') + ' - ' + localStorage.getItem('jsonMajor');
	    text+= '</span>';
	    text+= '</h2>';
		
		text+= '<h4 id="transferringcollege">Transferring College: ';
		text+= '<span id="transcollegelink">';
		text+= localStorage.getItem('jsonCollege');
		text+= '</span>';
		text+= '</h4>';
		
		text+= '<h4 id="intendedmajor">Intended Major: ';
		text+= '<span id="intendmajorlink">';
		text+= localStorage.getItem('jsonMajor');
		text+= '</span>';
		text+= '</h4>';
		
		
		text+= '</div>';
	} else if (status == 0) {
	    //display nothing
	}
	return text;
}

function setActivePlan(status) {
	
}


	  /*<h2 id="major"><a id='activedegreelink' href='../active-degree.html'>University of Washington Bothell - Computer Science</a></h2>
	  <h4 id='transferringcollege'>Transferring College: <span id='transcollegelink'>University of Washington Bothell</span></h3>
	  <h4 id='intendedmajor'>Intended Major: <span id='intendmajorlink' href='https://www.uwb.edu/bscsse'>Computer Science</span></h3>
	  <h4 id='degree'>Degree: <span>Associate in Arts and Sciences</span></h3>
	</div>
	localStorage.getItem('jsonMajor')
localStorage.getItem('jsonCollege')*/