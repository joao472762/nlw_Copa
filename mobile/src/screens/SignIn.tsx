import { Center, Icon, Text} from "native-base";
import NlwLogoImg from '../assets/logo.svg'
import { Button } from "../components/Buttton";
import {Fontisto} from '@expo/vector-icons'
import { useAuth } from "../hooks/useAuth";

export function  SignIn(){
    const {signIn} = useAuth()
    
    return (
        <Center flex={1} background={'gray.900'} paddingX='7'>
            <NlwLogoImg width={212} height={40}  />
            <Button
                mt={12}
                title="entrar com o google"
                type="SECUNDARY"
                onPress={signIn}
                leftIcon={<Icon as={Fontisto} name='google' color='white' size='md'/>}
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