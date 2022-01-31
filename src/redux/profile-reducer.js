const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

export const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likes: Math.floor(Math.random() * 36),
    };
    state.postsData.push(newPost);
    state.newPostText = "";
    
  } else if (action.type === UPDATE_NEW_POST) {
    state.newPostText = action.text;
  }

  return state;
};
