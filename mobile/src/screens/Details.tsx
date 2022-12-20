import { Share } from "react-native";
import {useEffect, useState} from 'react'
import { useRoute } from "@react-navigation/native";
import { VStack,useToast, HStack } from "native-base";

import { api } from "../services/api";
import { Header } from "../components/Header";
import { Option } from "../components/Option";
import { Loading } from "../components/Loading";
import { Guesses } from "../components/Guesses";
import { PoolHeader } from "../components/PoolHeader";
import { PoolCardProps } from "../components/PoolCard";
import { EmptyMyPoolList } from "../components/EmptyMyPoolList";


interface DetailsParamsProps {
    id: string
}

type selectedOptionProps = 'guesses' | 'ranking'

export function Details(){
    const [selectedOption, setSelectedOption] = useState<selectedOptionProps>('guesses')
    const [poolDetails, setPoolDetails] = useState<PoolCardProps>()
    const {params} = useRoute()
    const [isLoading, setIsLoading] = useState(true)
    const toast = useToast()

    function handleChangeSelectOption(option: selectedOptionProps){
        setSelectedOption(option)
    }

    const {id} = params as DetailsParamsProps

    async function fetchPoolDetails(){
        try {
            setIsLoading(true)
            const response = await  api.get(`/pool/${id}`)
            setPoolDetails(response.data.pool)
            
           
        } catch (error) {
            console.error(error)
            return toast.show({
                title: 'Não foi possível accesar os detalhes do Bolão'
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    async function onShare(){
        try {
            await Share.share({
                message: poolDetails.code,
                title: 'Compartilhe o código com os seus amigos'
            })
            
        } catch (error) {
            console.error(error)
            toast.show({
                title: `Falha ao copiar código para de Transferêcia`,
                backgroundColor: 'green.500',
                placement: 'top'
    
            })
            
        }
    }

    
    useEffect(() => {
        fetchPoolDetails()
    }, [id])
    
    if (isLoading){
        return <Loading/>
    }


    return(
        <VStack flex={1} bg='gray.900'>
            <Header 
                title={poolDetails.title}
                showBackButton
                showShareButton
                onShare={onShare}
            
            />
            {
                poolDetails._count.participants > 0 ? (
                    <VStack px={5} flex={1}>
                        <PoolHeader data={poolDetails}/>

                        <HStack bgColor={'gray.800'} p={1} rounded='sm' mb={5}>
                            <Option  
                                title="SeusPalpites" 
                                onPress={() => handleChangeSelectOption("guesses")}
                                isSelected={selectedOption === 'guesses'}
                            />
                            <Option 
                                title="Ranking do grupo"
                                onPress={() => handleChangeSelectOption("ranking")}
                                isSelected={selectedOption === 'ranking'}
                            />
                        </HStack> 

                        <Guesses poolId={poolDetails.id}/>
                    </VStack>
                )
                : (<EmptyMyPoolList code={poolDetails.code}/>)
            }
        </VStack>
    )
}