$(document).ready(function(){
	// para guardar la link de youtube.
	var url = $("#videoSrc").attr('src');

	// hide.bs.modal es la class que bootstrap pone para cerrar el modal.
	$("#reelVideo").on('hide.bs.modal', function(){
		$("#videoSrc").attr('src', '');
	});

	// Por si abren el video por segunda vez
	$("#reelVideo").on('show.bs.modal', function(){
		$("#videoSrc").attr('src', url);
	})
})