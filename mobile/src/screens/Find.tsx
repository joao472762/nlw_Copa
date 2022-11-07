import { Heading, VStack } from "native-base";


import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Button } from "../components/Buttton";
import { useNavigation } from "@react-navigation/native";

export function Find(){
    const {navigate} = useNavigation()
  
    return(
        <VStack flex={1} bg='gray.900'>
            <Header showBackButton title="Criar novo bolão"/>
            <VStack mt={8} mx={5} alignItems='center'>
               
                <Heading fontSize={'xl'} textAlign='center' fontFamily='heading' color='white' my={8}>
                    Encontre um bolão através de 
                    seu código único
                </Heading>

                <Input
                    mb={2}
                    placeholder="Qual é o nome do seu bolão"
                />

                <Button
                    title="CRIAR O MEU BOLÃO"
                />

              
            </VStack>
        </VStack>
    )
}