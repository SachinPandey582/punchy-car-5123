export const loading =(value)=>{
    return {
        type:"loading",
        payload:value
    }
}
export const status =(value)=>{
    return {
        type:"status",
        payload:value
    }
}
 export const token =(value)=>{
    return {
        type:"token",
        payload:value
    }
 }
 export const error =(value)=>{
return{

    type:"error",
    payload:value
    }
}

