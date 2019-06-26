import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setActiveItem } from '../actions';

class MyMenu extends React.Component {
    componentDidMount() {
        this.props.setActiveItem('species');
    }

    handleItemClick = (e, { name }) => this.props.setActiveItem(name);

    render() {

        return (
            <Menu>
                <Menu.Item
                    name='family'
                    active={this.props.activeItem === 'family'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='genus'
                    active={this.props.activeItem === 'genus'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='plants'
                    active={this.props.activeItem === 'plants'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='species'
                    active={this.props.activeItem === 'species'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
   return { activeItem: state.menu.activeItem } 
}

export default connect(mapStateToProps, { setActiveItem })(MyMenu);
