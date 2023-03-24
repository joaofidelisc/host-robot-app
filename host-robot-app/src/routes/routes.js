import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home.js';
import Cardapio from '../screens/Cardapio/Cardapio.js';
import Extensao from '../screens/Extensao/Extensao.js';
import Eventos from '../screens/Eventos/Eventos.js';
import Mapas from '../screens/Mapas/Mapas.js';
import Info from '../screens/Mapas/Info.js';
import Horarios from '../screens/Horarios/Horarios.js';

//Grupos de extensão
import CATIJr from '../screens/Extensao/CATIJr.js';
import GAMSo from '../screens/Extensao/GAMSo.js';
import MAU from '../screens/Extensao/MAU.js';
import PETBCC from '../screens/Extensao/PETBCC.js';


const Stack = createStackNavigator();

function RotasApp(){
  return(
    <Stack.Navigator
      screenOptions={{
        orientation: 'portrait',
        headerStyle:{
          backgroundColor:'#4D94DD'
        },
        headerTintColor: '#FFFFFF'
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cardápio" component={Cardapio}/>
      
      <Stack.Screen name="Grupos de extensão" component={Extensao}/>
      <Stack.Screen name="Grupos de extensão - CATI Jr." component={CATIJr}/>
      <Stack.Screen name="Grupos de extensão - GAMSo" component={GAMSo}/>
      <Stack.Screen name="Grupos de extensão - M@U" component={MAU}/>
      <Stack.Screen name="Grupos de extensão - PET BCC" component={PETBCC}/>
    
      <Stack.Screen name="Eventos" component={Eventos}/>
      <Stack.Screen name="Mapa DC" component={Mapas}/>
      <Stack.Screen name="Mapa DC - Informações" component={Info}/>
      <Stack.Screen name="Horário das aulas" component={Horarios}/>
    </Stack.Navigator>
  )
}

export default RotasApp;