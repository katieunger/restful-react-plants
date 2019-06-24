import React from 'react';
import { Menu, Table, Loader, Segment, Pagination } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchSpecies } from '../actions';

class MyTable extends React.Component {
    componentDidMount() {
        this.props.fetchSpecies();
        console.log('componentDidMount');
        console.log(this.props);
    }

    renderPlants() {
        console.log('in renderPlants')
        console.log(this.props);
        return this.props.species.map(obj => {
            return (
                <Table.Row key={obj.id}>
                    <Table.Cell>{obj.scientific_name}</Table.Cell>
                    <Table.Cell>{obj.family_common_name}</Table.Cell>
                    <Table.Cell>{obj.common_name}</Table.Cell>
                </Table.Row>
            );
        })
    }
    
    render() {
        // if (this.props.species.length === 0) {
        //     return (
        //         <React.Fragment>
        //         <Segment>
        //             <Loader active>
        //                 Loading...
        //             </Loader>
        //         </Segment>
        //         </React.Fragment>
        //     );
        // }
        return (
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Scientific Name</Table.HeaderCell>
                    <Table.HeaderCell>Family Common Name</Table.HeaderCell>
                    <Table.HeaderCell>Common Name</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
    
                <Table.Body>
                    {this.renderPlants()}
                </Table.Body>
    
                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        <Pagination totalPages={5}>
                        </Pagination>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        );
    }

}

const mapStateToProps = (state) => {
    console.log('mapStateToProps');
    console.log(state);
    return { 
        species: Object.values(state.species),
        total: state.species.total
    };
};

export default connect(mapStateToProps, { fetchSpecies })(MyTable);


