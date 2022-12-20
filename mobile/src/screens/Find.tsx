import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";


import { api } from "../services/api";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Button } from "../components/Buttton";

export function Find(){
    const [poolCode, setPoolCode]  = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {navigate} = useNavigation()
    const toast = useToast()


    async function handleJoinPool(){
      
        if(!poolCode.trim()){
            return toast.show({
                title: 'Digite o código do Bolão.',
                backgroundColor:  'red.500',
                placement: 'top'
            })
        }

        try{
            setIsLoading(true)
            const code = poolCode.toUpperCase()
            await api.post('/pool/join',{code})
            toast.show({
                title: 'Você entrou no bolão com sucesso',
                backgroundColor:  'green.500',
                placement: 'top'
            })
            setIsLoading(false)
            navigate('pools')
        }

        catch(error) {
            setIsLoading(false)
            if(error.response?.data?.message === 'Pool not found.'){
                return toast.show({
                    title: 'Bolão não encontrado',
                    backgroundColor:  'red.500',
                    placement: 'top'
                })
            }

            if(error.response?.data?.message ==="You're already a join this pool."){
                return toast.show({
                    title: 'Você é um participante deste bolão',
                    backgroundColor:  'red.500',
                    placement: 'top'
                })
            }

            console.warn(error)
            toast.show({
                title: 'Falha ao buscar o Bolão',
                backgroundColor:  'red.500',
                placement: 'top'
            })
        }
       
        
    }

    function handleChangePoolCode(code: string){
        setPoolCode(code)
    }
    
  
    return(
        <VStack flex={1} bg='gray.900'>
            <Header showBackButton title="Criar novo bolão"/>
            <VStack mt={8} mx={5} alignItems='center'>
               
                <Heading fontSize={'xl'} textAlign='center' fontFamily='heading' color='white' my={8}>
                    Encontre um bolão através de 
                    seu código único
                </Heading>

                <Input
                    autoCapitalize='characters'
                    mb={2}
                    onChangeText={handleChangePoolCode}
                    placeholder="Qual o código do bolão?"
                    value={poolCode}
                />

                <Button
                    isLoading={isLoading}
                    onPress={handleJoinPool}
                    title="BUSCAR BOLÃO"
                />

              
            </VStack>
        </VStack>
    )
}