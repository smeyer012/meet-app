// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

const { ResizeObserver } = window;

beforeEach(() => {
    //@ts-ignore
    delete window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }));
});

afterEach(() => {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
});