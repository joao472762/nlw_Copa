import { Octicons } from '@expo/vector-icons'
import { useState, useCallback } from "react";
import { VStack, Icon , FlatList, useToast, Box} from "native-base";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { api } from "../services/api";
import { Header } from "../components/Header";
import { Button } from "../components/Buttton";
import { Loading } from "../components/Loading";
import { EmptyPoolList } from "../components/EmptyPoolList";
import {PoolCard, PoolCardProps} from '../components/PoolCard';

function PoolsListHeader(){
    return (<Box h={.5} background='gray.600'  marginY={4}/>)
}

export function Pools() {
    const [pools, setPools]  = useState<PoolCardProps[]>([])
    const [isLoading,setIsLoading] = useState(true)

    const {navigate} = useNavigation()
    const toast = useToast()

    function handleNavigateToDetailsScreen(poolId: string){
        navigate('details', {id: poolId})
    }
    function handleNavigateToFindScreen(){
        navigate('find')
    }
    
    async function featchPools(){
        try { 
        
            const response = await api.get('/pools')
            setPools(response.data.pools)
            
            
        } catch (error) {
            console.error(error)
            toast.show({
                title: 'Desculpe, Não consegui buscar os bolões.',
                backgroundColor: 'red.500',
                placement: 'top'
            })
        }

        finally{
             setIsLoading(false)
        }
    }


    useFocusEffect(useCallback(() => {
        featchPools()
    }, []))
    return(
        <VStack flex={1} bg='gray.900'>
            <Header title="Meus bolões"/>

            <VStack px={5}>
                <Button 
                    marginTop={6}
                    title="BUSCAR BOLÃO POR CÓDIGO"
                    onPress={handleNavigateToFindScreen}
                    leftIcon={<Icon as={Octicons} name='search' color={'black'} size='md' />
                }
                />
                {
                    isLoading 
                    ? (<Loading/>)
                    : (
                        <FlatList
                         
                            data={pools}
                            keyExtractor={item => item.id}
                            renderItem= {({item}) => (
                                <PoolCard 
                                    data={item}
                                    onPress={() => handleNavigateToDetailsScreen(item.id)}
                                />
                            )}
                            ListHeaderComponent = {<PoolsListHeader/>}
                            showsVerticalScrollIndicator = {false}
                            _contentContainerStyle = {{paddingBottom:40}}
                            ListEmptyComponent= {<EmptyPoolList/>}
                        />

                    )
                }

            </VStack>




        </VStack>
    )
}