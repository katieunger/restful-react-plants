import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react';

import './App.css';
import SearchBar from './SearchBar';
import MyMenu from './Menu';
import SpeciesTable from './SpeciesTable';
import PlantsTable from './PlantsTable';
import PlantItem from './PlantItem';
import GenusTable from './GenusTable';
import FamiliesTable from './FamiliesTable';


const App = () => {
    return (
        <BrowserRouter>
            <Container className="fluid background">
                <Container className="main">
                    <Header as='h1'>My Plants</Header>
                    <MyMenu />
                    <SearchBar />
                    <Switch>
                        <Route path="/families" exact component={FamiliesTable}></Route>
                        <Route path="/genus" exact component={GenusTable}></Route>
                        <Route path="/plants" exact component={PlantsTable}></Route>
                        <Route path="/plants/:id" exact component={PlantItem}></Route>
                        <Route path="/species" exact component={SpeciesTable}></Route>
                    </Switch>
                </Container>
            </Container>
        </BrowserRouter>
    );
};

export default App;