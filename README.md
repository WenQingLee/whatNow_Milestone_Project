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

The logo is of a compass to reassure the user that they will find the direction they want by using this website. The wave SVG used is to reflect motion and the user's probable state. The color orange is also used in the header to convey a sense of enthusiasm and adventure.

The interface is kept as clean as possible, where only necesssary components (e.g. input and display fields) are part of the website as we expect users do not wish to comb the website for what they want and to want quick responses since they are on the go. In addition, the number of radio buttons were capped at 5 to prevent overchoice (i.e. cognitive process in which people have a difficult time making a decision when faced with many options).

The layout of the website starts with the search inputs, leading to the results display and finally the links to social media at the bottom of the website as we seek to guide the user through a flow of: (1) Search, (2) View results and, (3) Share. The initial design intent was to also include a send email function but later decided against it as it is archaic for such informal use, therefore likely to see limited use.

To improve interactivity, we have considered using event listeners or buttons but have decided to develop using buttons instead. Using a button provides the user with a greater control over their search results especially when the website is used on a mobile phone where an errant input may result in the search results changing.

## Features

### Existing Features

#### 1. Search Component
* Geolocation:
The user's location is shown on the map when it initialises before a search is conducted. (Requires browser to support geolocation and permission to use geolocation)
* Search location input field:
Allows users specify the search location by filling up the input field and assists by autoocompleting users queries.
* "Locate me" button (Only if geo-location is enabled):
Clicking the button obtains the user's location and automatically fill the "Search Location" input field. (Requires browser to support geolocation and permission to use geolocation)
* Radius of Search input field:
Let the users decide on the radius of their search between 0 to 50,000 meters based on their input
* Type of searches with radio buttons (i.e. Lodgings, Museums, Art Galleries, Restaurants and Shopping Malls)

#### 2. Display Component
* A google maps display with customised markers, infowindows and labels
* Info Windows include information on name, address and rating for easy reading without the results summary.
* Labels are provided for reference between the googleMap markers and results summary table
* Display of results summary in a table for easy reference (Collapsible in smaller viewports)
* Results are ranked accordingly to prominence and have different markers for each respective search type

#### 3. Share Component
* Common social media platforms such as facebook and twitter are included in the footer for users to share their locations and/or experiences

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
7. Jasmine (https://jasmine.github.io/): The project uses Jasmine for automated testing


## Testing

Testing was done across multiple viewports sizes to ensure responsiveness. W3C Markup Validation Service and HTMLHint were used to check the HTML code. W3C CSS Validation Service and CSSLint were also used to check the CSS code. 

Automated testing (Jasmine) is used for the initMap function and handleLocationError function. The test files are located in the tests folder. It can be run by previewing the test.html file.

Manual testing was employed to check the functionality of the rest of the website.

1. Search Location Input Field:
    - The search location field accepts inputs and autocompletes requests.
2. Locate Me Button
    - The Locate Me button only appears when geoiocation is supported by the browser and enabled.
    - The Locate Me button does not appear if the preconditions are not met.
    - When the browser supports geolocation and is granted permisstion, the Locate Me button auto fills the Search Location Input Field based on the user's geolocation.
    - The Locate Me button is tested at different locations by controlling the geolocation.
3. Radius of Search Input Field
    - Only numerical inputs are allowed in the Radius of Search field.
4. Type of Search Radio Buttons
    - The lodging is already checked when the website is loaded.
    - Only 1 radio button may be selected at one time.
5. Search Button
    - Trying to search with both the Search Location field and Radius of Search field empty will prompt an alert to tell the user to provide inputs.
    - Trying to search with either the Search Location field or Radius of Search field empty will prompt an alert to tell the user to provide inputs.
    - Trying to search with a negative number (e.g. -500) for Radius of Search will prompt an alert to tell the user to provide the correct input.
    - Searching with both the input fields filled and the radio button selected will generate the results
6. Google Map Display
    - The Google Map display loads with the website
    - The Google Map shows your location with an infowindow "You are here" is shown when geolocation is supported and enabled
    - The Google Map defaults to show Singapore ( lat: 1.290270, lng: 103.851959) if geolocation is not supported and enabled.
    - The Markers, Infowindows and Labels are shown correctly.
    - The Markers are animated to have a dropping animation
    - The infowindows show the correct information. (Name, address and rating)
    - The numbers on the labels correspond to the summary table
7. Results Display (Table)
    - The results display shows the correct information (Name, address and rating)
    - The numbers on the results table correspond to the GoogleMap labels
    - At viewports < 992px, it will be hidden. The results display will only be shown or hidden with the Show/Hide Details button
8. Show/Hide Details Button
    - The Show/Hide Details Button will only be shown at viewports < 992px.
    - The Show/Hide Details button will show and hide the results display with a sliding animation.
9. Social Media Icons
    - The Social Media Icons have a rollover animation.
    - The Social Media Icons are linked to the homepage of the respective websites and opens in a new window.

All of the above was tested in both map and satellite view.

## Deployment

This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting git clone https://github.com/WenQingLee/whatNow_Milestone_Project.git into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.


## Credits

### 1. Content
* The content in the website is compiled by me
### 2. Media
* The logo for the website was obtained from FreeLogoDesign: https://www.freelogodesign.org/
* The SVG background used for this project is from SVG backgrounds at this link: https://www.svgbackgrounds.com/?ref=producthunt 
* All the icons used for the google map are from Icons8 (https://icons8.com/)
### 3. Acknowledgements
* Color Psychology: https://sg.oberlo.com/blog/color-psychology-color-meanings
* Rollover Social Media Icons: https://codepen.io/JunaidKhalid/pen/NxaZJw
* Testing for different locations using geolocation: Controlling geolocation for manual testing: https://medium.com/@williamkoehrsen/controlling-your-location-in-google-chrome-6c0b216d1ba1