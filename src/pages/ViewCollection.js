import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CollectionView from '../components/CollectionView'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux/'
import { useDispatch } from "react-redux";
import * as actionTypes from "../store/actions";

export default function ViewCollection() {
    const dispatch = useDispatch();

    const collections = useSelector(state => state.collections)
    const collection = useSelector(state => state.currentCollection)

    const [index,setIndex] = React.useState(collections.indexOf(collection))
    const [currentCollectionKey, setCurrentCollectionKey] = React.useState(collection.key || collections[0].key)
    const [currentCollection, setCurrentCollection] = React.useState(collection || collections[0])

    React.useEffect(() => {
        const newCurrentCollection = collections.find(collection => {
            return collection.key === currentCollectionKey
        })
        setCurrentCollection(newCurrentCollection)
        setIndex(collections.indexOf(newCurrentCollection))

        dispatch({
            type: actionTypes.CURRENT_COLLECTION,
            currentCollection: newCurrentCollection,
        })
    },[currentCollectionKey, collections, index, collection, dispatch])
    return (
        <div>
            <Navbar />
            <Flex>
            <Sidebar setCurrentCollectionKey={setCurrentCollectionKey} index={index || 0}/>
            <CollectionView collection={currentCollection} />
            </Flex>
        </div>
    )
}