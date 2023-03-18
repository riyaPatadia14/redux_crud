const initialState = {
  album: [
    { id: 1, music: "In the Morning", year: 1999 },
    { id: 2, music: "pink moon", year: 1998 },
    { id: 3, music: "sunshine", year: 2000 },
    { id: 4, music: "kabhi kabhi aditi", year: 1997 },
    { id: 5, music: "my name is khan", year: 1996 },
  ],
  updateValue: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "onAdd":
      const { id, music, year } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        album: [
          ...state.album,
          {
            id: id,
            music: music,
            year: year,
          },
        ],
      };
    case "onDelete":
      const dispatchDelete = state?.album?.filter((x) => x.id !== action.id);
      return {
        ...state,
        album: dispatchDelete,
      };
    case "onEdit": {
      let e = action.payload;
      console.log("e:", e);
      return {
        ...state,
        updateValue: [e],
      };
    }
    case "onUpdate":
      const update = state.album.map((x) => {
        if (x.id == action.payload.id) {
          return (x = action.payload);
        }
        return x;
      });
      return {
        ...state,
        album: update,
      };
    default:
      return state;
  }
};
export default reducer;
