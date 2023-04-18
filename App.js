import { Text, View, Button, TextInput } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your event' style={styles.input} />
        <Button title='Add' color='#52528C' />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Event 1</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Event 2</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Event 3</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.item}>Event 4</Text>
        </View>
      </View>
    </View>
  );
}