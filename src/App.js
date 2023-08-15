import React, { Component } from 'react';
import { act } from '@testing-library/react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import CityEventsChart from './CityEventsChart';
import EventGenresChart from './EventGenresChart'
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    displayNum: 32,
    chosenLocation: ''
  }

  updateEvents = (eventNumber, location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all' || location === undefined || location === '') ?
        events :
        events.filter((event) => event.location === location);
      const showEvents = locationEvents.slice(0, eventNumber);
      act(() => this.setState({
        events: showEvents,
        displayNum: eventNumber,
        chosenLocation: location
      }));
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        act(() => this.setState({ events, locations: extractLocations(events) }));
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} displayNum={this.state.displayNum} updateEvents={this.updateEvents} />
        <NumberOfEvents displayNum={this.state.displayNum} updateEvents={this.updateEvents} location={this.state.chosenLocation} />
        <div className="charts-container">
          {this.state.events && <EventGenresChart events={this.state.events} />}
          {this.state.locations && <CityEventsChart allLocations={this.state.locations} events={this.state.events} />}
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;