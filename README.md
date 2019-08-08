# README

Run locally:

* heroku local -f Procfile.dev

Run the app:

* heroku open

Migrate the database:

* heroku run:detached rake db:migrate
* heroku restart (restarts dynamos)
