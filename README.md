#### A multi page gallery that lets the user add, edit and remove collections. Made for a task given by Disecto
# Problem Statement
1. Create a new collection with the following fields:
        a. Name of the collection
        b. Description
        c. Images in the collection
2. After the Creation of the collection, the user should be redirected to the
dashboard listing the new collection created.
3. On click of the collection, you should be redirected to the route of that specific
collection where you can view the content with the specified fields.
4. You should be able to edit the collection.
5. You can delete the collection that you create.
6. Make sure that while creating your collection, fields should not remain empty
i.e., there should be form validation in it with an appropriate message.

React Redux should be used for state management

# Functioning of Web App
1. Landing page
![Landing Page](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Landing%20Page.PNG?raw=true)

2. User can then add a collection by clicking on the Add Collection button. An error is shown if any of the 3 fields are left empty
![Add Collection](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Add%20Collection.PNG?raw=true)

![Entering Data](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Entering%20Data.PNG?raw=true)

3. User is then redirected to view collections page which shows the current collection created.
![View Collection](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/View%20Collection.PNG?raw=true)

4. User can edit the name of collection, description of collection and can also add new images. An error message is shown if the user leaves name or description field empty
![Editing Name](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Editing%20Collection%20Name.PNG?raw=true)
![Editing Description](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Editing%20Collection%20Description.PNG?raw=true)
![Adding Images](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Adding%20Images.PNG?raw=true)

5. The user can delete any image they want. If they try to delete the last image, an error message is shown.
![Deleting Image](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Image%20Deleted.PNG?raw=true)
![After Deleting](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/After%20Deletion.PNG?raw=true)

6. The user can delete any of the collections they have created. If the last collection is deleted, the user is redirected to the landing page with the view collections button disabled
![Deleting Collection](https://github.com/Grihit/multi-page-gallery/blob/master/public/images/Deleting%20Collection.PNG?raw=true)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
