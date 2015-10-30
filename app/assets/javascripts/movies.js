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

	$('.slider-movies-js').slick({
		dots: true,
		arrows: true, 
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		respondTo: 'slider', 
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	// $('button.slick-prev').click(function(){
	//     $("#movie_slider").slickPrev();
	// });

	// $('button.slick-next').click(function(){
	//     $("#movie_slider").slickNext();
	// });
});
