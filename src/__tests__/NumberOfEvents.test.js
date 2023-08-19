import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsBox;
    beforeAll(() => {
        NumberOfEventsBox = shallow(<NumberOfEvents updateEvents={() => { }} displayNum={"32"} setAlertText={() => { }} />);
    });
    test('render number input', () => {
        expect(NumberOfEventsBox.find('.eventNumber')).toHaveLength(1);
    });
    test('correct default number of events', () => {
        expect(NumberOfEventsBox.find(".eventNumber").prop('value')).toBe("32");
    });
    test('change state when text input changes', () => {
        const newEventNumber = { target: { value: '12' } };
        NumberOfEventsBox.find('.eventNumber').simulate('change', newEventNumber);
        expect(NumberOfEventsBox.state('eventNumber')).toBe('12');
    });
});