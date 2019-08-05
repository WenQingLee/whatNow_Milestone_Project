# whatNow? - Navigation on the go! 

Milestone project: Interactive Frontend Development

## Project Purpose

This single page application attempts to answer the question: “...what now?” in everyday scenarios such as:
1. You have arrived to the meeting point early and your friends have yet to arrive…
2. You find yourself in an unknown city with no plans and/or place to stay because #yolo…
3. You are hanging with your friends and want to head to a new venue…

I face the abovementioned scenarios regularly and this website is developed as a solution for myself and others.


## UX

The user of this website will be individuals looking for nearby locales to pass the time while they are on the move. This website seeks to provide them with suggestions based on the location they have selected which can be where they are now or in the future.

The website will aim to be as resource-light as possible to account for travellers using mobile data which may not be as reliable or inexpensive. Therefore, high-resolution images will not be part of the website and the interface will be kept clean. 

The design scope and skeleton of this project is included in this project under the directory, "scope and skeleton".

The logo is of a compass and is to reassure the user that they will find the direction they want by using this website. The wave SVG used is to reflect motion and the user's probable state. The color orange is also used in the header to convey a sense of enthusiasm and adventure.

The interface is kept as clean as possible, where only necesssary components (e.g. input and display fields) are part of the website as we expect users do not wish to comb the website for what they want and to want quick responses since they are on the go. In addition, the number of radio buttons were capped at 5 to prevent overchoice (i.e. cognitive process in which people have a difficult time making a decision when faced with many options).

The layout of the website starts with the search inputs, leading to the results display and finally the links to social media at the bottom of the website as we seek to guide the user through a flow of: (1) Search, (2) View results and, (3) Share. The initial design intent was to also include a send email function but later decided against it as it is archaic for such informal use, therefore likely to see limited use.

To improve interactivity, we have considered using event listeners or buttons but have decided to develop using buttons instead. Using a button provides the user with a greater control over their search results especially when the website is used on a mobile phone where an errant click may result in the search results changing.

## Features

### Existing Features
1. Geolocation:
The user's location is show on the map when it initialises before a search is conducted. (Requires permission to use geolocation)
2. Search location input:
Lets the user specify the search location
2. Radius of Search input:
Lets the user decide the radius of their search
3. 

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

### Existing Features
* Feature 1 - allows users X to achieve Y, by having them fill out Z
* ...
For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

Features Left to Implement
* Another feature idea

## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

* JQuery:
The project uses JQuery to simplify DOM manipulation.

## Testing
* As majority of the functions used do not return a value, the value of the inputs are declared in test.html to simulate user inputs


In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
  -  Go to the "Contact Us" page
  - Try to submit the empty form and verify that an error message about the required fields appears
  - Try to submit the form with an invalid email address and verify that a relevant error message appears
  - Try to submit the form with all inputs valid and verify that a success message appears.
  - In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

Different values for environment variables (Heroku Config Vars)?
Different configuration files?
Separate git branch?
In addition, if it is not obvious, you should also describe how to run your code locally.

## Credits

### Content
The text for section Y was copied from the Wikipedia article Z
### Media
- The theme for the single page application is adapted from ...
- The photos used in this site were obtained from ...
### Acknowledgements
I received inspiration for this project from X
Unobtrusive JavaScript: https://blog.teamtreehouse.com/unobtrusive-javascript-important
https://en.wikipedia.org/wiki/Unobtrusive_JavaScript
Color Psychology
https://sg.oberlo.com/blog/color-psychology-color-meanings
color scheme:
https://coolors.co/
Inspiration:
https://www.awwwards.com/sites/my-walking-challenge
FontAwesome
* Rollover Social Media Icons: https://codepen.io/JunaidKhalid/pen/NxaZJw
* Pure CSS Radio Button Tiles: https://codepen.io/techanddesign/pen/jGBQev
* SVG backgrounds
* SVG image for header banner: https://www.svgbackgrounds.com/?ref=producthunt 
* Icons8
* icon for google map: https://icons8.com/icons/set/person