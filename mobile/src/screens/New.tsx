import { Heading, VStack, Text } from "native-base";

import NlwLogoImg from '../assets/logo.svg'
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Button } from "../components/Buttton";

export function New(){
    return(
        <VStack flex={1} bg='gray.900'>
            <Header  title="Buscar por código"/>
            <VStack mt={8} mx={5} alignItems='center'>
                <NlwLogoImg/>
                <Heading fontSize={'xl'} textAlign='center' fontFamily='heading' color='white' my={8}>
                    Crie seu próprio bolão da copa
                    e compartilhe entre amigos!
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual o código do bolão?"
                />

                <Button
                    title="BUSCAR BOLÃO"
                />

                <Text fontSize={'sm'} color={'gray.200'} px={10} marginTop={4} textAlign={'center'}>
                    Após criar seu bolão, você receberá um código único que poderá 
                    usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    )
}