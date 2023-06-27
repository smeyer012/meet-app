Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given a user has not specified a number of events to view  
When the list page loads  
Then the page will display 32 events by default  

Scenario: User can change the number of events they want to see.
Given the user wants to see a specific amount of events per page  
When the user enters the event number value in a field  
Then the list page will show the specified number of events