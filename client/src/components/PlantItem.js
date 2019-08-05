import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import { Button, Header, Image, Segment, Loader, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlant } from '../actions';
import { formatCommonName } from '../helpers';

// Using Semantic UI modal and not Semantic UI Modal component for now
class PlantItem extends React.Component {
    constructor(props) {
        super(props);
        this.onDismiss = this.onDismiss.bind(this);
    }

    componentDidMount() {
        console.log('PlantItem componentDidMount before fetch');
        console.log(this.props);
        this.props.fetchPlant(this.props.match.params.id);
        console.log('PlantItem componentDidMount after fetch');
        console.log(this.props);
    }

    onDismiss() {
        console.log('PlantItem onDismiss');
        console.log(this.props);
        this.props.history.push('/plants');
    }

    renderImage(data) {
        if (data.images && data.images.length > 0) {
            return (
                <Image wrapped size='medium' src={data.images[0].url} />
            );
        }
    }

    render() {
        if (!this.props.selectedPlant) {
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

        return ReactDOM.createPortal(
            <div 
            onClick={this.onDismiss} 
            className="ui dimmer modals visible active"
            >
                <div 
                    onClick={e => e.stopPropagation()}
                    className="ui standard modal visible active"
                >
                    <div className="ui header">
                        {formatCommonName(this.props.selectedPlant.data.common_name)}
                        <div className="sub header">{this.props.selectedPlant.data.scientific_name}</div>
                    </div>
                    <div className="content">
                        {this.renderImage(this.props.selectedPlant.data)}
                    </div>
                </div>
            </div>, 
            document.querySelector("#modal")
        );
    }
} 

const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps');
    console.log(state);
    return {
        selectedPlant: state.plants.selectedPlant,
        //history: ownProps.history
    }
};
  
export default withRouter(connect(mapStateToProps, { fetchPlant })(PlantItem));