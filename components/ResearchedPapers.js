import { Text, View, StyleSheet } from 'react-native';

export default function ResearchedPapers() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the ResearchedPapers!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0D0B0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
