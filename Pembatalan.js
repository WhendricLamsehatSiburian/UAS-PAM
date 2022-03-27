import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function Pembatalan({navigation}) {
    const home = () =>{
        navigation.navigate('HalamanUtama',{

        })
    }
    const pesan = () =>{
        navigation.navigate('PesananSaya',{
        })
    }
    const menu = () =>{
        navigation.navigate('Menu',{

        })
    }

    return (
        <View style={Style.body}>
            <View style={Style.body3}>
                <Text style={Style.title}>Daftar Pembatalan</Text>
                </View>

            <View style={Style.body2}>
                <Text style={Style.tujuan}>Tidak Ada Aktivitas Pembatalan</Text>
                    
                </View>
            <View style ={Style.box3}>
            <TouchableOpacity style={Style.tombol1} onPress={home}>
                    <Icon name={'home'}  size={28}/>
                    </TouchableOpacity>
                <TouchableOpacity style={Style.tombol1} onPress={pesan}>
                    <Icon name={'browsers-sharp'}  size={28}/>
                    </TouchableOpacity>
                <View style={Style.tombol1}>
                    <Icon name={'close-circle-sharp'}  size={28}/>
                    </View>
                <TouchableOpacity style={Style.tombol1} onPress={menu}>
                    <Icon name={'menu'}  size={28}/>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const Style = StyleSheet.create({
    body: {
        backgroundColor: '#00ffff',
        borderRadius: 5,
        margin: 10,
        elevation: 1,
        width: '95%',
        position: 'absolute',
        heght:'100%',
    },
    body2: { 
        justifyContent : 'center',
        backgroundColor: 'white',
        width: '80%',
        alignSelf :'center',
        paddingTop : '20%',
        paddingBottom: '20%',
    },
    body3: {
        marginTop: 50,    
        justifyContent : 'center',
        backgroundColor: 'green',
        borderRadius: 5,
        width: '80%',
        position: 'relative',
        alignSelf :'center',
    },

    title:{
        fontSize: 40,
        color: '#fffff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },
    tujuan:{
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    box3: {   
        flexDirection: 'row',
        justifyContent: 'left',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 5,
        margin: 5,
        position:'bottom',
        width:'100%',
        height:'relative',
        paddingLeft:50,
        marginTop : 50,
    },

    tombol1: {
        backgroundColor: 'C4C4C4',
        borderRadius: 5,
        width: '30%',

    },
});

export default Pembatalan;
