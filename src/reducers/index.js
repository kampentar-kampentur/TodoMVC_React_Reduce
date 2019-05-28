import { combineReducers } from 'redux';
import todoList from './todoList';
import todoFilter from './todoFilters'

const reducer = combineReducers({ todoList, todoFilter })

export default reducer;
