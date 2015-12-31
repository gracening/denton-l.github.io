var _interval = 0;

window.onload = function() {
	_notStopped = true;
	animateTyping(document.getElementsByClassName("typetarget"));
}

function animateTyping(objects) {
	if (objects.length <= 0) {
		return;
	}
	var typeobjects = [];
	for (var i = 0; i < objects.length; i++) {
		typeobjects[i] = {
				object: objects[i],
				text: objects[i].innerText
		};
		objects[i].innerText = "";
	}
	type(typeobjects);	
}

function type(typeobjects) {
	var i = 0;
	var interval = _interval = setInterval(function() {
			typeobjects[0].object.innerText = typeobjects[0].text.substring(0, ++i);
			typeobjects[0].object.innerHTML += "<span id=\"cursor\"></span>";
			if (i >= typeobjects[0].text.length) {
				clearInterval(interval);
				if (typeobjects.length > 1) {
					typeobjects[0].object.innerText = typeobjects[0].text;
					typeobjects.splice(0, 1)
					type(typeobjects);
				}
			}
		}, 15);
}
