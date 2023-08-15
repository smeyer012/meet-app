import React, { Component } from 'react';
import { act } from '@testing-library/react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: false,
        infoText: ''
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ showSuggestions: true });
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: 'We can not find the city you are looking for. Please try another city',
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: ''
            });
        }
    }
    handleItemClicked = (suggestion) => {
        act(() => this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions: false,
            infoText: ''
        }));
        this.props.updateEvents(this.props.displayNum, suggestion);
    }
    render() {
        return (
            <div>
                <InfoAlert text={this.state.infoText} />
                <div className="CitySearch">
                    <input
                        type="text"
                        className="city"
                        value={this.state.query}
                        onChange={this.handleInputChanged}
                        onFocus={() => { this.setState({ showSuggestions: true }) }}
                        onBlur={() => {
                            this.setState({ showSuggestions: false })
                        }}
                    />
                    <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                        {this.state.suggestions.map((suggestion) => (
                            <li
                                key={suggestion}
                                onClick={() => this.handleItemClicked(suggestion)}
                            >{suggestion}</li>
                        ))}
                        <li onClick={() => this.handleItemClicked("all")}>
                            <b>See all cities</b>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default CitySearch;