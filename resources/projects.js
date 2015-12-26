var projectNumber = 0;
var projects;

$.getJSON("/resources/projectlist.json", function(json) {
		projects = json;
		loadProject(projectNumber);
});

function loadProject(number) {
		var project = projects[number];
		$("#projectimage").attr("src", project.image);
		$("#projecttitle").text(project.title);
		$("#projectdescription").html(project.description);
		animateTyping(document.getElementsByClassName("typetarget"));
}

function nextProject() {
		projectNumber = ++projectNumber % projects.length;
		loadProject(projectNumber);
}

function previousProject() {
		projectNumber = --projectNumber < 0 ? projects.length - 1 : projectNumber;
		loadProject(projectNumber);
}
