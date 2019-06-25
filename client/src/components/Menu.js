import React from 'react';
import { Menu } from 'semantic-ui-react';

class MyMenu extends React.Component {
    state = {
        activeItem: 'species'
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    name='family'
                    active={activeItem === 'family'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='genus'
                    active={activeItem === 'genus'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='plants'
                    active={activeItem === 'plants'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='species'
                    active={activeItem === 'species'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default MyMenu;
