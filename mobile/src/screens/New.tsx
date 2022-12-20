import { useState } from "react";
import { Heading, VStack, Text, useToast } from "native-base";
import {Keyboard, TouchableWithoutFeedback } from "react-native";

import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";
import NlwLogoImg from '../assets/logo.svg';
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Button } from "../components/Buttton";

export function New(){
    const [poolTitle, setPoolTitle] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const toast = useToast()
    const {user}  = useAuth()

    async function handleCreatePool(){
        if(!poolTitle.trim()){
            return toast.show({
                title: 'Informe um nome para o seu Bolão.',
                backgroundColor: 'red.500',
                placement: 'top'
            })
        }
        
        try {
            setIsLoading(true)
            await api.post('/pools',{title: poolTitle})

            toast.show({
                title: 'Bolão criado com sucesso',
                backgroundColor: 'green.500',
                placement: 'top'
            })
            
            
        } catch (error) {
            console.error(error)

            toast.show({
                title: 'Não foi possível cria o bolão',
                backgroundColor: 'red.500',
                placement: 'top'
            })
        }
        finally {
            setPoolTitle('')
            setIsLoading(false)

        }

    }

    function handleChangePoolTitle(title: string){
        setPoolTitle(title)
    }

    const buttonIsDisabled = isLoading


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <VStack flex={1} bg='gray.900'>
                <Header  title="Buscar por código"/>
                <VStack mt={8} mx={5} alignItems='center'>
                    <NlwLogoImg/>
                    <Heading fontSize={'xl'} textAlign='center' fontFamily='heading' color='white' my={8}>
                        Crie seu próprio bolão da copa
                        e compartilhe entre amigos! {user.name}
                    </Heading>

                    <Input
                        mb={2}
                        value={poolTitle}
                        onChangeText={handleChangePoolTitle}
                        placeholder="Qual nome do seu bolão?"
                    />

                    <Button
                        onPress={handleCreatePool}
                        title="CRIAR MEU BOLÃO"
                        isLoading={buttonIsDisabled}
                    />

                    <Text fontSize={'sm'} color={'gray.200'} px={10} marginTop={4} textAlign={'center'}>
                        Após criar seu bolão, você receberá um código único que poderá 
                        usar para convidar outras pessoas.
                    </Text>
                </VStack>
            </VStack>
        </TouchableWithoutFeedback>
    )
}