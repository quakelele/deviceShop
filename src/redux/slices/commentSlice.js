import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
  async (value, obj, { dispatch }) => {
    const post = {
      title: value,
    };
    const newObj = obj.comments.push(post);
    const response = await fetch("http://localhost:3005/comment", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
    if (response.ok) {
      dispatch(commentFetch());
    }
    dispatch(addComment(newObj));
  }
);

// export const commentGet = createAsyncThunk("comment/commentGet", async(id) => {

// })

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
