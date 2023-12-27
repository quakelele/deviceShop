import { create } from "@mui/material/styles/createTransitions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const commentPut = createAsyncThunk('comment/commentPut', async (obj, { dispatch }) => {

//   fetch(
//     `http://localhost:3005/comment/${id}`
//     , {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify([...comments, obj]),
//     });

// });

export const commentDelete = createAsyncThunk(
  "comment/commentDelete",
  async (id, { dispatch }) => {
    fetch(`http://localhost:3005/comment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    dispatch(deleteFromComment(id));
  }
);

export const postComment = createAsyncThunk(
  "comment/postComment",
  async (inputValue, { dispatch }) => {
    const post = {
      title: inputValue,
    };
    fetch("http://localhost:3005/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  }
);


export const commentFetch = createAsyncThunk(
  "comment/commentFetch",
  async () => {
    const response = await fetch("http://localhost:3005/comment");
    const result = await response.json();
    return result;
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: [],
  },
  reducers: {
    deleteFromComment(state, action) {
      state.comment = state.comment.filter(
        (item) => item.id !== action.payload
      );
    },
    addComment(state, action) {
      state.comment = [...state.comment, { name: action.payload }];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(commentFetch.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
  },
});
export const { addComment, deleteFromComment } = commentSlice.actions;
export default commentSlice.reducer;
