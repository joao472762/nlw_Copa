import { Box, FlatList, useToast } from 'native-base';
import { background } from 'native-base/lib/typescript/theme/styled-system';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import {Game,GameProps} from './Game'
import { Loading } from './Loading';

interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [games, setGames] = useState<GameProps[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [firstTeamPoints, setFirstTeamPoints] = useState('')
  const [secondTeamPoints, setSecondTeamPoints] = useState('')


  const toast = useToast()
  console.log(poolId)
  async function fetchGames(){

    try{
      setIsLoading(true)
      const response = await api.get(`/pools/${poolId}/games `)
      setGames(response.data.gamesFormated)
    } 
    catch (error) {
      console.error(error)
      return toast.show({
          title: 'Não foi possível carregar os jogos',
          backgroundColor: 'red.500',
          placement: 'top'
      })
    }

    finally {
        setIsLoading(false)
    }
  }

  async function handleGuessConfirm(gameId: String){
    if(!firstTeamPoints.trim() || !secondTeamPoints.trim()){
      return toast.show({
        title: 'informe o placar do palpite',
        backgroundColor: 'red.500',
        placement: 'top'
      })
    }

    try {
      setIsLoading(true)
      await api.post(`/pools/${poolId}/games/${gameId}`,{
        firstTeamPoints: Number(firstTeamPoints),
	      secondTeamPoints:  Number(secondTeamPoints)
      })

      toast.show({
        title: 'Palpíte enviado com sucesso',
        backgroundColor: 'green.500',
        placement: 'top'
      })

      fetchGames()
    } 
    catch (error) {
      console.error(error)
      toast.show({
          title: 'Não foi possível enviar o palpite.',
          backgroundColor: 'red.500',
          placement: 'top'
      })
    }

    finally {
        setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchGames()
  }, [poolId])

  if (isLoading) {
    return <Loading/>
  }

  return (
      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Game 
            data={item }
            setFirstTeamPoints={setFirstTeamPoints}
            setSecondTeamPoints={setSecondTeamPoints}
            onGuessConfirm={() => handleGuessConfirm(item.id)}

          />
        )}
      />
  );
}
