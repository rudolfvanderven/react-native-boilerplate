import initialState from './initialState'

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.

export default function example (state = initialState, action) {
  return state
}
