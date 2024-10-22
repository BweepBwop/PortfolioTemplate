import { SafeAreaView, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import ResearchedPapers from './components/ResearchedPapers';


// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="Researched Papers" component={ResearchedPapers} />
          <Drawer.Screen name="Profile" component={ProfilePage} />
          <Drawer.Screen name="Settings" component={SettingsPage} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#629584',
  },
});
