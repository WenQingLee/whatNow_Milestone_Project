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

#### Search Component
1. Geolocation:
The user's location is shown on the map when it initialises before a search is conducted. (Requires browser to support geolocation and permission to use geolocation)
2. Search location input field:
Allows users specify the search location by filling up the input field.
3. "Locate me" button (Only if geo-location is enabled):
Clicking the button obtains the user's location and automatically fill the "Search Location" input field. (Requires browser to support geolocation and permission to use geolocation)
4. Radius of Search input field:
Let the users decide on the radius of their search between 0 to 50,000 meters based on their input
5. Type of searches with radio buttons (i.e. Lodgings, Museums, Art Galleries, Restaurants and Shopping Malls)

#### Display Component
1. A google maps display with customised markers, infowindows and labels
2. Info Windows include information on name, address and rating for easy reading without the results summary.
3. Labels are provided for reference between the googleMap markers and results summary table
2. Display of results summary in a table for easy reference (Collapsible in smaller viewports)
3. Results are ranked accordingly to prominence and have different markers for each respective search type

#### Share Component
1. Common social media platforms such as facebook and twitter are included in the footer for users to share their locations and/or experiences


### Other features

1. The locate button will not be shown if geolocation is not enabled or supported by the browser
2. The "Search Location" and "Radius of Search" are both required to be filled otherwise an alert message will pop up when the user clicks the "Submit" button.
3. The input for "Radius of Search" has to be between 0 to 50,000 or an alert will pop up when the user clicks the "Submit" button.


#### Features Left to Implement
1. Use the directions API to plot a route from current location to the search location 

    This feature was dropped as it requires geolocation to work and raises the query should it be directions to the search location or should it be the search location to the area search results.

2. Implement multiple searches and provide suggestions based on ratings

    This feature was dropped as multiple searches and provding suggestions based on ratings may be too much information for a user to use on the fly. 
    
3. Allow emailing of multiple searches to other parties using EmailJS

    This feature was dropped as it is archaic for such informal use and therefore likely to see limited use.


## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

1. HTML
2. CSS
3. Bootstrap (https://getbootstrap.com/) : This project uses Bootstrap to simplify the development of the webpage
4. JavaScript
5. JQuery (https://jquery.com/) : The project uses JQuery to simplify DOM manipulation.
6. GoogleMap API (https://developers.google.com/maps/documentation/javascript/tutorial, Libraries: Places, Geocoding): This project uses GoogleMap API to display a map and search results.

## Testing


Testing was done across multiple viewports to ensure responsiveness W3C Markup Validation Service and HTMLHint were used to check the HTML code. W3C CSS Validation Service and CSSLint were also used to check the CSS code. Manual testing was employed to check the functionality of the website.

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

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/WenQingLee/whatNow_Milestone_Project.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.


## Credits

### 1. Content
The content in the website is compiled by me
### 2. Media
- The theme for the single page application is adapted from ...
- The photos used in this site were obtained from ...
### 3. Acknowledgements
I received inspiration for this project from X
Color Psychology
https://sg.oberlo.com/blog/color-psychology-color-meanings
* Rollover Social Media Icons: https://codepen.io/JunaidKhalid/pen/NxaZJw
* SVG backgrounds
* SVG image for header banner: https://www.svgbackgrounds.com/?ref=producthunt 
* Icons8
* icon for google map: https://icons8.com/icons/set/person
* Controlling geolocation for manual testing: https://medium.com/@williamkoehrsen/controlling-your-location-in-google-chrome-6c0b216d1ba1