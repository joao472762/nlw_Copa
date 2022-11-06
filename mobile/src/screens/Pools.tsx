import { VStack, Icon , FlatList} from "native-base";
import {MagnifyingGlass} from 'phosphor-react-native'
import {Octicons} from '@expo/vector-icons'

import { Button } from "../components/Buttton";
import { Header } from "../components/Header";

export function Pools() {
    return(
        <VStack flex={1} bg='gray.900'>
            <Header title="Meus bolões"/>

            <VStack px={5}>
                <Button 
                    marginTop={6}
                    title="BUSCAR BOLÃO POR CÓDIGO"

                    leftIcon={<Icon as={Octicons} name='search' color={'black'} size='md' />
                }
                />

            </VStack>


        </VStack>
    )
}