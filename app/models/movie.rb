require 'net/http'

class Movie
  include Mongoid::Document
  include Mongoid::Timestamps

  field :url, type: String
  field :format, type: String
  field :width, type: Float
  field :height, type: Float
  field :langauge, type: String
  field :duration, type: Float
  field :geoLock, type: Mongoid::Boolean

  def self.fetch_movies
	uri = URI.parse("https://demo2697834.mockable.io/movies")
	response = Net::HTTP.get_response(uri)
	body = response.body
	JSON.parse body
  end
end
