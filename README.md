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

## Optimizations

1. Typescript has been used for the type checkings so that most of the errors can be caught on development phase itself
2. Linting and pre-commit hooks have been used to follow the code quality and a same pattern
3. Unit testing setup has been done so that a TDD approach can be taken up
4. Lazy loading to improve performance
5. Chunking and hashing the build files generated
