import { Text, View, StyleSheet } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Profile Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC2C2',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
