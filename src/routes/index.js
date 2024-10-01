import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Wellcome from '../pages/Wellcome';
import SingIn from '../pages/SingIn';
import Header from "../pages/paginaPrincipal/Header";


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
                name="Continuar sem cadastrar"
                component={Header}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}