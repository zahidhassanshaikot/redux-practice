
const initialState={
    count:100
}
function  rootReducer(state=initialState, action) {
    switch (action.type) {
        case "ADD":{
            return{
                count:state.count +1
            }
        }
        case "SUB":{
            return{
                count:state.count -1
            }
        }
        default:return state
    }
}
export  default  rootReducer;