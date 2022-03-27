import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
function HalamanUtama({ navigation }) {

    const register = () =>{
        navigation.navigate('BuatTiket',{
        })
    }
    const asal = () =>{
        navigation.navigate('Asal',{
        })
    }
    const tujuan = () =>{
        navigation.navigate('Tujuan',{
        })
    }
    const layanan = () =>{
        navigation.navigate('Layanan',{
        })
    }
    const jam = () =>{
        navigation.navigate('Jam',{
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
            <Text style={Style.Label}>Pelabuhan Awal</Text>
            <View style={Style.box1}>
            <Icon name={'boat-outline'}  size={28}/>
                <TouchableOpacity style={Style.tombol1} onPress={asal}>
                    <Text style={Style.TextInput}>Pilih Pelabuhan Awal</Text>
                </TouchableOpacity>
            </View>

            <Text style={Style.Label}>Pilih Pelabuhan Tujuan</Text>
            <View style={Style.box1}>
            <Icon name={'boat-outline'}  size={28}/>
                <TouchableOpacity style={Style.tombol1} onPress={tujuan}>
                    <Text style={Style.TextInput}>Pilih Pelabuhan Tujuan</Text>
                </TouchableOpacity>
            </View>

            <Text style={Style.Label}>Kelas Layanan</Text>
            <View style={Style.box1}>
            <Icon name={'man-outline'}  size={28}/>
                <TouchableOpacity style={Style.tombol1} onPress={layanan}>
                    <Text style={Style.TextInput}>Pilih Layanan</Text>
                </TouchableOpacity>
            </View>

            <Text style={Style.Label}>Tanggal Penerbangan</Text>
            <View style={Style.box1}>
            <Icon name={'calendar-outline'}  size={28}/>
                <View style={Style.tombol1} >
                    <Text style={Style.TextInput}>Pilih Tanggal Masuk</Text>
                </View>
            </View>

            <Text style={Style.Label}>Jam Masuk Pelabuhan</Text>
            <View style={Style.box1}>
            <Icon name={'time-outline'}  size={28}/>
                <TouchableOpacity style={Style.tombol1} onPress={jam}>
                    <Text style={Style.TextInput}>Pilih Jam Masuk</Text>
                </TouchableOpacity>
            </View>

            <View style ={Style.box}>
            <Text style={Style.TextDewasa}>Dewasa         1 orang</Text>

            </View>
            <View style={Style.box2}>
                <TouchableOpacity style={Style.tombol} onPress={register}>
                <Icon name={'search'}  size={28} color={'black'} />
                    <Text style={Style.texttombol}>Buat Tiket</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.box2}>
                <Text style={Style.credit}>Copyright Tugas PAM 119140043 Whendric Lamsehat Siburian</Text>
            </View>

            <View style ={Style.box3}>
                <View style={Style.tombol1}>
                    <Icon name={'home'}  size={28}/>
                    </View>
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
        heght:'100%',
    },

    Label: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10,
    },

    title:{
        fontSize: 40,
        color: '#fffff',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },
    TextInput: {
        flex: 1,
        paddingLeft: 5,
    },
    TextDewasa: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'Justify',
        paddingLeft: 10,
    }, 
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'black',
        height: 60,
        borderRadius: 5,
        margin: 5,
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
        flexDirection : 'row',

    },
    tombol: {
        backgroundColor: '#D87E2C',
        borderRadius: 5,
        padding: 10,
        width: '50%',
    },

    box2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        height: "relative",
        margin: 5,
    },

    credit: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
    texttombol: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight:'bold',
    },  justifyContent:'center',

});

export default HalamanUtama
