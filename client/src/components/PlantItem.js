import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { Button, Header, Image, Segment, Loader, Card, Item, Modal, HeaderSubheader } from 'semantic-ui-react';
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
            <Item>
                <Item.Content>
                    <Item.Header >{data.family_common_name}</Item.Header>
                    <Item.Meta>{data.duration}</Item.Meta>
                    <Item.Description>
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>
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
                        <Loader active>
                            Loading...
                        </Loader>
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
                    <HeaderSubheader>{this.props.selectedPlant.data.scientific_name}</HeaderSubheader>
                </Modal.Header>
                <Modal.Content> 
                    {this.renderImage(this.props.selectedPlant.data)}
                    {this.renderContent(this.props.selectedPlant.data)}
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