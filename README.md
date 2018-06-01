# Perkins+Will Reference Application Template

## Getting started
To successfully kickoff a project you will need to request a few things
- If Using Okta
  - please request okta application credentials for the application, credentials should be saved in your .env file
  - please ask for CORS/redirects to be enabled for the domains where the application will be hosted
- If Using a Database
  - please request a new database with proposed schema, place connection string information in a .env file

## Okta Login
If you have asked for okta application credentials, you should be able to login to the app using the below credentials:
```
id      login email
18441 | Odell.Trantow@perkinswill.net
81390 | Magnolia.O'Keefe@perkinswill.net
38915 | Veda.Kohler@perkinswill.net
21411 | Hazel.Pacocha@perkinswill.net
63027 | Martin.Bahringer@perkinswill.net
62556 | Katelin.Kohler@perkinswill.net
69732 | Reginald.Keebler@perkinswill.net
66023 | Jayce.Becker@perkinswill.net
85118 | Rigoberto.Raynor@perkinswill.net
78439 | Octavia.Gleichner@perkinswill.net
21469 | Isabella.Littel@perkinswill.net
36310 | Johanna.Abernathy@perkinswill.net
59564 | Brady.Kessler@perkinswill.net
37378 | Stephany.Lemke@perkinswill.net
72028 | Kariane.Schinner@perkinswill.net
46949 | Anabel.Jakubowski@perkinswill.net
80007 | Toney.Hermann@perkinswill.net
35280 | Nova.Wehner@perkinswill.net
86542 | Carol.Ledner@perkinswill.net
13962 | Emerson.Herman@perkinswill.net
```   
password: `4the#Hub`

## Testing
In order for a successful deployment all tests must pass.  Please refer to package.json in the `scripts` section under `"test"` to understand what tests will be run.
- run end-to-end tests (headless front-end) on Windows: `npm run test-win`
- run end-to-end tests (headless front-end) on unix-based: `npm run test`
- start live front-end test runner: `karma start`

## Frontend Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
