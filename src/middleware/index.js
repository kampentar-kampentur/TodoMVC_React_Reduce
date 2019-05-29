import localStorage from '../assets/js/saveState'

export const saveState = ({ getState }) => next => action => {
  const returnValue = next(action)
  localStorage.saveState('redux', getState().todoList)
  return returnValue
}
