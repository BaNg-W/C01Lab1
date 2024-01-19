import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask.js'

const ToDoList = ({ initialTasks }) => {
    const [toDos, setToDos] = useState(initialTasks.map(task => ({ id: uuidv4(), title: task })));

    const addToDo = newTitle => {
        setToDos([...toDos, { id: uuidv4(), title: newTitle }]);
    };
    const removeToDo = id => {
        setToDos(toDos.filter(toDo => toDo.id !== id));
    };

    return (
        <View style={styles.container}>
            {toDos.map(toDo => (
                <View key={toDo.id}>
                    <Text>{toDo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialTasks: [0],
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;