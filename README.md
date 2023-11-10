# headiversity-sorting
Take home project for Headiveristy hiring process

## Setup
The following commands are inteded to be run from the `root level` of the project where this README is located, unless noted in the Back/Front end sections.

Run a postgresql docker container and bind the container port to localhost:5432 
```bash
docker run --rm -P -p 127.0.0.1:5432:5432 --name head-postgres -v seed_data/:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password123 -d postgres
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

Set up the DB by running the migrations 
```bash
adonis migration:run
```

Now you can finally load the canned pokemon data from the top level of this project `../seed_data/pokemon_data.csv`
```bash
psql -h localhost -p 5432 -U postgres -d headiversity -c "\copy pokemon(id,name,type,sub_type,total_score,hp,attack,defense,sp_attack,sp_defense,speed,generation,legendary) FROM '../seed_data/pokemon_data.csv' DELIMITER ',' CSV HEADER"
```

And to keep things clean, since postgres copy does not handle auto increment values, we must set the new ID count to the known maximum
```bash
psql -h localhost -p 5432 -U postgres -d headiversity -c "ALTER SEQUENCE pokemon_id_seq RESTART WITH 722"
```

### Front End
Like before, now navigate to the `front_end` directory first and install all the node dependencies.
```bash
npm install
```

All that is left is to start the project
```bash
npm start
```
and open [http://localhost:3000](http://localhost:3000) to view it in your browser.