const authReducer =(state = {data: null}, actions) => {
 switch(actions.type){
    case 'Auth':
        return state
    default:
        return state;
 }
}
export default authReducer