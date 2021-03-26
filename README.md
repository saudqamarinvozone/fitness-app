# fitness-app

## Running Locally

```bash
git clone https://github.com/saudqamarinvozone/fitness-app.git
cd fitness-app
```

```
Configure database first, for configuration see the `Configuraion` section 

```

```
npm install
npx sequelize db:migrate
npm start
```
Your app should now be running on localhost:5000

## What's done

* Created inital structre of database

## Future Plans

* Create Api's
* Update database schema

## Configurations

* <b>Microsoft Windows</b>

* Copy example.config.json file inside the config directoy
* Rename the file config.json
* Set your configurations accordingly

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
