# Introduction
This API will track data from the RNA Central Database. It will be necessary to have Typescript and PostgreSQL installed.

# How To

1. Create an .env file at the root of the project and insert this: 
```sh
DATABASE_URL=postgres://reader:NWDMCE5xdipIjRrp@hh-pgsql-public.ebi.ac.uk:5432/pfmegrnargs
PORT=3000
```
2. Run `npm install`

3. To run it in the dev mode: `npm run dev`

4. To start application: `npm start`