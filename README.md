# headiversity-sorting
Take home project for Headiveristy hiring process

## Setup

Run a postgresql docker container and bind the container port to localhost:5432 
```bash
docker run --rm -P -p 127.0.0.1:5432:5432 --name head-postgres -e POSTGRES_PASSWORD=password123 -d postgres
```

Then set up a DB and user for the backend
```bash
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE headiversity"
```
This Adonis project is configured to use Postgresql, and therefor is dependent on the pg npm package. Make sure this gets installed, you might even want to do so with the global tag
```bash
npm install -g pg
```


### Back End
Navigate to the `back_end` directory and install all the node dependencies.
```bash
npm install
```

Then set up the DB by running the migrations 
```bash
adonis migration:run
```

### Front End
Like before, navigate to the `front_end` directory first and install all the node dependencies.
```bash
npm install
```

All that is left is to start the project
```bash
npm start
```
and open [http://localhost:3000](http://localhost:3000) to view it in your browser.