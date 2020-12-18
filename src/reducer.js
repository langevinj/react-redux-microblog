import { ADD, EDIT, REMOVE, ADDCOMMENT, DELETECOMMENT, LOCALLOAD, FETCH_INFO, FETCH_POSTS, ERROR, FETCH_COMMENTS, VOTE} from './actionTypes'

const INITIAL_STATE = { posts: {}, titles: [], error: false }

function reducer(state = INITIAL_STATE, action) {
    // console.log("reducer ran; state & action:", state, action); 

    switch(action.type) {
        case ADD:
            return { ...state, posts: {...state.posts, [action.post.id]: {...action.post}}, titles: [...state.titles, {id: action.post.id, title: action.post.title, description: action.post.description}]}

        case EDIT:
            return { ...state, posts: { ...state.posts, [action.post.id]: { ...action.post } }, titles: state.titles.map(title => title.id === action.post.id ? { id: action.post.id, title: action.post.title, description: action.post.description } : title)}

        case REMOVE:
            return action.message
        
        case ADDCOMMENT:
            return { ...state, posts: {...state.posts, comments: [...state.posts.comments, action.comment]}}

        case DELETECOMMENT:
            // return { ...state, posts: {...state.posts, [action.payload.postid]: {...state.posts[action.payload.postid], comments: state.posts[action.payload.postid].comments.filter(c => c.id !== action.payload.commentid)}}}
            return { ...state, posts: { ...state.posts, coomments: state.posts.comments.filter(comment => comment.id !== action.id)}}

        case LOCALLOAD:
            return { ...state, posts: action.payload}

        case FETCH_POSTS:
            return { ...state, titles: action.titles}
            
        case FETCH_INFO:
            return { ...state, posts: action.post }

        case FETCH_COMMENTS: 
            return { ...state, posts: {...state.posts, comments: [...action.comments]}}

        case VOTE:
            return { ...state, posts: { ...state.posts, [action.id]: {...state.posts[action.id], votes: action.count}}}
        
        case ERROR:
            return { ...state, error: true }

        default: 
            return state;
    }
}

export default reducer;
