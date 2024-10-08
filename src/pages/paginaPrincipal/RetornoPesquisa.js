import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import BarraPesquisa from './BarraPesquisa'; 

const TelaMapa = () => {
    const [regiao, setRegiao] = useState(null);
    const [Destino, setDestino] = useState({}); 
    const [userLocation, setUserLocation] = useState(null);
    const [rotaCoord, setRotaCoord] = useState([]);

    useEffect(() => {
        console.log("Destino atualizado:", Destino);

        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão de localização necessária!', 'Por favor, permita o acesso à sua localização.');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            setRegiao({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        };

        getLocation();
    }, []);
    console.log('User Location', userLocation);
    console.log("Destino", Destino);
    
    useEffect(() => {
        if (userLocation) {
            console.log("Localização do usuário:", userLocation); // Log para verificar a localização do usuário
        } else {
            console.log("Localização do usuário não definida.");
        }
    
        if (Destino) {
            console.log("Destino:", Destino); // Log para verificar o destino
        } else {
            console.log("Destino não definido.");
        }
        if (userLocation && Destino.latitude !== undefined && Destino.longitude !== undefined) {
            console.log("Destino atualizado no useEffect:", Destino); // Log para verificar

            fetchRoute();
            setRegiao({
                latitude: Destino.latitude,
                longitude: Destino.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        }
    }, [userLocation, Destino]);

    const fetchRoute = async () => {
        const origin = `${userLocation.latitude},${userLocation.longitude}`;
        const dest = `${Destino.latitude},${Destino.longitude}`;
        console.log("Variavel Dest", dest)
        

        const apiKey = 'AIzaSyA8JEEn9yvAytw0jK3FOrr6aCNoqbLZcmY'; // Adicionar a chave da API aqui lembrete
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${dest}&key=${apiKey}`);
            const data = await response.json();

            if (data.routes.length > 0) {
                const points = decodePolyline(data.routes[0].overview_polyline.points);
                setRotaCoord(points);
            } else {
                Alert.alert('Rota não encontrada', 'Não foi possível encontrar uma rota para o destino informado.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível buscar a rota. Tente novamente.');
        }

    };

    const decodePolyline = (t) => {
        let points = [];
        let index = 0, len = t.length;
        let lat = 0, lng = 0;

        while (index < len) {
            let b, shift = 0, result = 0;
            do {
                b = t.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlat = ((result >> 1) ^ -(result & 1));
            lat += dlat;

            shift = 0;
            result = 0;

            do {
                b = t.charCodeAt(index++) - 63;
                result |= (b & 0x1f) << shift;
                shift += 5;
            } while (b >= 0x20);
            let dlng = ((result >> 1) ^ -(result & 1));
            lng += dlng;

            points.push({
                latitude: (lat / 1E5),
                longitude: (lng / 1E5),
            });
        }
        return points;
    };

    if (!regiao) {
        return null; 
    }

    return (
        <View style={style.container}>
            <MapView style={style.map} initialRegion={regiao}>
                {userLocation && <Marker coordinate={userLocation} title='Você está aqui' />}
                {Destino.latitude && Destino.longitude && <Marker coordinate={Destino} title='Destino' />}
                <Polyline coordinates={rotaCoord} strokeWidth={5} strokeColor='blue' />
            </MapView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default TelaMapa;
