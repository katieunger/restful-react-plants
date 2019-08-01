import React from 'react';
import { Icon, Table, Loader, Segment, Pagination, Message, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';

class PlantsTable extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlants();
        console.log('componentDidMount');
        console.log(this.props);
    }

    renderPlantImage(obj) {
        console.log('in renderPlantImage')
        console.log(obj);
        if (!obj.images) {
            return (
                <Image src='#' size='medium' disabled>No Image Available</Image>
            );
        }

        return <Image src={obj.images[0].url} size='medium' disabled>No Image Available</Image>
    }

    renderPlants() {
        console.log('in renderPlants')
        console.log(this.props);
        return this.props.data.map(obj => {
            return (
                <Table.Row key={obj.id}>
                    <Table.Cell>{obj.scientific_name}</Table.Cell>
                    <Table.Cell>{obj.common_name}</Table.Cell>
                    <Table.Cell>{this.renderPlantImage(obj)}</Table.Cell>
                </Table.Row>
            );
        })
    }

    onChangePage(event, data) {
        const clickedPage = data.activePage;
        const activePage = this.props.activePage;
        if (clickedPage !== activePage) {
            this.props.fetchPlants(clickedPage);
        }
    }
    
    render() {
        if (this.props.error) {
            return (
                <React.Fragment>
                <Message negative>
                    <Message.Header>Error</Message.Header>
                    <p>{this.props.error}</p>
                </Message>
                </React.Fragment>
            );
        }
        if (!this.props.data) {
            return (
                <React.Fragment>
                <Segment>
                    <Loader active>
                        Loading...
                    </Loader>
                </Segment>
                </React.Fragment>
            );
        }
        return (
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Scientific Name</Table.HeaderCell>
                    <Table.HeaderCell>Common Name</Table.HeaderCell>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
    
                <Table.Body>
                    {this.renderPlants()}
                </Table.Body>
    
                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>
                        <Pagination
                            defaultActivePage={1}
                            totalPages={this.props.totalPages}
                            onPageChange={this.onChangePage}
                            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                            prevItem={{ content: <Icon name='angle left' />, icon: true }}
                            nextItem={{ content: <Icon name='angle right' />, icon: true }}
                        >
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
        data: state.plants.data,
        activePage: state.plants.activePage,
        totalPages: state.plants.totalPages,
        error: state.plants.error
    };
};

export default connect(mapStateToProps, { fetchPlants })(PlantsTable);


