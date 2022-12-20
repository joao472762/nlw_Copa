import {Fontisto} from '@expo/vector-icons';
import { Center, Icon, Spinner, Text} from "native-base";

import { useAuth } from "../hooks/useAuth";
import NlwLogoImg from '../assets/logo.svg';
import { Button } from "../components/Buttton";

export function  SignIn(){
    const {signIn, isUserLoading} = useAuth()

    const buttonIsDisabled  = isUserLoading
    
    return (
        <Center flex={1} background={'gray.900'} paddingX='7'>
            <NlwLogoImg width={212} height={40}  />
            <Button
                mt={12}
                title="entrar com o google"
                type="SECUNDARY"
                onPress={signIn}
                disabled={buttonIsDisabled}
                isLoading={buttonIsDisabled}
                _loading={{_spinner: {color: 'white'}}}
                leftIcon={<Icon as={Fontisto} name='google' color='white' size='md'/>
                
            }
            />
            <Text
                color='gray.200'
                textAlign='center'
                marginTop={4}
            >
                Não utilizamos nenhuma informação  além {'\n'} 
                do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}