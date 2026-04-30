import { usePathname, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <Text style={styles.url}>URL: {pathname}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/')}>
        <Text style={styles.btnText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: 16,
    backgroundColor: 'black',
  },

  title:{ 
    fontSize: 28, 
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 8,
    color: '#fff',
  },

  url:{
     fontSize: 13, 
     color: '#888', 
     marginBottom: 8 
    },

  btn:{ 
    backgroundColor: '#4F46E5', 
    paddingHorizontal: 28, 
    paddingVertical: 12, 
    borderRadius: 10, 
    width: 200, 
    alignItems: 'center' 
  },

  btnText:{ 
    color: '#fff', 
    fontWeight: '600', 
    fontSize: 15 
  },
});