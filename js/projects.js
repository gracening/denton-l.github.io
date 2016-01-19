var projectNumber;
var projects;

$.getJSON("/resources/projectlist.json", function(json) {
		var name = getQueryValue("project");
		projects = json;

		if (name !== null) {
			for (projectNumber = projects.length - 1; projectNumber > 0; projectNumber--) {
				if (projects[projectNumber].query === name) {
					break;
				}
			}
		} else {
			projectNumber = 0;
		}

		loadProject(projectNumber);

		for (var i = 0; i < projects.length; i++) {
				new Image().src = projects[i].image;
		}
});

function getQueryValue(key) {
	var pairs = window.location.search.substring(1).split("&");
	for (var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].split("=");
		if (pair.length != 2) {
			continue;
		} else if (pair[0] === key) {
			return pair[1];
		}
	}
	return null;
}

function loadProject(number) {
		var project = projects[number];
		clearInterval(_interval);
		$("#imagesection").css("background-image", "url(" +project.image +")");
		$("#projecttitle").text(project.title);
		$("#projectdescription").html(project.description);
		animateTyping($(".typetarget"));
}

function nextProject() {
		projectNumber = ++projectNumber % projects.length;
		loadProject(projectNumber);
}

function previousProject() {
		projectNumber = --projectNumber < 0 ? projects.length - 1 : projectNumber;
		loadProject(projectNumber);
}
