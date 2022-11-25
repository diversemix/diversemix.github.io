---
title: "MySQL Database Development"
last_modified_at: 2022-11-06T18:01:51+00:00
categories:
  - blank
tags:
  - snippet
  - opinion
  - learning
  - personal
---

Past collection of some very specific MySQL commands

## Checking size used:
```bash
ndb_mgm -e "ALL REPORT MEMORY"
```

## Renaming a table:
```sql
ALTER TABLE t1 RENAME t2;
```

## Moving data between tables:
```
INSERT INTO new_table SELECT * FROM old_table;
INSERT INTO new_table(col1, col2) SELECT col3, col4 FROM old_table;
```

## MySQL sizes

(Largely taken from : http://www.mysqlperformanceblog.com/2008/03/17/researching-your-mysql-table-sizes/)
Sizes of Tables in a Schema

```sql
SELECT
        count(*) tables,
        table_name,concat(round(sum(table_rows)/1000,2),'k') rows,
        concat(round(sum(data_length)/(1024*1024*1024),2),'G') data,
        concat(round(sum(index_length)/(1024*1024*1024),2),'G') idx,
        concat(round(sum(data_length+index_length)/(1024*1024*1024),2),'G') total_size,
        round(sum(index_length)/sum(data_length),2) idxfrac
    FROM information_schema.TABLES
    WHERE table_schema = 'schema_name'
        GROUP BY table_name
        ORDER BY sum(data_length+index_length) DESC;
```
### Find Total Size for MySQL Instance

```sql
SELECT count(*) tables,
  concat(round(sum(table_rows)/1000000,2),'M') rows,
  concat(round(sum(data_length)/(1024*1024*1024),2),'G') data,
  concat(round(sum(index_length)/(1024*1024*1024),2),'G') idx,
  concat(round(sum(data_length+index_length)/(1024*1024*1024),2),'G') total_size,
  round(sum(index_length)/sum(data_length),2) idxfrac
FROM information_schema.TABLES;
```

As above but with filter

```sql
SELECT count(*) tables,
       concat(round(sum(table_rows)/1000000,2),'M') rows,
       concat(round(sum(data_length)/(1024*1024*1024),2),'G') data,
       concat(round(sum(index_length)/(1024*1024*1024),2),'G') idx,
       concat(round(sum(data_length+index_length)/(1024*1024*1024),2),'G') total_size,
       round(sum(index_length)/sum(data_length),2) idxfrac
       FROM information_schema.TABLES
       WHERE  table_name like "%my_table%";
```
### Databases by Size

```sql
SELECT
        count(*) tables,
        table_schema,concat(round(sum(table_rows)/1000000,2),'M') rows,
        concat(round(sum(data_length)/(1024*1024*1024),2),'G') data,
        concat(round(sum(index_length)/(1024*1024*1024),2),'G') idx,
        concat(round(sum(data_length+index_length)/(1024*1024*1024),2),'G') total_size,
        round(sum(index_length)/sum(data_length),2) idxfrac
        FROM information_schema.TABLES
        GROUP BY table_schema
        ORDER BY sum(data_length+index_length) DESC LIMIT 10;
```

### Sizes by Storage Engines
```sql
SELECT engine,
        count(*) tables,
        concat(round(sum(table_rows)/1000000,2),'M') rows,
        concat(round(sum(data_length)/(1024*1024*1024),2),'G') data,
        concat(round(sum(index_length)/(1024*1024*1024),2),'G') idx,
        concat(round(sum(data_length+index_length)/(1024*1024*1024),2),'G') total_size,
        round(sum(index_length)/sum(data_length),2) idxfrac
        FROM information_schema.TABLES
        GROUP BY engine
        ORDER BY sum(data_length+index_length) DESC LIMIT 10;
```

## User Management

When the connecting to MySQL from another machine. Here are the commands to grant access to user "root" from the other machine "1.1.1.1" 

```sql
CREATE USER 'root'@'1.1.1.1' IDENTIFIED BY ''; GRANT ALL PRIVILEGES ON . TO 'root'@'1.1.1.1' WITH GRANT OPTION; FLUSH PRIVILEGES; 
```
Note the GRANT ALL command is pretty promiscuous - but it gets the job done.


# In memory

The essence is to use the /dev/shm directory (which is actually in memory) to store your sqlite file

So in django:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': '/dev/shm/sqlite3.db',
        'TEST_CHARSET': 'UTF8',
        'TEST_NAME': None  # in-memory sqlite db
    }
}

```

