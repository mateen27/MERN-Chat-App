import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Signup = () => {

    // state management
    const [ show , setShow ] = useState(false)
    const [ name , setName ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ confirmPassword , setConfirmPassword ] = useState('');
    const [ pic , setPic ] = useState('');

    // function to display the password
    const handleClick = () => setShow(!show) 

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }


  return (
    <VStack spacing={'5px'} color={'black'}>
    {/* Name */}
    <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
            <Input placeholder='Enter you Name' onChange={(e) => setName(e.target.value)}/>
    </FormControl>

    {/* Email */}
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
            <Input placeholder='Enter you Email' onChange={(e) => setEmail(e.target.value)}/>
    </FormControl>

    {/* Password */}
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input type={show ? "text" : "password" } placeholder='Enter you Password' onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement width={'4.5rem'}>
                    <Button h = "1.75rem" size = "sm" onClick = {handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
            </InputGroup>
    </FormControl>

    {/* ReEnter Password */}
    <FormControl id='password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input type={show ? "text" : "password" } placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)}/>
                <InputRightElement width={'4.5rem'}>
                    <Button h = "1.75rem" size = "sm" onClick = {handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
            </InputGroup>
    </FormControl>

    {/* User Image */}
    <FormControl id='pic' isRequired>
        <FormLabel>Upload your Picture</FormLabel>
            <Input
                type='file'
                p={1.5}
                accept='image/*'
                onChange={(e) => postDetails(e.target.files[0])}
            />
    </FormControl>

    {/* Button */}
    <Button
        colorScheme='blue'
        width={'100%'}
        style={{ marginTop : 15 }}
        onClick={submitHandler}
    >
        Sign up
    </Button>

</VStack>
  )
}

export default Signup