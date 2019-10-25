# Building and Deploying a ReactJS Web App with React-Bootstrap and AWS Amplify

## Workout Generator App - Bringing It All Together
- Setup your app
    - Create new app: `npx create-react-app workout-generator-app`
    - Install bootstrap: `npm install react-bootstrap bootstrap --save`
    - Add bootstrap to to by adding this to your index.js: `import 'bootstrap/dist/css/bootstrap.min.css';`
    - OPTIONAL: pick new theme and update: `bootstrap/dist/css/bootstrap.min.css`
    - Import Formik `npm install formik --save` + Yup `npm install -S yup`
- Add routing 
    - Install react-router: `npm install react-router --save`
    - Install react-router-dom: `npm install react-router-dom --save`
    - Update index.js + App.js for routing
- Landing page
    - Jumbotron w/ background image
    - Buttons to About Us + Workout Generator
- About Us Page
    - Jumbotron w/ background image
    - About Us Section
- Workout Generator Page
    - Jumbotron w/ background image
    - Form to get time for workout 
    - Write function to generate workout 
    - Display the workout after the form is submitted
- Deploying with AWS Amplify
    - Install Amplify for React: `npm install aws-amplify aws-amplify-react`
    - Install Amplify CLI `npm install -g @aws-amplify/cli`
    - Configure Amplify: `amplify configure`
    - Tutorial: https://www.youtube.com/watch?v=fWbM5DLh25U
    - Initialize Amplify: `amplify init`
    - Add hosting: `amplify add hosting`
    - Publish: `amplify publish`
    - More on Authentication, Lambda Functions, APIs, and more with Amplify and React: https://github.com/dabit3/aws-amplify-workshop-react

_Final code:_ https://github.com/tdiderich/react-js-class/tree/workout-generator-app