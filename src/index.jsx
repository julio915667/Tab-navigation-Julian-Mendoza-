import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/index';
import MainNavigator from './navigation/main';
import { styles } from './styles';
import { useFonts } from "expo-font"
import NavegationContainer from './navigation';
export default function App() {
  const [loaded] = useFonts({
    'Oswald-Bold': require("../assets/fonts/Oswald-Bold.ttf"),
    'Oswald-ExtraLight': require("../assets/fonts/Oswald-ExtraLight.ttf")
  });
  return (
    <View style={styles.container}>
     <NavegationContainer/>
      <StatusBar style="auto"/>
    </View>
  );
}

