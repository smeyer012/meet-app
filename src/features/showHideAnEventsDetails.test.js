import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    let AppWrapper;
    const event = mockData[0];
    let testEvent = shallow(<Event event={event} />);

    test('An event element is collapsed by default.', ({ given, when, then }) => {
        given('the user has not expanded an event\'s detail box', () => {

        });

        when('the list page loads', () => {
            AppWrapper = mount(<App />);
        });

        then('all event\'s detail boxes will be hidden', () => {
            expect(testEvent.state("showDetails")).toBe(false);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('the user is interested in gathering information about an event', () => {

        });

        when('the user clicks the open/expand button', () => {
            testEvent.find('.toggleDetails').simulate('click', { target: { showDetails: 'show' } });
        });

        then('a box will appear with all event details', () => {
            // expect(testEvent.find('.eventDetails')).toHaveLength(1);
            expect(testEvent.state("showDetails")).toBe(true);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('the user doesn\'t want to see details for a particular event', () => {

        });

        when('the user clicks the close/contract button', () => {
            testEvent.find('.toggleDetails').simulate('click', { target: { showDetails: 'hide' } });
        });

        then('the event detail box will be hidden', () => {
            expect(testEvent.state("showDetails")).toBe(false);
        });
    });

});