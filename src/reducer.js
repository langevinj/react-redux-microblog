import { ADD, EDIT, REMOVE, ADDCOMMENT, DELETECOMMENT} from './actionTypes'

const INITIAL_STATE = { posts: {} }

function reducer(state = INITIAL_STATE, action) {
    console.log("reducer ran; state & action:", state, action); 

    switch(action.type) {
        case ADD:
            return { posts: {...state.posts, [action.payload.id]: {...action.payload}}}

        case EDIT:

        case REMOVE:
            if(state.posts[action.payload]){
                let { [action.payload]: omit, ...updatedPosts } = state.posts
                return { ...state, posts: { ...updatedPosts} } 
            } 
        return null
        
        case ADDCOMMENT:

        case DELETECOMMENT:

        default: 
            return state;
    }
}

export default reducer;
