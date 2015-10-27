json.array!(@movies) do |movie|
  json.extract! movie, :id, :url, :format, :width, :height, :langauge, :duration, :geoLock
  json.url movie_url(movie, format: :json)
end
