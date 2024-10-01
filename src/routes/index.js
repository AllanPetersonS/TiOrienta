import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Wellcome from '../pages/Wellcome';
import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Wellcome"
                component={Wellcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}