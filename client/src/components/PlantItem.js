import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { Image, Dimmer, Loader, List, Modal, Label, Icon, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlant, openModal, closeModal, unsetPlant } from '../actions';
import { formatCommonName } from '../helpers';

class PlantItem extends React.Component {
    constructor(props) {
        super(props);
        console.log('PlantItem constructor');
        console.log(this.props);
    }

    componentDidMount() {
        console.log('PlantItem componentDidMount before fetch');
        console.log(this.props);
        this.props.fetchPlant(this.props.match.params.id);
        console.log('PlantItem componentDidMount after fetch');
        console.log(this.props);
        this.open(true);
        console.log('PlantItem componentDidMount after open');
        console.log(this.props);
    }

    componentWillUnmount() {
        this.props.unsetPlant();
    }

    open = () => {
        this.props.openModal(true);
    };

    close = () => {
        this.props.closeModal(false);
        this.props.history.push('/plants');
    };

    renderImage(data) {
        if (data.images && data.images.length > 0) {
            return (
                <Image wrapped size='medium' src={data.images[0].url} as='a'/>
            );
        }
    }

    renderContent(data) {
        return (
            <List divided relaxed>
                <List.Item>
                    <List.Content>
                        <strong>Family Common Name: </strong>
                        <span>{data.family_common_name}</span>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <strong>Duration: </strong>
                        {data.duration}
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <strong>Native Status: </strong>
                        {data.native_status}
                            <Icon name='question circle' color='grey' link to='https://plants.usda.gov/about_adv_search.html'/>
                    </List.Content>
                </List.Item>
            </List>
        );
    }

    render() {
        if (!this.props.selectedPlant) {
            return (
                <Modal
                open={this.props.modal.open}
                onClose={this.close}
                >
                    <Modal.Content>
                        <Dimmer active>
                            <Loader>
                                Loading...
                            </Loader>
                        </Dimmer>         
                    </Modal.Content>
                </Modal>
            );
        }

        return (
            <Modal 
                open={this.props.modal.open}
                onClose={this.close}
            >
                <Modal.Header>
                    {formatCommonName(this.props.selectedPlant.data.common_name)}
                    <h4><em>{this.props.selectedPlant.data.scientific_name}</em></h4>
                </Modal.Header>
                <Modal.Content>
                    <Grid divided>
                        <Grid.Column width={8}>
                            {this.renderImage(this.props.selectedPlant.data)}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            {this.renderContent(this.props.selectedPlant.data)}
                        </Grid.Column>
                    </Grid>         
                </Modal.Content>
            </Modal>
        );
    }
} 

const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
        modal: state.modal,
        selectedPlant: state.plants.selectedPlant,
    }
};
  
export default withRouter(connect(mapStateToProps, { fetchPlant, openModal, closeModal, unsetPlant })(PlantItem));