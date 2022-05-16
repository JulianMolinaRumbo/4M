

$(document).ready(function () {
	// para guardar la link de youtube.
	var url = $("#videoSrc").attr('src');

	// hide.bs.modal es la class que bootstrap pone para cerrar el modal.
	$("#reelVideo").on('hide.bs.modal', function () {
		$("#videoSrc").attr('src', '');
	});

	// Por si abren el video por segunda vez
	$("#reelVideo").on('show.bs.modal', function () {
		$("#videoSrc").attr('src', url);
	})
});

window.onload = function () {
	var images = ['./Images/FONDOS/Background/1.png', './Images/FONDOS/Background/2.png', './Images/FONDOS/Background/3.jpg'];
	var image = images[Math.floor(Math.random() * images.length)];
	if (image === './Images/FONDOS/Background/1.png') {
		document.getElementById('section-1').style.backgroundImage = "url('" + image + "')";
		// document.getElementsByTagName('body')[0].style.;
		var element = document.getElementById('guerrero-toggle');
		element.classList.add("show-image");
		document.addEventListener("mousemove", parallax);
		function parallax(e) {
			this.querySelectorAll('#guerrero-toggle').forEach(guerrerotoggle => {
				const speed = guerrerotoggle.getAttribute('data-speed')
				const x = (window.innerWidth - e.pageX * speed) / 100
				const y = (window.innerWidth - e.pageY * speed) / 100

				guerrerotoggle.style.transform = `translateX(${x}px) translateY(${y}px)`
			});
		}

	} else {
		document.getElementById('section-1').style.backgroundImage = "url('" + image + "')";
		// document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
		document.addEventListener("mousemove", parallax);
		function parallax(e) {
			this.querySelectorAll('.M').forEach(M => {
				const speed = M.getAttribute('data-speed')
				const x = (window.innerWidth - e.pageX * speed) / 100
				const y = (window.innerWidth - e.pageY * speed) / 100

				M.style.transform = `translateX(${x}px) translateY(${y}px)`
			});
		}
	}
}

function openNav() {
	document.getElementById("mySidenav").style.width = "80%";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.body.style.backgroundColor = "white";
}

function toggleImage(event) {
	element = document.getElementById(event.name);
	element.classList.toggle("show-image");
}