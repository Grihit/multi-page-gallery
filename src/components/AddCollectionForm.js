import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex
} from '@chakra-ui/react'

export default function(){

    const [formData, setFormData] = React.useState({
        title: "",
        description: ""
    })
    const [isError, setIsError] = React.useState({
        title: false,
        description: false
    })

    function handleInputChange(event){
        const {name,value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    React.useEffect(() => {
        setIsError(prevIsError => {
            return !formData.title ? {...prevIsError, title: true} : {...prevIsError, title: false}
        })
    },[formData.title])

    const ErrorTitleText = isError.title ? 'Name cannot be empty' : 'Enter Collection Name'

    return(
        <form>
            <FormControl isInvalid={isError.title}>
                <Flex alignItems={'center'}>
                    <FormLabel htmlFor='title' fontSize={'2xl'} minW={'150px'}>Name: </FormLabel>
                    <Input
                        type={'text'}
                        name={'title'}
                        placeholder={'Enter Colllection Name'}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </Flex>
            </FormControl>
            <FormControl isInvalid={isError.description}>
                <Flex alignItems={'center'}>
                    <FormLabel htmlFor='description' fontSize={'2xl'} minW={'150px'}>Description: </FormLabel>
                    <Input
                        type={'text'}
                        name={'description'}
                        placeholder={'Enter Colllection Name'}
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </Flex>
            </FormControl>
        </form>
    )
}