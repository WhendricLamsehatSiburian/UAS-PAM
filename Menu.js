import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function Menu({navigation}) {
    const home = () =>{
        navigation.navigate('HalamanUtama',{

        })
    }
    const pesan = () =>{
        navigation.navigate('PesananSaya',{
        })
    }
    const batal = () =>{
        navigation.navigate('Pembatalan',{

        })
    }
    const menu = () =>{
        navigation.navigate('Menu',{

        })
    }


    return (

        <View style={Style.body}>
            <View style={Style.body1}>
            <View style={Style.body3}>
                <Text style={Style.title}>Menu</Text>
            </View>
                <View style={Style.body2}>
                    <Text style={Style.tujuan}>Cek Pemesanan</Text>
                </View>
                <View style={Style.body2}>
                    <Text style={Style.tujuan}>Detail Profil</Text>
                </View>
                <View style={Style.body2}>
                    <Text style={Style.tujuan}>Hubungi Kami</Text>
                </View>
                <View style={Style.body2}>
                    <Text style={Style.tujuan}>Riwayat Pemesanan</Text>
                </View>
            </View>
            <View style ={Style.box3}>
            <TouchableOpacity style={Style.tombol1} onPress={home}>
                    <Icon name={'home'}  size={28}/>
                    </TouchableOpacity>
                <TouchableOpacity style={Style.tombol1} onPress={pesan}>
                    <Icon name={'browsers-sharp'}  size={28}/>
                    </TouchableOpacity>
                <TouchableOpacity style={Style.tombol1} onPress={batal}>
                    <Icon name={'close-circle-sharp'}  size={28}/>
                    </TouchableOpacity>
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
        padding: 20,
        margin: 10,
        elevation: 1,
        width: '95%',
        position: 'absolute',
        height :'100%'
    },
    body1: {
        justifyContent : 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '75%',
        alignSelf :'center',
        paddingBottom : 50,
    },
    body2: {
        marginTop: 50,    
        justifyContent : 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '95%',
        position: 'relative',
        alignSelf :'center',
        height: 50,
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
    },
    body3: {
        justifyContent : 'center',
        backgroundColor: 'red',
        borderRadius: 5,
        width: '100%',
        position: 'relative',
        alignSelf :'center',
        height: 50,
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

export default Menu;
