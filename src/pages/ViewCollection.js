import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
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
    
    console.log(currentCollection)
    return (
        <div>
            <Navbar />
            <Sidebar setCurrentCollectionKey={setCurrentCollectionKey}/>
        </div>
    )
}