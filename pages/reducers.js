export function appReducer(state, action) {
    switch (action.type) {
        case 'INTRO':
            return {...state, loading: action.value};
        case 'ANIMATE':
            return {...state, action: action.value};
        case 'TALK':
            return {...state, text: action.value};
        case 'ACHIEVEMENTS':
            return {...state, hide: action.value};
        case 'GET':
            return {...state, get: action.value};
        case 'LOCK':
            return {...state, locked: action.value};
        default:
            return state
    }
  }
