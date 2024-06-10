# Local Notifications App

This project was created as a code challenge answer for mParticle code challenge for the front-end developer position.
Created with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

**the env files were added to the project for testing purposes only**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Using the .env file with [env-cdm](https://github.com/toddbluhm/env-cmd)\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

The default env file will make the app fetch the data from Mockaroo server, for dynamic notifications. **Only 200 requests per day**.

### `npm start:local`

Runs the app in the development mode. Using the .env.local file with [env-cdm](https://github.com/toddbluhm/env-cmd)\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

The env.local file will make the app fetch the data from a unexisting server, but it will use a mocked constant value for the notifications.

### `npm cy:open`

Runs [Cypress](https://www.cypress.io/) for E2E tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
