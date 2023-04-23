# Meet - an event app

## About project

This project will showcase my ability to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. As a PWA it will pass Lighthouse’s PWA checklist. The app will use the Google Calendar API to fetch upcoming events, AWS lambda for serverless functions, and React axios and async/await for the API call. The app will implement an alert system using an OOP approach to show information to the user. It will also include data visualization components. Users will be able to access data while offline or if they have a slow connection. Data visualization will also be included to enhance the app's value as an information source. Finally, the app will be monitored using an online monitoring tool.

## Features

#### 1. Filter Events by City

**User Story** - As a user, I should be able to filter events by city so that I can find events that will take place in that location. 

**Scenarios:**   
    - Given user hasn’t searched for any city  
    When the user opens the app  
    Then the user should see a list of all upcoming events  
    - Given the main page is open  
    When user starts typing in the city textbox  
    Then the user should see a list of cities (suggestions) that match what they’ve typed  
    - Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing  
    When the user selects a city (e.g., “Berlin, Germany”) from the list  
    Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city  

#### 2. Show/Hide Event's Details

**User Story** - As a user, I should be able to click a button to show or hide a box which contains event details so that I can gather more information about the event.  

**Scenarios:**  
    - Given the user has not expanded an event's detail box  
    When the list page loads  
    Then all event's detail boxes will be hidden  
    - Given the user is interested in gathering information about an event  
    When the user clicks the open/expand button  
    Then a box will appear with all event details  
    - Given the user doesn't want to see details for a particular event  
    When the user clicks the close/contract button  
    Then the event detail box will be hidden   

#### 3. Specify the Number of Events

**User Story** - As a user, I should be able to choose how many events will display within the event list page, so that I can browse a particular amount of events that I want to see.  

**Scenarios:**  
    - Given a user has not specified a number of events to view  
    When the list page loads  
    Then the page will display 32 events by default  
    - Given the user wants to see a specific amount of events per page  
    When the user enters the event number value in a field  
    Then the list page will show the specified number of events  


#### 4. Be Available Offline

**User Story** - As a user, I should be able to view the event list while offline so that the service is still available to me even when my device is not connected to the internet.  

**Scenarios:**  
    - Given the user does not have access to the internet  
    When the user visits the website without internet  
    Then cached event information will show on the list page  
    - Given the user does not have access to the internet  
    When the user attempts to view event data in another city  
    Then an error message will appear to inform the user of the internet access issue  

#### 5. Display Chart Showing the Number of Upcoming Events by City

**User Story** - As a user, I should be able to view a chart that shows the number of upcoming events by city, so that I can assess the liveliness of a given location.  

**Scenarios:**  
    - Given the user is interested in seeing how many events are happening per city  
    When the user chooses to view the data by clicking a link on the website  
    Then show a chart with the number of events per city  

#### 6. Add an app shortcut to the home screen.

**User Story** - As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

#### 7. Data visualization components - a chart showing the number of upcoming events by city

**User Story** - As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.