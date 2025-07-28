import { View, Text, StyleSheet } from 'react-native';

export default function AdPlaceholder() {
  return (
    <View style={styles.adContainer}>
      <Text style={styles.adText}>[ Iklan akan tampil di sini ]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  adContainer: {
    height: 0,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#aaa',
  },
  adText: {
    color: '#555',
    fontSize: 14,
    fontStyle: 'italic',
  },
});