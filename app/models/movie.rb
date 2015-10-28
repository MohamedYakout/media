require 'net/http'

class Movie
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :description, type: String
  field :type, type: String, default: "movie"
  field :publishedDate, type: Integer
  field :availableDate, type: Integer

  field :metadata, type: Array, default: [{"value": "en", "name": "language"}]

  field :contents, type: Array
  field :credits, type: Array
  field :parentalRatings, type: Array
  field :images, type: Array
  field :categories, type: Array

  field :media_id, type: String


  # The following methods to load data & Save its in DB
  def self.fetch_movies
  uri = URI.parse("https://demo2697834.mockable.io/movies")
  response = Net::HTTP.get_response(uri)
  body = response.body
  JSON.parse body
  end

  def self.add_movies_to_db
    res_json = Movie.fetch_movies

    arr = res_json["entries"]
    puts arr
    arr.each do |mov|
      movie_id = mov.delete("id")
      movie = Movie.new(mov)
      movie.media_id = movie_id
      movie.save
    end
  end
end
