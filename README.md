# Building and Deploying a ReactJS Web App with React-Bootstrap and AWS Amplify

## Getting you environment setup
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

### Final code: https://github.com/tdiderich/react-js-class/tree/hello-world-app
