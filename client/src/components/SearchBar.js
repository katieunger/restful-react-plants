import React from 'react';
import { Segment, Form, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setQuery, fetchFamilies, fetchGenus, fetchPlants, fetchSpecies } from '../actions';

class SearchBar extends React.Component {
    onInputChange = (event) => {
        this.props.setQuery(event.target.value);
    }

    onClickSearch = () => {
        switch (this.props.activeItem) {
            case 'family':
                console.log('Family search');
                return this.props.fetchFamilies(1, this.props.query);
            case 'genus':
                console.log('Genus search');
                return this.props.fetchGenus(1, this.props.query);
            case 'plants':
                console.log('Plants search');
                return this.props.fetchPlants(1, this.props.query);
            case 'species':
                console.log('Species search');
                return this.props.fetchSpecies(1, this.props.query);
        }
    }

    render() {
        return (
            <Input
                label={<Button type='submit' onClick={this.onClickSearch}>Search</Button>}
                labelPosition='right'
                //placeholder='Enter name to search...'
                name='search'
                onChange={this.onInputChange}
                value={this.props.query}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
        activeItem: state.menu.activeItem,
        query: state.search.query
    }
};


export default connect(mapStateToProps, { setQuery, fetchFamilies, fetchGenus, fetchPlants, fetchSpecies })(SearchBar);