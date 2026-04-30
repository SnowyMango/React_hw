import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>my head</Text>
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6753b2',
  },

  header: {
    backgroundColor: '#250d7a',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },

  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});