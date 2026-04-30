import { StyleSheet, Text, View } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text> bjorn meksi</Text>
    </View>
  )
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      backgroundColor: 'black',
    },
  });