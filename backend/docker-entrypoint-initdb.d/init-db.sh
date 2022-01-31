#!/usr/bin/env bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER airbank;
    CREATE DATABASE airbank_db ENCODING UTF8;
    GRANT ALL PRIVILEGES ON DATABASE airbank_db TO airbank;
    ALTER USER airbank WITH PASSWORD 'airbank';
    ALTER USER airbank WITH SUPERUSER;
EOSQL