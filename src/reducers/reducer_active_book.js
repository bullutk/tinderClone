// state argument is NOT application state, only the 
//state this reducer is responisble for
export default (state = null, action)=>{
	 switch(action.type){
	 case 'BOOK_SELECTED':
	 	return action.payload;
	 }
	return state;
}