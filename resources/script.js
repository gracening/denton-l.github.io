window.onload = function() {
	positionFooter();
	animateTyping(document.getElementsByClassName("typetarget"));
}

function positionFooter() {
	document.getElementById("content").style.paddingBottom = document.getElementsByTagName("footer")[0].offsetHeight +"px";
}

function animateTyping(objects) {
	if (objects.length <= 0) {
		flashCursor();
		return;
	}
	var strings = [];
	for (var i = 0; i < objects.length; i++) {
		objects[i].style.minHeight = objects[i].offsetHeight +"px";
		strings[i] = objects[i].innerText;
		objects[i].innerText = "";
	}
	type([].slice.call(objects), strings);	
}

function type(objects, strings) {
	var i = 0;
	var interval = setInterval(function() {
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

function flashCursor() {
	if (document.getElementById("cursor") == null) {
		return;
	}
	var on = true;
	setInterval(function() {
		document.getElementById("cursor").style.display = on ? "none" : "inline";
		on = !on;
	}, 500);
}