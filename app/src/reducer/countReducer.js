const initialState = { count: 0 }

export const action = {
    increaseAction() {
        return { type: 'increase' }
    }
}

export function counterReducer(state=initialState, action) {
    switch (action.type) {
        case 'increase':
            console.log(action.type)
            return  { ...state, count: state.count + 1  }
        default:
            return state
    }
}