import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import './App.css';
import MyTable from './Table';
import MyMenu from './Menu';

const App = () => {
    return (
        <Container className="fluid background">
            <Container className="main">
                <Header as='h1'>My Plants</Header>
                <MyMenu />
                <MyTable/>
            </Container>
        </Container>
    );
};

export default App;