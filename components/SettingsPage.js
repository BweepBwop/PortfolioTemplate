import { Text, View, StyleSheet } from 'react-native';

export default function SettingsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0D8FF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
