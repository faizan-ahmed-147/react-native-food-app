import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen'
import OrderDilivery from './screens/OrderDilivery'

import MyTab from './navigation/Tab';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
        <TailwindProvider>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"MyTab"}>
          <Stack.Screen name="HomeScreen" component={MyTab} />
          <Stack.Screen name="OrderDilivery" component={OrderDilivery} />

        </Stack.Navigator>
    </TailwindProvider>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },z
// });
