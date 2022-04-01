import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';

import { connect } from 'react-redux';
import { getTodos, AddTodos } from '../redux/action';

import styles from './style';

const Todos = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [button, setButton] = useState('Save');
  const [selectedStatus, setSelectedStatus] = useState('ON_PROGRESS');

  const dispatch = useDispatch();
  const todo = useSelector(state => state.appData.todos);

  const sendData = () => {
    const dataObject = {
      title: title,
      description: description,
      status: selectedStatus
    }

    console.log(dataObject);

    dispatch(AddTodos(dataObject));
    setTitle('');
    setDescription('');
    dispatch(getTodos())
  }

  useEffect(() => {
    dispatch(getTodos());
  }, []);


    return (
      <View style={styles.root}>
        <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Redux Todo List</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
            value={title}
            placeholder="Title"
            placeholderTextColor="white"

          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Description"
            placeholderTextColor="white"

          />
        </View>
        <View style={styles.statusesContainer}>
          <TouchableOpacity
            onPress={() => selectedStatus('ON_PROGRESS')}
            style={[
              styles.statusButton,
              selectedStatus === 'ON_PROGRESS' && styles.statusButtonSelected
            ]}
          >
            <Text
              style={[
                styles.statusButtonText,
                selectedStatus === 'ON_PROGRESS' && styles.statusButtonTextSelected
              ]}
            >
              Progress
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({ selectedStatus: 'DONE' })}
            style={[
              styles.statusButton,
              selectedStatus === 'DONE' && styles.statusButtonSelected
            ]}
          >
            <Text
              style={[
                styles.statusButtonText,
                selectedStatus === 'DONE' && styles.statusButtonTextSelected
              ]}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto', marginTop: 20 }}>
          <TouchableOpacity style={styles.saveButon} onPress={() => sendData()}>
            <Text style={styles.buttonText}>Save</Text>
            <Icon name="save" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.todoDateText}>Monday</Text>
          {todo.map(item => (
          <View style={styles.cardListContainer}>
            <View style={styles.todoCard}>
              <View style={styles.todoTitleContainer}>
                <View style={styles.todoActionContainer}>
                  <Text style={styles.todoTitle}>{item.title}</Text>
                  <TouchableOpacity style={styles.doneBadge}>
                    <Text style={styles.doneBadgeText}>{item.status}</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.todoActionContainer}>
                  <TouchableOpacity style={styles.editButton}>
                    <Icon name="edit" size={20} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="trash-2" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.todoDescription}>{todo.title}</Text>
              </View>
            </View>
          </View>
         ))}
        </View>
      </ScrollView>
      </View>
    )
  }

  export default Todos

// const mapStateToProps = state => {
//   return {
//     data: state.appData.todos
//   }
// }

// const mapDispatchToProps = {
//   getTodoData: getTodos,
//   AddTodosData: AddTodos
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Todos)

