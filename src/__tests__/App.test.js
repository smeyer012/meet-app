import React from 'react';
import { act } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('renders a list of suggestions', () => {
        const CitySearchWrapper = shallow(<CitySearch />);
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });

    test('render event number control', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

});

describe('<App /> integration', () => {

    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        act(() => CitySearchWrapper.setState({ suggestions: locations }));
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    test("state changes when value of input changes", () => {
        const AppWrapper = mount(<App />);
        const eventCount = AppWrapper.state('displayNum');
        const inputNumber = AppWrapper.find(NumberOfEvents).state('eventNumber');
        expect(eventCount).toEqual(inputNumber);
        AppWrapper.unmount();
    });

    test("get list length that is the same number of events selected by the user", async () => {
        const AppWrapper = mount(<App />);
        const NumberWrapper = AppWrapper.find(NumberOfEvents);
        const inputNumber = Math.floor(Math.random() * 32);
        const event = { target: { value: inputNumber } };
        await NumberWrapper.instance().handleInputChanged(event);
        const selectedNumber = NumberWrapper.state("eventNumber");
        expect(inputNumber).toEqual(selectedNumber);
        AppWrapper.unmount();
    });

});