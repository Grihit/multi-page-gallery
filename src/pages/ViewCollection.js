import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CollectionView from '../components/CollectionView'
import { Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux/'

export default function ViewCollection() {
    const collections = useSelector(state => state.collections)
    const [currentCollectionKey, setCurrentCollectionKey] = React.useState(collections[0].key)
    const [currentCollection, setCurrentCollection] = React.useState(collections[0])

    React.useEffect(() => {
        const newCurrentCollection = collections.find(collection => {
            return collection.key === currentCollectionKey
        })
        setCurrentCollection(newCurrentCollection)
    },[currentCollectionKey, collections])
    return (
        <div>
            <Navbar />
            <Flex>
            <Sidebar setCurrentCollectionKey={setCurrentCollectionKey}/>
            <CollectionView collection={currentCollection} />
            </Flex>
        </div>
    )
}