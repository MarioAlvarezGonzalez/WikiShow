import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import DetailMovie from '../pages/detail/DetailMovie';

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
