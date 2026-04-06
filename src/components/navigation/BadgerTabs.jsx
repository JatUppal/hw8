import { Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BadgerNewsStack from '../BadgerNewsStack';
import BadgerPreferencesScreen from '../screens/BadgerPreferencesScreen';

const Tab = createBottomTabNavigator();

function BadgerTabs(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="News"
                component={BadgerNewsStack}
                options={{ headerShown: false }}
            />
            <Tab.Screen name="Preferences" component={BadgerPreferencesScreen} />
        </Tab.Navigator>
    );
}

export default BadgerTabs;