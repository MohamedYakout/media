class Movie
  include Mongoid::Document
  field :url, type: String
  field :format, type: String
  field :width, type: Float
  field :height, type: Float
  field :langauge, type: String
  field :duration, type: Float
  field :geoLock, type: Mongoid::Boolean
end
