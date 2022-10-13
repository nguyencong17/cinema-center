const { createSlice } = require("@reduxjs/toolkit");

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    getItemMovie(state, action) {

    }
  }
});

const { actions, reducers } = movieSlice;
export const { getItemMovie } = actions;
export default reducers;