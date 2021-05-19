import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../Containers/Home';
import History from "../Containers/History";
import Route from "../Containers/Route";

export default function DrawerNavigation() {
    return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Route" component={Route} />
    </Drawer.Navigator>
}
