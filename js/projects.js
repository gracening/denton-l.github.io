var _projects;
var _projectNumber;

function loadProject(next, previous) {
	_projects[next].style.display = "inherit";
	if (previous !== undefined) {
		_projects[previous].style.display = "none";
	}
	animateTyping([_projects[next].querySelector(".projecttitle")]);
}

function changeProject(delta) {
	var nextProject = (_projectNumber + delta + _projects.length) % _projects.length;
	loadProject(nextProject, _projectNumber);
	_projectNumber = nextProject;
}

window.addEventListener("load", function () {
	var buttons = document.querySelectorAll(".projectbutton");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.display = "inherit";
	}

	_projects = document.querySelectorAll(".project");
	_projectNumber = window.location.hash == "" ?
		0 : Math.max(Array.from(_projects) .indexOf(document.querySelector(window.location.hash)), 0);

	for (var i = 0; i < _projects.length; i++) {
		_projects[i].style.display = "none";
	}

	loadProject(_projectNumber);
});
