---
title: "Postgres for developers"
last_modified_at: 2022-11-25T20:55:52+00:00
categories:
  - Technical
tags:
  - database 
  - cheatsheet
---

Common commands to help developers when dealing with databases, specifically postgresql.

## Export CSV
An example of extracting data from the database, this sort of thing is useful if you are manually 
testing or checking what is in the database.

```bash
copy (select id from document) To '/tmp/docids.csv' with CSV DELIMITER ',' HEADER;
```

### Create JSON from CSV

The bash command `column` (see `man column`) can be used to parse a csv file into JSON. 
For example if a file `test.csv` has the following contents:
```csv
1,one,uno
2,two,dos
3,three,tres
```

... is run through `column` with the follow arguments...
```bash
column -J -s',' test.csv --table-columns=num,en,es
```
it will output:
```json
{
   "table": [
      {
         "num": "1",
         "en": "one",
         "es": "uno"
      },{
         "num": "2",
         "en": "two",
         "es": "dos"
      },{
         "num": "3",
         "en": "three",
         "es": "tres"
      }
   ]
}
```

## Restore a dump into a local database
Restoring from a sql dump file, after running make start

1. Ensure any application is disconnected from the database - if using docker-compose then you can use `docker-compose stop`
2. Ensure your current environment has the following variables setup (you can use command line args for `psql` but this starts to get clumsy). 
Note, we start by connecting to the postgres database so that we can drop and create the database in question `$MYDB`.
```bash
export PGPASSWORD=password
export PGDATABASE=postgres
export MYDB=navigator
export PGHOST=localhost
export PGUSER=navigator
export PGPASSWORD=localpassword
```

3. Drop any existing database 
```bash
psql -c "drop database $MYDB" 
```

4. Recreate your database
```bash
psql -c "create database $MYDB" 
```

5. The database can now be simply restored, remember to now use `$MYDB` when connecting/restoring:
```bash
export PGDATABASE=$MYDB
psql -f mydump.sql
```

6. Now you can restart any applications.

> :exclamation: If you are doing this frequently you may wish to create your own script.