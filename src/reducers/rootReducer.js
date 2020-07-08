const initState = {
    posts: [
        {id:'1', title:'title 1', body:'body 1 buy some milk'},
        {id:'2', title:'title 2', body:'body 2 get some sleep'},
        {id:'3', title:'title 3', body:'body 3 turn off light'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;