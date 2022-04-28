import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Textarea,
    Flex,
    Button,
    Text,
    ModalFooter
} from '@chakra-ui/react'
import UploadImage from './UploadImage'

export default function AddCollectionForm(props) {

    const [formData, setFormData] = React.useState({
        title: "",
        description: "",
    })
    const [isError, setIsError] = React.useState({
        title: false,
        description: false
    })

    const [errorMsg, setErrorMsg] = React.useState('')

    const [images, setImages] = React.useState([])

    function handleInputChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    React.useEffect(() => {
        setIsError(prevIsError => {
            return !formData.title ? { ...prevIsError, title: true } : { ...prevIsError, title: false }
        })
    }, [formData.title])
    React.useEffect(() => {
        setIsError(prevIsError => {
            return !formData.description ? { ...prevIsError, description: true } : { ...prevIsError, description: false }
        })
    }, [formData.description])

    function formSubmit(event) {
        event.preventDefault()
        if (isError.title)
            setErrorMsg('Collection name is required')
        else if (isError.description)
            setErrorMsg('Collection description is required')
        else if (images.length < 1)
            setErrorMsg('No Image Uploaded')
        else
            setErrorMsg('')

    }

    return (
        <form onSubmit={formSubmit}>
            <FormControl isInvalid={isError.title} marginBottom={'10px'}>
                <Flex alignItems={'center'}>
                    <FormLabel htmlFor='title' fontSize={'2xl'} minW={'150px'}>Name: </FormLabel>
                    <Input
                        type={'text'}
                        name={'title'}
                        placeholder={'Enter Collection Name'}
                        value={formData.title}
                        onChange={handleInputChange}
                    />
                </Flex>
            </FormControl>
            <FormControl isInvalid={isError.description}>
                <Flex alignItems={'center'}>
                    <FormLabel htmlFor='description' fontSize={'2xl'} minW={'150px'}>Description: </FormLabel>
                    <Textarea
                        name={'description'}
                        placeholder={'Enter Colllection Description'}
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </Flex>
            </FormControl>
            <Flex justifyContent={'flex-end'}>
                {errorMsg && <Text color={'red.400'} fontSize={'lg'} margin={0}>*{errorMsg}</Text>}
            </Flex>
            <Flex justifyContent={'center'} marginTop={'10px'}>
                <UploadImage fileList={images} setFileList={setImages} />
            </Flex>
            <ModalFooter>
                <Button colorScheme={"teal"} size={"lg"} type={'submit'} >
                    Add
                </Button>
                <Button colorScheme={"teal"} size={"lg"} variant={'ghost'} onClick={props.close}>
                    Close
                </Button>
            </ModalFooter>
        </form>
    )
}