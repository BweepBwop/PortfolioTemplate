import { Text, View, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import AnimatedText from 'react-native-animated-text';

// Typing effect function to simulate letter-by-letter animation
const useTypedText = (text, speed = 150) => {
  const [displayText, setDisplayText] = useState('');
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayText;
};

export default function HomePage() {
  const welcomeText = useTypedText('Welcome to my portfolio.', 100);
  const introText = useTypedText("Hi, I'm Alyssa Marie Tundag.", 100);
  
  return (
    <View style={styles.container}>
      <AnimatedText style={styles.welcomeText}>{welcomeText}</AnimatedText>
      <AnimatedText style={styles.introText}>{introText}</AnimatedText>
      <Text style={styles.paragraph}>
        I'm currently a student of B.S in Finance at Xavier University.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F1E7',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#243642',
    marginBottom: 10
  },
  introText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#387478',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#629584',
    textAlign: 'center',
  },
});
