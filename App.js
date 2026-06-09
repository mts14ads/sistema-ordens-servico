import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import { Provider as PaperProvider } from 'react-native-paper';

import Navegacao from './components/Navegacao';
import Login from './components/Login';
import NovaConta from './components/NovaConta';
import EditarOS from './components/EditarOS';
import AuthContextProvider from './config/Context';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <PaperProvider>
        <AuthContextProvider>

          <Stack.Navigator>

            <Stack.Screen 
              options={{headerShown: false}} 
              name="Login" 
              component={Login} 
            />

            <Stack.Screen
              name="NovaConta"
              component={NovaConta}
              options={{ title: 'Criar uma nova conta' }}
            />

            <Stack.Screen 
              options={{headerShown: false}} 
              name="Navegacao" 
              component={Navegacao} 
            />

            <Stack.Screen 
              name="EditarOS" 
              component={EditarOS} 
            />

          </Stack.Navigator>

        </AuthContextProvider>
      </PaperProvider>

    </NavigationContainer>
  );
}