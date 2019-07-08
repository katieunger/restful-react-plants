import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react';

import './App.css';
import SpeciesTable from './SpeciesTable';
import PlantsTable from './PlantsTable';
import MyMenu from './Menu';

const App = () => {
    return (
        <BrowserRouter>
            <Container className="fluid background">
                <Container className="main">
                    <Header as='h1'>My Plants</Header>
                    <MyMenu />
                    <Switch>
                        <Route path="/plants" exact component={PlantsTable}></Route>
                        <Route path="/species" exact component={SpeciesTable}></Route>
                    </Switch>
                </Container>
            </Container>
        </BrowserRouter>
    );
};

export default App;