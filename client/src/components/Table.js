import React from 'react';
import { Icon, Menu, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchSpecies } from '../actions';

class MyTable extends React.Component {
    componentDidMount() {
        this.props.fetchSpecies();
    }

    renderPlants() {
        return this.props.species.map(specie => {
            return (
                <Table.Row key={specie.id}>
                    <Table.Cell>{specie.scientific_name}</Table.Cell>
                    <Table.Cell>{specie.family_common_name}</Table.Cell>
                    <Table.Cell>{specie.common_name}</Table.Cell>
                </Table.Row>
            );
        })
    }
    
    render() {
        console.log(this.props);
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
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                        </Menu.Item>
                    </Menu>
                    </Table.HeaderCell>
                </Table.Row>
                </Table.Footer>
            </Table>
        );
    }

}

const mapStateToProps = (state) => {
    return { 
        species: Object.values(state.species),
    };
};

export default connect(mapStateToProps, { fetchSpecies })(MyTable);


