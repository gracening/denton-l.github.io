var _objects;
var _strings;
var _interval;

window.onload = function() {
	animateTyping(document.getElementsByClassName("typetarget"));
}

window.onclick = stopTyping;

function animateTyping(objects) {
	if (objects.length <= 0) {
		return;
	}
	var strings = [];
	for (var i = 0; i < objects.length; i++) {
		objects[i].style.minHeight = objects[i].offsetHeight +"px";
		strings[i] = objects[i].innerText;
		objects[i].innerText = "";
	}
	_objects = [].slice.call(objects);
	_strings = [].slice.call(strings);
	type([].slice.call(objects), strings);	
}

function type(objects, strings) {
	var i = 0;
	var interval = _interval = setInterval(function() {
			objects[0].innerText = strings[0].substring(0, ++i);
			objects[0].innerHTML += "<span id=\"cursor\">&#9608;</span>";
			if (i >= strings[0].length) {
				clearInterval(interval);
				if (objects.length == 1) {
					flashCursor();
				} else {
					objects[0].innerText = strings[0];
					objects.splice(0, 1)
					strings.splice(0, 1)
					type(objects, strings);
				}
			}
		}, 10);
}

function stopTyping() {
	clearInterval(_interval);
	for (var i = 0; i < _objects.length; i++) {
		_objects[i].innerText = _strings[i];
	}
	_objects[_objects.length - 1].innerHTML += "<span id=\"cursor\">&#9608;</span>";
}
