import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as ScreenOrientation from 'expo-screen-orientation';

import RotasApp from './src/routes/routes.js';

export default function App() {
  
  useEffect(()=>{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  });

  return (
    <NavigationContainer>
      <RotasApp/>
    </NavigationContainer>
  );
}
