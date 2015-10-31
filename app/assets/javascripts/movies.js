function reloadSlick () {
	// body...
	console.log("Here");
	if ($('.slider-movies-js').length > 0) {
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

	};
}

$(document).on('ready page:load', function(event) {
  // apply non-idempotent transformations to the body
	jwplayer.key	=	'o4s2sJoIs5Ygkjs7m8ZtPh/39eIhkhzOLWPrbGhOg3k=';	


	$('.select-movie-js').on('click', function(){
		var movie_url = $(this).attr('movie_url');
		var image_url = $(this).attr('image_url');

		console.log(movie_url);
		console.log(image_url);
		var currentVideoPlayer = 'current_movie';
		$(".current-movie-js").attr('movie_id', $(this).attr('movie_id'));

		setTimeout(function(){
			jwplayer(currentVideoPlayer).setup({
				file: movie_url,
				image: image_url,
				aspectratio: '16:9',
				width: '100%'
			});
			jwplayer(currentVideoPlayer).onReady(function(){
				console.log("Ready");
				var current_id = $(".current-movie-js").attr('movie_id');
				console.log($(".current-movie-js").attr('movie_id'));
				$.ajax({
				    type: "PUT",
				    url: "/users/add_watched_movies/" + current_id,
				    contentType: "application/json; charset=utf-8",
				    dataType: "json",
				    success: function(data){
				    	alert(data);
				    },
				    failure: function(errMsg) {
				        alert(errMsg);
				    }
				});
			});
			jwplayer(currentVideoPlayer).onComplete(function() {
				console.log("Complete")
			})
		}, 300);

	});

	$('.tab-js').removeClass('active');
	if (window.location.href.indexOf("watched_movies") != -1) {
		$('.history-js').addClass('active');
	}else if(window.location.href.indexOf("movies") != -1){
		$('.home-js').addClass('active');
	};

	if ($('.slider-movies-js').length > 0) {
		reloadSlick();	
	}
});

