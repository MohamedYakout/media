$(document).ready(function(){
	jwplayer.key	=	'o4s2sJoIs5Ygkjs7m8ZtPh/39eIhkhzOLWPrbGhOg3k=';	


	$('.select-movie-js').on('click', function(){
		var movie_url = $(this).attr('movie_url');
		var image_url = $(this).attr('image_url');

		console.log(movie_url);
		console.log(image_url);
		var currentVideoPlayer = 'current_movie';

		setTimeout(function(){
			jwplayer(currentVideoPlayer).setup({
				file: movie_url,
				image: image_url,
				aspectratio: '16:9',
				width: '100%'
			});
			jwplayer(currentVideoPlayer).onReady(function(){
				console.log("Ready");
			});

			jwplayer(currentVideoPlayer).onComplete(function() {
				console.log("Complete")
			})
		}, 300);

	});
});
