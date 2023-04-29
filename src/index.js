import { useState } from 'react';
import { Text, View, Button, Modal } from 'react-native';
import { styles } from './styles';
import { Input, List } from './components/index';

export default function App() {
    const [text, setText] = useState('');
    const [events, setEvents] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const onAddEvent = () => {
        if (text.length === 0)
            return;
        setEvents([
            ...events,
            {
                id: Math.random().toString(),
                value: text
            }
        ]);
        setText('');
    };

    const onHandlerEvent = (id) => {
        setModalVisible(!modalVisible);
        const selectedEvent = events.find(event => event.id === id);
        setSelectedEvent(selectedEvent);
    }

    const onHandlerCancelModal = () => {
        setModalVisible(!modalVisible);
        setSelectedEvent(null);
    }

    const onHandlerDeleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>
            <Input
                buttonColor='#52528C'
                buttonTitle='Add'
                onChangeText={(text) => setText(text)}
                onHandlerButton={onAddEvent}
                placeholder='Enter your event'
                value={text}
            />
            <List
                information={events}
                doAction={onHandlerEvent}
            />
            <Modal visible={modalVisible} animationType='slide'>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Event Detail</Text>
                    <View style={styles.modalDetailContainer}>
                        <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
                        <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title='Cancel'
                            color='#5252BC'
                            onPress={() => onHandlerCancelModal()}
                        />
                        <Button
                            title='Delete'
                            color='#5252BC'
                            onPress={() => onHandlerDeleteEvent(selectedEvent.id)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}
