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
    const currentCollection = useSelector(state => state.currentCollection)

    const [index,setIndex] = React.useState(collections.indexOf(currentCollection))
    const [currentCollectionKey, setCurrentCollectionKey] = React.useState(currentCollection?.key)

    React.useEffect(() => {
        const newCurrentCollection = collections.find(collection => {
            return collection?.key === currentCollectionKey
        })
        setIndex(collections.indexOf(newCurrentCollection))
        console.log(newCurrentCollection, currentCollection, index)

        dispatch({
            type: actionTypes.CURRENT_COLLECTION,
            currentCollection: newCurrentCollection,
        })
    },[currentCollectionKey, collections])
    return (
        <div>
            <Navbar />
            <Flex>
            <Sidebar setCurrentCollectionKey={setCurrentCollectionKey} index={index}/>
            <CollectionView/>
            </Flex>
        </div>
    )
}