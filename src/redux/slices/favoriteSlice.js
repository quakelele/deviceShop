import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFavorite = createAsyncThunk("favorite/fetchFavorite", async () => {
    const response = await fetch('http://localhost:3005/favorite');
    const result = await response.json();
    return result
})

export const addToFavorites = createAsyncThunk("favorite/addToFavorites", async (obj, { dispatch, getState }) => {
    const { favorite } = getState().favorite
    if (favorite.map(i => i.id).includes(obj.id)) {
        dispatch(deleteFromFavorites(obj.id))
        return
    } dispatch(addToFavoriteLocal(obj))
    const favoriteItem = {
        title: obj.title,
        quantity: obj.quantity,
        price: obj.price,
        category: obj.category,
        imageUrl: obj.imageUrl,
        rating: obj.rating,
        id: obj.id
    }
    fetch('http://localhost:3005/favorite',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(favoriteItem),
        }
    );

})

export const deleteFromFavorites = createAsyncThunk("favorite/deleteFromFavorites", async (id, { dispatch }) => {

    fetch(`http://localhost:3005/favorite/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
        }
    );
    dispatch(deleteFromFavorite(id))

})

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: [],
    },
    reducers: {
        addToFavoriteLocal(state, action) {
            if (!state.favorite.some(i => i.title === action.payload.title)) {
                state.favorite.push(action.payload);
            };
        },
        deleteFromFavorite(state, action) {
            state.favorite = state.favorite.filter(item => item.id !== action.payload);

        },
        // handler(state, action) {
        //     if (state.favorite.map((item) => item.id).includes(action.payload.id)) {
        //         state.favorite = state.favorite.filter(item => item.id !== action.payload.id);
        //         return
        //     }
        //     state.favorite.push(action.payload);
        // }

    },
    extraReducers: (builder) => {

        builder.addCase(fetchFavorite.fulfilled, (state, action) => {
            state.loading = false;
            state.favorite = action.payload
        });
    },
}
)

export const {
    addToFavoriteLocal,
    deleteFromFavorite
 } = favoriteSlice.actions
export default favoriteSlice.reducer
