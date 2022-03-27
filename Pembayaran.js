import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function Pembayaran({navigation}) {
    const register = () =>{
        navigation.navigate('HalamanUtama',{
        })
    }
    const pembayaran = () =>{
        navigation.navigate('Pembayaran',{
        })
    }
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
            <Text style={Style.title}>Kapalzy</Text>
            <View style={Style.body3}>
                <Text style={Style.Label1}>PEMBAYARAN </Text>
                </View>
                <View style={Style.body2}>
                    <Text style={Style.Label}>TRANSFER KE NOMOR REKENING</Text>
                    <Text style={Style.Label}>17412******</Text>
                    <Text style={Style.Label}>BANK BANG INI BANK BANG</Text>
                </View>
            <View style={Style.box}>
                <TouchableOpacity style={Style.tombol} onPress={register}>
                    <Text style={Style.texttombol}>Submit</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        heght:'100%',
    },
    body2: {
        justifyContent : 'center',
        backgroundColor: 'white',
        width: '50%',
        position: 'relative',
        borderWidth:0.5,
        borderColor:'black',
    },
    body3: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        width: '50%',
        alignItems:'center',
    },

    Label: {
        alignSelf:'center',
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingBottom:10,
    },
    Label1: {
        fontSize: 26,
        color: '#fffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },


    title:{
        fontSize: 40,
        color: '#fffff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },
    tombol: {

        backgroundColor: '#D87E2C',
        borderRadius: 5,
        padding: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position :'relative',

    },
    texttombol: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
    box: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width : '25%',
        alignSelf :'center',
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
        marginTop:50,
    },

    tombol1: {
        backgroundColor: 'C4C4C4',
        borderRadius: 5,
        width: '30%',

    },

});

export default Pembayaran;
