import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';
import { location, displayNum } from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    let AppWrapper = mount(<App />);
    let theNumberOfEvents = shallow(<NumberOfEvents displayNum={32} updateEvents={() => { }} location={location} setAlertText={() => { }} />);

    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('a user has not specified a number of events to view', () => {
            //expect(theNumberOfEvents.find('.eventNumber')).toHaveValue(32);
        });

        when('the list page loads', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });

        then('the page will display 32 events by default', (arg0) => {
            expect(AppWrapper.state("displayNum")).toBe(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('the user wants to see a specific amount of events per page', () => {

        });

        when('the user enters the event number value in a field', () => {
            theNumberOfEvents.find('.eventNumber').simulate('change', { target: { value: '2' } });
        });

        then('the list page will show the specified number of events', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

});