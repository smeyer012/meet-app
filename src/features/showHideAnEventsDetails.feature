Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default.
Given the user has not expanded an event's detail box  
When the list page loads  
Then all event's detail boxes will be hidden

Scenario: User can expand an event to see its details.
Given the user is interested in gathering information about an event  
When the user clicks the open/expand button  
Then a box will appear with all event details

Scenario: User can collapse an event to hide its details.
Given the user doesn't want to see details for a particular event  
When the user clicks the close/contract button  
Then the event detail box will be hidden