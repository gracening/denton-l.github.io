var _typeobjects;
var _interval;
var notStopped = false;

window.onload = function() {
	animateTyping(document.getElementsByClassName("typetarget"));
}

window.onclick = stopTyping;

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
	_typeobjects = typeobjects;
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

function stopTyping() {
		if (notStopped) {
			notStopped = false;
			clearInterval(_interval);
			for (var i = 0; i < _typeobjects.length; i++) {
				_typeobjects[i].object.innerText = _typeobjects[i].text;
			}
			_typeobjects[_typeobjects.length - 1].object.innerHTML += "<span id=\"cursor\">k/span>";
		}
}
