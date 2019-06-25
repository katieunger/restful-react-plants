import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import MyTable from './Table';
import MyMenu from './Menu';

const App = () => {
    return (
        <Container style={{ marginTop: '3em' }}>
            <Header as='h1'>My Plants</Header>
            <MyMenu />
            <MyTable/>
        </Container>
    );
};

export default App;