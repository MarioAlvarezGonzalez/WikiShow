import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Catalog from '../components/Catalog';
import DetailMovie from '../components/detail/DetailMovie';

const Routes = () => {
    return (
            <Switch>
                <Route path='/:category/search/:keyword'>
                    <Catalog />
                </Route>
                <Route path='/:category/:id'>
                    <DetailMovie />
                </Route>
                <Route path='/:category'>
                    <Catalog />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
    );
}

export default Routes;
