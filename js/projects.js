var projectNumber = 0;
var projects;

$.getJSON("/resources/projectlist.json", function(json) {
		projects = json;
		loadProject(projectNumber);
		for (var i = 0; i < projects.length; i++) {
				new Image().src = projects[i].image;
		}
});

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
