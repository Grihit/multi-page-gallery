import * as actionTypes from "./actions";

const initialState = {
  collections: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION: {
        // console.log(action.collection)
      const updatedCollections = state.collections
      updatedCollections.push(action.collection)
      return{
          ...state,
          updatedCollections
      }
    }
    default:
      return state;
  }
};

export default reducer;