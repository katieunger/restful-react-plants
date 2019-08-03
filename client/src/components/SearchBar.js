import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setQuery, fetchPlants } from '../actions';

class SearchBar extends React.Component {
    onInputChange = (event) => {
        this.props.setQuery(event.target.value);
    }

    onClickSearch = () => {
        this.props.fetchPlants(1, this.props.query);
    }

    render() {
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Search</label>
                        <input name='search' onChange={this.onInputChange} />
                    </Form.Field>
                    <Button type='submit' onClick={this.onClickSearch}>Search</Button>
                </Form>
            </Segment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
        query: state.search.query
    }
};


export default connect(mapStateToProps, { setQuery, fetchPlants })(SearchBar);