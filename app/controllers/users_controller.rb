class UsersController < ApplicationController

	# Watched Movies
	def watched_movies
		@movies = current_user.watched_movies
	end
end