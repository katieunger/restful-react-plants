import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Header, Image, Segment, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchPlant } from '../actions';

class PlantItem extends React.Component {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.fetchPlant(this.props.match.params.id);
        console.log(this.props);
    }

    onDismiss() {
        //this.props.history.push('/');
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
                    <div className="header">{this.props.selectedPlant.data.common_name}</div>
                    <div className="content">
                        <p>Hi</p>
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
        selectedPlant: state.plants.selectedPlant
    }
};
  
export default connect(mapStateToProps, { fetchPlant })(PlantItem);