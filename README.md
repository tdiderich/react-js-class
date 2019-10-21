# Building and Deploying a ReactJS Web App with React-Bootstrap and AWS Amplify

## Getting your environment setup
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

## Hello World App - your first react app
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

## Stock Data App - deeper into React
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