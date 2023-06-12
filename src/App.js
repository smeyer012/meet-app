import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
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
      this.setState({
        events: showEvents,
        displayNum: eventNumber,
        chosenLocation: location
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
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
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;