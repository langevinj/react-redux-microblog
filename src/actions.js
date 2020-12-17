import { ADD, EDIT, REMOVE, ADDCOMMENT, DELETECOMMENT } from './actionTypes'

export function addPost(post) {
    return {
        type: ADD,
        payload: post
    };
}

export function editPost(post) {
    return {
        type: EDIT,
        payload: post
    };
}

export function removePost(id) {
    return {
        type: REMOVE,
        payload: id
    };
}

export function addComment(postid, comment){
    return {
        type: ADDCOMMENT,
        payload: { postid: postid, comment: comment}
    };
}

export function deleteComment(postid, commentid){
    return {
        type: DELETECOMMENT,
        payload: { postid: postid, commentid: commentid }
    };
}