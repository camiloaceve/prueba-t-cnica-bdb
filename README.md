# test-technique-bdb

Technical test bdb

# Install dependencies

npm install

# Create .env

configure the environment variables file for the operation of the API and the connection to the database

# Create tables in postgres DB file database/migrations

npx sequelize-cli db:migrate

#Create seeds in the database data burned by code in the database/seeders.

# The latter if it gives problems, rerun

# Below explanation

npx sequelize-cli db:seed:all

#Create models and migrations
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# Create migrations

npx sequelize-cli migration:generate --name migration-skeleton
