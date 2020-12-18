import { ADD, EDIT, REMOVE, ADDCOMMENT, DELETECOMMENT, LOCALLOAD} from './actionTypes'

const INITIAL_STATE = { posts: {}, titles: [], error: false }

function reducer(state = INITIAL_STATE, action) {
    // console.log("reducer ran; state & action:", state, action); 

    switch(action.type) {
        case ADD:
            return { ...state, posts: {...state.posts, [action.post.id]: {...action.post}}, titles: [...state.titles, {id: action.post.id, title: action.post.title, description: action.post.description}]}

        case EDIT:
            return { ...state, posts: {...state.posts, [action.payload.id]: {...action.payload}}}

        case REMOVE:
            return action.message
        
        case ADDCOMMENT:
            return { ...state, posts: { ...state.posts, [action.payload.postid]: {...state.posts[action.payload.postid], comments: [...state.posts[action.payload.postid].comments, {...action.payload.comment}]}}}

        case DELETECOMMENT:
            return { ...state, posts: {...state.posts, [action.payload.postid]: {...state.posts[action.payload.postid], comments: state.posts[action.payload.postid].comments.filter(c => c.id !== action.payload.commentid)}}}

        case LOCALLOAD:
            return { ...state, posts: action.payload}

        case 'FETCH_POSTS':
            return { ...state, titles: action.titles}
            
        case 'FETCH_INFO':
            return { ...state, posts: action.post }
        
        case 'ERROR':
            return { ...state, error: true }

        default: 
            return state;
    }
}

export default reducer;
