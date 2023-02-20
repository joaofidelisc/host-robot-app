import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home.js';
import Cardapio from '../screens/Cardapio/Cardapio.js';
import Extensao from '../screens/Extensao/Extensao.js';
import Eventos from '../screens/Eventos/Eventos.js';
import Mapas from '../screens/Mapas/Mapas.js';
import Horarios from '../screens/Horarios/Horarios.js';


const Stack = createStackNavigator();

function RotasApp(){
  return(
    <Stack.Navigator
      screenOptions={{
        orientation: 'portrait',
        headerStyle:{
          backgroundColor:'#4D94DD'
        },
        // headerTitleStyle:{

        // },
        headerTintColor: '#FFFFFF'
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Cardápio" component={Cardapio}/>
      <Stack.Screen name="Grupos de extensão" component={Extensao}/>
      <Stack.Screen name="Eventos" component={Eventos}/>
      <Stack.Screen name="Mapa DC" component={Mapas}/>
      <Stack.Screen name="Horário das aulas" component={Horarios}/>
    </Stack.Navigator>
  )
}

export default RotasApp;