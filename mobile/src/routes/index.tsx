import { NavigationContainer } from '@react-navigation/native'
import { Box } from 'native-base'
import { useAuth } from '../hooks/useAuth'
import { SignIn } from '../screens/SignIn'
import { AuthRoutes } from './auth/auth.routes'

export {NavigationContainer} from '@react-navigation/native'

export function Routes(){
    const {user}  = useAuth()
    console.log(user)
    return (
        <Box flex={1} color='gray.900'>

            <NavigationContainer>
                { user ? <AuthRoutes/> : <SignIn/>}
            </NavigationContainer>
        </Box>

    )

}