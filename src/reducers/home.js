

const initState = {
  banner:[]
}

export default function home(state = initState, action) {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        banner: action.payload
      }
    default:
      return state
  }
}
