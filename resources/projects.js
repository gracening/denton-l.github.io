var projectNumber = 0;
var projects;

$.getJSON("/resources/projectlist.json", function(json) {
		projects = json;
		for (var i = 0; i < projects.length; i++) {
				new Image().src = projects[i].image;
		}
		loadProject(projectNumber);
});

function loadProject(number) {
		var project = projects[number];
		$("#projectimage").attr("src", project.image);
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
