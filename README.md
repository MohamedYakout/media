# media
Simple Media App

# How to fetch this app in your Localhost - Ubuntu 14.04: 
## Install mongoDB

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
```

For Ubuntu-12.04
```
echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

For Ubuntu-14.04
```
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
```

Then
```
sudo apt-get update
sudo apt-get install -y mongodb-org
```

## Install ruby
Install curl, git, nodejs
```
sudo apt-get install apache2 curl git libmysqlclient-dev mysql-server nodejs
```
Install rvm:
```
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```
Install ruby & rails: 
```
rvm install 2.1.1
rvm use 2.1.1
gem install rails --version 4.2.4
rvm --default 2.1.1
```
## Install bundler 
```
gem install bundler
```

## Clone the app & Run: 
To clone on localhost: 
```
cd 
git clone https://github.com/MohamedYakout/media.git
cd media/ 
```
To install gems in Gemfile: 
```
bundle install
```
Then open rails console to load the given list of movie in the following URL [https://demo2697834.mockable.io/movies](https://demo2697834.mockable.io/movies)
```
rails c
Movie.add_movies_to_db
```
Then you can open the server and test it on your localhost: 
```
rails s
```
then open in browser [http://localhost:3000](http://localhost:3000)