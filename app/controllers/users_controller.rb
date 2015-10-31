class UsersController < ApplicationController

	# Watched Movies
	def watched_movies
		@movies_ids = current_user.watched_movies
	end

	def add_watched_movies
		movie = Movie.find(params[:movie_id])
		current_user.watch_movie(movie)
		render :nothing => true, :status => 200
	end

	def delete_watched_movies
		@movie = Movie.find(params[:movie_id])
	end
end