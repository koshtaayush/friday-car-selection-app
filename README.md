# Friday Code Challenge : Car Selection App

### Getting Started

* This project was bootstrapped with `Create React App + Typescript`
* The following version has been used for this application 
* The **node version used** : `v10.16.3`
* The **npm version used** : `6.9.0`

## Running the project in your local

1. Ensure you have nodeJS (the version specified above installed)
2. Clone the project, by executing `git clone https://github.com/koshtaayush/friday-car-selection-app.git`
3. Run into the root of the folder and execute `npm install`
4. Bring up the apiserver by executing `node apiserver/server.js ` in the root directory of the project
5. Run `npm start` in the root directory of the project
6. The project should be up and running. Open http://localhost:3000/
7. The page will reload if you make edits.


## Testing

* For unit testing `jest` framework has been used along with `enzyme`. 
* To execute the unit test cases, please run `npm run test`. This will run all the test in watch mode.


## Approach for problem the code solution is trying to solve.

1. The user will land to the first screen which will list down all the makes which are available
2. The UI is completely functional for both mobile and desktop
3. For ease of access a search box has been provided in case user wants to search, which makes the selection easier
4. On clicking of make, he is navigated to the next screen which lists down the models available for make.
5. The search box can be used to filter results
6. On selection of model, a vehicle lists opens up which gives details of vehicles.
7. The url of the project contains the make and model as query params, in case the user wants to directly replace the values there
8. Ex: `http://localhost:3000/vehicle?make=bmw&model=3er`
9. The components have been loaded lazily for better performance and faster loading
10. Loading screen has been provided in case the network speed is slow, so that the user experience is good.
11. The code has been made modular keeping in mind the time frame provided for the task.

## Production Build

1. The production build folder can be generted using `npm run build`
2. It will create a build folder. You may serve it with a static server, which can be served therogh any process manager ex: PM2, forever
3. Currently it is being served using express server, the configs are written in `server.js` file
4. For using it install PM2 process manager globally in the machine using `npm install pm2 -g` 
5. A PM2 configuration file is provided as `pm2-config.json`
6. The app can be served using `pm2 start pm2-config.json`
7. It will run on http://localhost:3000/

## Optimizations

1. Typescript has been used for the type checkings so that most of the errors can be caught on development phase itself
2. Linting and pre-commit hooks have been used to follow the code quality and a same pattern
3. Unit testing setup has been done so that a TDD approach can be taken up
4. Lazy loading to improve performance
5. Chunking and hashing the build files generated

### Screens

1. Make selection
<img width="401" alt="Screenshot 2021-08-29 at 11 15 15 AM" src="https://user-images.githubusercontent.com/14069441/131240104-e5d27808-0117-4291-9c57-433ce6996c72.png">

2. Model selection
<img width="421" alt="Screenshot 2021-08-29 at 11 15 40 AM" src="https://user-images.githubusercontent.com/14069441/131240118-a13f5c40-0d4d-4b57-809e-c1cb7d5bb549.png">


3. Vehicle Information
<img width="429" alt="Screenshot 2021-08-29 at 11 15 48 AM" src="https://user-images.githubusercontent.com/14069441/131240131-ae69c161-770e-458f-9218-39ccbe283164.png">


4. Loading state
<img width="443" alt="Screenshot 2021-08-29 at 11 16 33 AM" src="https://user-images.githubusercontent.com/14069441/131240136-b237d5b7-83b7-4ae6-9eec-25df068e5413.png">

5. Error state
<img width="412" alt="Screenshot 2021-08-29 at 11 16 19 AM" src="https://user-images.githubusercontent.com/14069441/131240147-46d9ffc7-72ed-49d6-b15d-b4b6d2eb9a36.png">
