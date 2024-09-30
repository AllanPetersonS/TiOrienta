import { StyleSheet, 
SafeAreaView
 } from 'react-native';
import{Ionicons, MaterialCommunityIcons, FontAwesome} from 'react-native-vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Onibus from './Onibus';
import Feedback from './Feedback';
import COP30 from './COP30';

const stack = createStackNavigator()

function Icones(){
    
    const navigation = useNavigation();
    
    return(
        
            <SafeAreaView style ={style.icones}>
                <Ionicons
                name="bus"
                size={70}
                color='black'
                onPress={() => navigation.navigate("Onibus")}
                style ={style.onibus}
                />
            <MaterialCommunityIcons
                name="message-processing"
                size={70}
                onPress={() => navigation.navigate('Feedback')} 
                style ={style.onibus}
            />
            <FontAwesome
                name="calendar-check-o"
                size={70}
                onPress={() =>navigation.navigate("COP30")}
                style ={style.calendar}
            />
            </SafeAreaView>    
       
    )

    

}


const style = StyleSheet.create({
    icones:{
        flex:1,
        justifyContent: 'space-between',
        alignItems:"flex-start",
        flexDirection: 'row',
    },
    onibus:{
        marginRight: 60,
        marginTop: 10,
    },
    calendar:{
        marginTop: 10,
    }
})
export default Icones;