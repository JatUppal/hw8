import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BadgerNewsScreen from './screens/BadgerNewsScreen';
import BadgerArticleScreen from './screens/BadgerArticleScreen';

const Stack = createNativeStackNavigator();

function BadgerNewsStack(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList"
                component={BadgerNewsScreen}
                options={{ title: "News" }}
            />
            <Stack.Screen
                name="Article"
                component={BadgerArticleScreen}
                options={{ title: "Article" }}
            />
        </Stack.Navigator>
    );
}

export default BadgerNewsStack;