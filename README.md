# Building and Deploying a ReactJS Web App with React-Bootstrap and AWS Amplify

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