import axios from "axios";
import {Alert} from 'react-native'
import { FETCH_TODOS_SUCCES, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types";
// import {useDispatch} from 'react-redux';

export const saveTodos = (data) => ({
  type: FETCH_TODOS_SUCCES,
  payload: data
})
export const addTodos = (data) => ({
  type: ADD_TODO,
  payload: data
})
export const updateTodos = (data) => ({
  type: UPDATE_TODO,
  payload: data
})
export const deleteTodos = (data) => ({
  type: DELETE_TODO,
  payload: id
})

export const getTodos = () => {
  return async (dispatch) => {
    const resTodos = await axios.get('http://code.aldipee.com/api/v1/todos')
    if(resTodos.data.results.length > 0) {
      dispatch(saveTodos(resTodos.data.results))
    }
  }
}

export const AddTodos = data => async dispatch => {
  try {
    await axios.post('http://code.aldipee.com/api/v1/todos', data)
    .then(() => {
      Alert.alert('ADD SUCCES')
    })
    dispatch(addTodos(data))
  } catch (err) {
    console.log((err));
  }
}