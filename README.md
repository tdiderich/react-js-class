# Building and Deploying a ReactJS Web App with React-Bootstrap and AWS Amplify

## Environment Setup
- Visual Studio Download: https://code.visualstudio.com
    - Cost: free
    - Useage: editing the code 
- GitHub Account Creation: https://github.com/join
    - Cost: free for public repositories + private repositories with under 5 collaborators 
    - Useage: storing the code and collaboration
- AWS Account Creation: https://portal.aws.amazon.com/billing/signup#/start
    - Cost: hosting is free for 12 months (with limits that we will not hit), buying a domain will cost $12 a year (standard rate)
    - Hosting, Authentication, API endpoints, and Database 

### GitHub commands from the second video 
```console    
git status
git pull
git checkout -b new-branch
git status
git add .
git commit -m "first commit"
git push origin new-branch
```

## Hello World App - Your First React App
- Installing node.js - https://nodejs.org/en/
- What is npm? 
- Creating the react app - https://reactjs.org/docs/create-a-new-react-app.html#create-react-app
```console    
npx create-react-app hello-world-app
```
- App walkthrough
- Making it say "Hello, World!"
- Functions / Classes
- Importing components

## Challenges
- Write a new the AppCustom.js file from scratch + have your index.js file serve that instead of App.js
    - HINT: don't forget to import your new AppCustom.js file
    - Repetition is key...don't be lazy on these!
- Make a new class in the App.css file and use it in the App.js component
    - HINT: look at the className in the div tag
- Add a new component called AboutMe with your name and some information about you + use it in your AppCustom.js
    - HINT: this is the same flow as our HelloWord component
    - BONUS: use new HTML tags other than header and list to get a better feel for them

_Final code:_ https://github.com/tdiderich/react-js-class/tree/hello-world-app

## Stock Data App - Deeper Into React
- Classes and Props
    - Create a Welcome Component w/ Name Prop
    - Docs: https://reactjs.org/docs/components-and-props.html
- Constructor, State, and Changing State
    - Create a Main Component that displays fake trading data 
    - Docs: https://reactjs.org/docs/state-and-lifecycle.html
- Handling Events
    - Enhancing the Main Component to allow the user to change the trading data with a click
    - Docs: https://reactjs.org/docs/handling-events.html
- Challenges (Round 1)
    - Re-write the Welcome component to get repetition on writing components and passing props
    - Create a new function that jumbles the stock values (ex. Microsoft's value changes to Amazom's after a click)
- Conditional Rendering
    - Enhancing the Welcome Component w/ custom greetings based on the time of day
    - Docs: https://reactjs.org/docs/conditional-rendering.html
- Lists and Keys
    - Enhancing the Main component to map the fake data instead of hard coding it all out
    - Docs: https://reactjs.org/docs/forms.html
    - Other Javascript methods: https://reactjs.org/docs/lists-and-keys.html
- Challenges (Round 2)
    - Add conditional styling to your stock values based on their number ex. 100 = green, 200 = pink, 300 = red
    - Re-write the increase and decrease stock value buttons for your new list of values using the JSON object
- Forms
    - Create a Form that allows the user to change their name in the Welcome Component
    - Docs: https://reactjs.org/docs/forms.html
- Forms w/ Formik and Yup
    - Create a Form that allows the user to create an account + log in / out 
    - Example tutorial: https://hackernoon.com/painless-react-forms-with-formik-e61b70473c60
    - Code: https://codesandbox.io/s/zl8zr8yqx
    - Formik docs: https://jaredpalmer.com/formik/docs/overview
    - Yup docs: https://github.com/jquense/yup
- API Calls w/ Fetch
    - Enchance the Main Component by pulling real stock data from an API
    - Free account at: https://iexcloud.io/cloud-login#/register
    - API Docs: https://iexcloud.io/docs/api/#api-reference
    - Fetch docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- Final Challenges
    - Add conditional formating for your login form that changes the display when the user logs in
        - HINT: you can add a state value called isLoggedIn that starts as false
    - Make your API call data a standalone component
        - HINT: new file + pass the state through a prop

_Final code:_ https://github.com/tdiderich/react-js-class/tree/stock-data-app

## Startup Landing Page - Making it Look Good
- Create new startup-landing-page app: `npx create-react-app startup-landing-page`
- Add React-Bootstrap
    - Install: `npm install react-bootstrap bootstrap`
    - Add to index.js `import 'bootstrap/dist/css/bootstrap.min.css';`
    - Docs: https://react-bootstrap.netlify.com/getting-started/introduction
- Custom theme
    - Options: https://bootswatch.com/
    - Download + update your `bootstrap/dist/css/bootstrap.min.css` file
- Custom Fonts
    - Google fonts: https://fonts.google.com/
    - Add selected fonts to your app with this import in the App.css: `@import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Montserrat|Permanent+Marker|Raleway|Roboto|Oxygen&display=swap');`
    - Add styling by creating a class or inline with `style={}`
- Font Awesome Icons 
    - Options: https://fontawesome.com/v4.7.0/icons/
    - Install with `npm install --save font-awesome`
    - Add to index.js `import 'font-awesome/css/font-awesome.min.css';`
    - Add to a page with something like this `<i class="fa fa-home" aria-hidden="true"></i>`    
- Landing Page Jumbotron w/ Image
    - Import Jumbotron
    - Download image from unsplash: https://unsplash.com/
    - Create css class to fill the entire page
- Landing Page Challenge
    - Add a new icon + custom font to your Jumbotron
- About Us Section w/ a Accordion
    - Import Accordion
    - Add sections about the company
- About Us Challenge
    - Turn your accordion into a JSON object with title and body values + use a .map function to dsiplay them all
- Product Section w/ Layout + Cards 
    - Learn to use the layout 
    - Import the Cards components to create 
- Product Section Challenge 
    - Create a layout where the cards are always in a single row no matter the screen size
    - Create a layout where the cards are in single row along the right side of the screen
- Subscribe Section w/ Form to Subscribe 
    - Import Formik `npm install formik --save` + Yup `npm install -S yup`
    - Create email validation + Submit button to Subscribe the user
- Subscribe Section Challenge
    - Make the form centered / take over the whole page like the other sections
    - Add an Alert when the user has subscribed 
        - HINT: you will need to create state for this
    - Add conditional formatting to only show the subscription form when the user hasn't subscribed yet


_Final code:_ https://github.com/tdiderich/react-js-class/tree/startup-landing-page
<<<<<<< HEAD

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
=======
>>>>>>> 0120406c6ce07b5e5f5b9b67388706f70474de6f
