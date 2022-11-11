import React from 'react'

const reducer = (state,action) => {
    switch (action.type){
case"loading":
return {
    ...state,loading:action.payload
}
case "status":
    return {
        ...state,AuthStatus:action.payload
    }
    case "error" :
    return {
...state,error:action.payload
    }
    case "token" :
        return {
            ...state,token:action.payload
        }
    
    default:
        return state
  
}
}

export default reducer