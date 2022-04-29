import * as actionTypes from "./actions";

const initialState = {
  collection: null,
  collections: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION: {
      // console.log(action.collection)
      const updatedCollections = state.collections;
      updatedCollections.push(action.collection);
      return {
        ...state,
        updatedCollections,
      };
    }
    case actionTypes.CURRENT_COLLECTION: {
      let currentCollection = state.collection
      currentCollection = action.currentCollection
      return {
        ...state,
        currentCollection,
      }
    }
    default:
      return state;
  }
};

export default reducer;
