# README

## This is the repo g7 made together in class on June 12, 2015

## Get this puppy up and running

1. Fork, clone, `$ npm install`
1. Log into postgres CLI and create local database
  * `$ psql -d postgres`
  * `=# CREATE DATABASE tea_express_raw_sql`
  * keep psql server open in a tab
1. Run migration in the migrations folder
  * in new terminal tab, `$ node app/migrations/createTea.js`
  * verify that the table was created in psql terminal tab
    * `=# \c tea_express_raw_sql`
    * `=# SELECT * FROM teas;`
    * should see an empty table
1. Run server and check it out in the browser!
  * `$ DEBUG=tea-express-raw-sql:* npm start`
  * [http://localhost:3000/](http://localhost:3000/)

## Continue the Express / Postgres Magic!

1. Create a show page for teas
1. Allow a user to edit / update teas
1. Allow a user to delete teas
1. Allow a user to only see teas from a certain country
1. Add column for tea "type" in the database, and add type to index, show, forms, and routes
1. Allow a user to only see teas of a certain type
1. Allow a user to sort by tea type, tea country of origin
1. Keep that bootstrap strapping!
