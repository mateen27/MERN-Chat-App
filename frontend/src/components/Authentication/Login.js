import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {

    // state management
    const [ show , setShow ] = useState(false)
    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    // function to display the password
    const handleClick = () => setShow(!show)

        // function to set guest user credentials
        const setGuestCredentials = () => {
            setEmail('ekta@main.com');
            setPassword('12345678');
        };
    
        const submitHandler = () => {
            // Implement your login logic here
            console.log('Logging in with:', email, password);
        };


  return (
    <VStack spacing={'5px'} color={'black'}>

    {/* Email */}
    <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
            <Input placeholder='Enter you Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </FormControl>

    {/* Password */}
    <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input type={show ? "text" : "password" } value={password} placeholder='Enter you Password' onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement width={'4.5rem'}>
                    <Button h = "1.75rem" size = "sm" onClick = {handleClick}>
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
            </InputGroup>
    </FormControl>

    {/* Button */}
    <Button
        colorScheme='blue'
        width={'100%'}
        style={{ marginTop : 15 }}
        onClick={submitHandler}
    >
        Login
    </Button>

    {/* Button for guest User Login */}
    <Button
        variant='solid'
        colorScheme='red'
        width={'100%'}
        onClick={setGuestCredentials}
    >
        Get Guest User Credentials
    </Button>

</VStack>
  )
}

export default Login