import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/home/Home';
import Catalog from '../components/catalog/Catalog';
import DetailMovie from '../components/detail/DetailMovie';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/:category/search/:keyword'>
                <Catalog />
            </Route>
            <Route path='/:category/:id'>
                <DetailMovie />
            </Route>
            <Route path='/:category'>
                <Catalog />
            </Route>
        </Switch>
    );
}
export default Routes;
