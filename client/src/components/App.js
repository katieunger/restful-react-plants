import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import MyTable from './Table';

const App = () => {
    return (
        <Container style={{ marginTop: '3em' }}>
            <Header as='h1'>Plant Species</Header>
            <MyTable/>
        </Container>
    );
};

export default App;