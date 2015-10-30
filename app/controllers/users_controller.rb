class UsersController < ApplicationController

	# Watched Movies
	def watched_movies
		@movies = current_user.watched_movies
	end

	def add_watched_movies
		@movie = Movie.find(params[:movie_id])
	end

	def delete_watched_movies
		@movie = Movie.find(params[:movie_id])
	end
end