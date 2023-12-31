# headiversity-sorting
Take home project for Headiveristy hiring process V2

Dev Evironment
- Ubuntu 20.04
- Docker version 24.0.7
- Node version 20.9.0
- NPM version 10.2.3

User to test the App out with
U: *admin@email.com*
P: *supersecret*

## Addressing self-signed SSL certificate issues
Browsers are smart, they don't want to let you hit some https api endpoint signed by some random linux box. The fastest way around this is to use an incognito tab for chrome or firefox. Or follow a guide  [like this one for chrome](https://stackoverflow.com/a/31900210) on enabling self signed certificats for localhost on your browser of choice.


## Setup
The following commands are inteded to be run from the `root level` of the project where this README is located, unless noted in the Back/Front end sections.

Run a postgresql docker container and bind the container port to localhost:5432 
```bash
docker run --rm -P -p 127.0.0.1:5432:5432 --name head-postgres -e POSTGRES_PASSWORD=password123 -d postgres
```

Then set up a DB and user for the backend
```bash
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE headiversity"
```

We'll also want a persisted Redis docker container for our cache. We'll persist snapshots every 5m using the `--save` flag
```bash
docker run --rm -P -p 127.0.0.1:6379:6379 --name head-redis -d redis redis-server --save 300 1 --loglevel warning
```

This Adonis project is configured to use Postgresql, and therefor is dependent on the pg npm package. Make sure this gets installed, you might even want to do so with the global tag
```bash
npm install -g pg
```

### Back End
Copy the `environment.env` file to the `back_end` directory and rename it to `.env` for the backend to use. Normally we'd never put a config/secrets file like this in the code base, but it is the most expedient way forward for such a small project.

Navigate to the `back_end` directory and install all the node dependencies.
```bash
npm install
```

Set up the DB by running the migrations and seeders. Make sure to select the User seed file in the interactive mode.
```bash
node ace migration:run
node ace db:seed -i
```

Now you can finally load the canned pokemon data that lives in the top level of this project (`headiversity-sorting/seed_data/pokemon_data.csv`)
```bash
psql -h localhost -p 5432 -U postgres -d headiversity -c "\copy pokemon(id,name,type,sub_type,total_score,hp,attack,defense,sp_attack,sp_defense,speed,generation,legendary) FROM '../seed_data/pokemon_data.csv' DELIMITER ',' CSV HEADER"
```

And to keep things clean, since postgres copy does not handle auto increment values, we must set the new ID count to the known maximum
```bash
psql -h localhost -p 5432 -U postgres -d headiversity -c "ALTER SEQUENCE pokemon_id_seq RESTART WITH 722"
```

Finally, we start the back end with 
```bash
node ace serve
```

### Front End
Like before, now open a new terminal and navigate to the `front_end` directory first and install all the node dependencies.
```bash
npm install
```

All that is left is to start the project
```bash
npm start
```
and open [http://localhost:3000](http://localhost:3000) to view it in your browser.
