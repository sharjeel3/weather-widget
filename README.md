# Weather Widget app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

It is built using following libraries: 

* React with Hooks
* Redux with Redux Toolkit
* Axios and Redux Thunk
* Styled Components
* Jest and Enzyme

**API Reference**

7 Day Forecast:

https://openweathermap.org/api/one-call-api

Weather Conditions:
 
https://openweathermap.org/weather-conditions


## Show me the app

The production app is hosted on Netlify CDN via this URL https://weather-widget-react-app.netlify.app/

## Available Scripts

This app requires Node.js and Netlify CLI for local development. You can download Node.js [here](https://nodejs.org/en/download/). 

Use the following command to install Netlify CLI globally:

```
npm install netlify-cli -g
```

In order to use the Weather API, please obtain a free API key from [Open Weather here](https://openweathermap.org/price). Then copy `SAMPLE_ENV.txt` as `.env` in root directory and replace your own API key in it. 


In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run lint`

Automatically fixes formatting issues using ESLint. It reports errors that require a manual fix.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run test:coverage`

Runs tests on all files and generates a test coverage report.

Current results are as mentioned here.

File                         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------------|----------|----------|----------|----------|-------------------|
All files                    |    88.28 |     85.19 |    91.18 |    88.14 |                   |

Note that coverage doesn't include app index and service worker.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Use `serve -s build` in project directory to view the app. `serve` should be installed globally beforehand.

## What's been done

This application is a PWA built with React and Redux.

#### 1. Location feature

I have added a location lookup using Google Maps JavaScript API. This is used to retrieve latitude and longitude points for selected input. 

#### 2. Show 7 day forecast

It fetches weather forecast from API after location has been set.

## My Approach

I have taken some guesses based on the past experiences with the React projects during interview process. Here are a few notes that will help you understand my approach for this project.

* My focus was to write code to give you good indications of my style and thinking. As mentioned in the coming section, you will see there are many improvements for future iterations if we were to keep working on it.  
* I have generally tried to keep it simple and clean and favoured agile development over unnecessary complexity
* Have mostly followed test driven development when adding new features
* Have preferred named exports to follow components easily 
* Have preferred a feature folder with `index.js` as a convention
* Have configured eslint with prettier to have IDE and CLI support for formatting and rules
* App is using prop-types for props validation
* Testing is supported by enzyme and jest together

## Architecture

Here are some important bits to know regarding how I built the application.

#### Components

First of all, the UI layer lives here. I have also added functionality with hooks as needed to hold local state. 

* The components can dispatch actions using hooks provided by React Redux.
* These components can access Redux state using custom selectors built for `useSelector` from Redux

#### Redux

We are using Redux Toolkit with Redux for making Reducers easier to implement.

* `actions` directory contains all the action creators
* `reducers` directory contains all the reducers. Reducers are built with `createReducer` from Redux Toolkit
* `selectors` directory has custom selectors to access particular state in Redux store

#### Constants

Various strings used across the application are stored here.

#### Libs

Home made modules for critical functionality should be stored here. I have added an axios request helper here.

#### Hooks

This is not in place yet, however in future we can have custom hooks here for holding stateful logic 

## What's there for future

This application requires much more work to become a polished weather widget. Here is my feedback in case you would like me to address some of these issues or add improvements.

* Coding for this widget functionality is not complete yet
* Pollen count is not available in this API. Might need to use some paid options for it
* Accessibility improvements can be added
* Overall UI refinements to become closer to the mockups
* Many PNG icons should be replaced with SVGs 
