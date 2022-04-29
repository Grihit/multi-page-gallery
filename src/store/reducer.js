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
    case actionTypes.EDIT_COLLECTION: {
      let newCollections = state.collections;
      let currentCollection = state.collection
      const prevCollection = newCollections.find(c => {
        return c.key === action.key
      })
      const index = newCollections.indexOf(prevCollection)
      newCollections[index] = {
        ...newCollections,
        title: action.title,
        description: action.description,
        Images: action.Images,

      }
      currentCollection = newCollections[index]
      return {
        ...state,
        currentCollection,
        newCollections,
      }

    }
    default:
      return state;
  }
};

export default reducer;
