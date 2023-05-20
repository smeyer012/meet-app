import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
    let EventWrapper;
    const event = mockData[0];

    beforeAll(() => {
        EventWrapper = shallow(<Event event={event} />);
    });

    test('all elements exist', () => {
        const title = EventWrapper.find(".eventTitle");
        expect(title).toHaveLength(1);
        expect(title.text()).toBe(event.summary);
        const time = EventWrapper.find(".eventTime");
        expect(time).toHaveLength(1);
        expect(time.text()).toBe(new Date(event.start.dateTime).toString());
        const location = EventWrapper.find(".eventPlace");
        expect(location).toHaveLength(1);
        expect(location.text()).toBe(event.location);
    });

    test('all event detail boxes will be hidden upon page load', () => {
        expect(EventWrapper.state("showDetails")).toBe(false);
    });

    test('when user clicks toggleDetails button, details for event will show', () => {
        const detailsButton = EventWrapper.find(".toggleDetails");
        expect(detailsButton).toHaveLength(1);
        detailsButton.simulate("click");
        expect(EventWrapper.state("showDetails")).toBe(true);
    });

});


// describe('<Event /> component', () => {

//     let Event;
//     let theMockdata = mockData[0];
//     beforeAll(() => {
//         Event = shallow(<Event event={theMockdata} />);
//     });

//     test('render an Event component', () => {
//         expect(Event).toBeDefined();
//     });

//     // test('render Event component with correct name', () => {
//     //     expect(Event.find('.summary').text()).toBe('Learn JavaScript');
//     // });

//     // test('render Event component with correct time', () => {
//     //     expect(Event.find('.dateTime').text()).toBe('2020-05-19T16:00:00+02:00');
//     //   });

// });

/*
Show/Hide Event's Details

Scenarios:
    - Given the user has not expanded an event's detail box  
    When the list page loads  
    Then all event's detail boxes will be hidden  
    - Given the user is interested in gathering information about an event  
    When the user clicks the open/expand button  
    Then a box will appear with all event details  
    - Given the user doesn't want to see details for a particular event  
    When the user clicks the close/contract button  
    Then the event detail box will be hidden  
*/