

const initState = {
  banner:[],
  storeNumber:0
}

export default function home(state = initState, action) {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        banner: action.payload
      }
    case 'ADD':
      return {
        ...state,
        storeNumber: state.storeNumber+1
      }
    default:
      return state
  }
}
