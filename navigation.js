// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanUtama from './HalamanUtama';
import BuatTiket from './BuatTiket';
import Informasi from './Informasi';
import Asal from './Asal';
import Tujuan from './Tujuan';
import Layanan from './Layanan';
import Jam from './Jam';
import Pembayaran from './Pembayaran';
import PesananSaya from './PesananSaya';
import Pembatalan from './Pembatalan';
import Menu from './Menu';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HalamanUtama" component={HalamanUtama} />
        <Stack.Screen name="BuatTiket" component={BuatTiket}/>
        <Stack.Screen name='Informasi' component={Informasi}/>
        <Stack.Screen name='Asal' component={Asal}/>
        <Stack.Screen name='Tujuan' component={Tujuan}/>
        <Stack.Screen name='Layanan' component={Layanan}/>
        <Stack.Screen name='Jam' component={Jam}/>
        <Stack.Screen name='Pembayaran' component={Pembayaran}/>
        <Stack.Screen name='PesananSaya' component={PesananSaya}/>
        <Stack.Screen name='Pembatalan' component={Pembatalan}/>
        <Stack.Screen name='Menu' component ={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;