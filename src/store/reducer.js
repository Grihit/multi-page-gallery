import * as actionTypes from "./actions";

const initialState = {
  currentCollection: null,
  collections: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION: {
      const updatedCollections = state.collections;
      updatedCollections.push(action.collection);
      return {
        ...state,
        collections: updatedCollections,
      };
    }
    case actionTypes.CURRENT_COLLECTION: {
      return {
        ...state,
        currentCollection: action.currentCollection,
      }
    }
    case actionTypes.EDIT_COLLECTION: {
      let newCollections = state.collections
      let currentCollection = state.currentCollection
      const index = action.index
      //console.log(index)
      newCollections[index] = {
        ...newCollections[index],
        title: action.title,
        description: action.description,
        Images: action.Images,
      }
      currentCollection = newCollections[index]
      return {
        ...state,
        currentCollection: currentCollection,
        collections: newCollections,
      }

    }
    default:
      return state;
  }
};

export default reducer;
