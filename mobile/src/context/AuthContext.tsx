import { createContext, ReactNode, useState, useEffect } from "react"
import * as AuthSession from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { api } from "../services/api"

WebBrowser.maybeCompleteAuthSession()

interface UserProps {
    id: string
    name: string,
    avatarUrl: string
}

interface AuthContextType {
    user: UserProps,
    isUserLoading: boolean
    signIn: () => Promise<void> 
}

export const AuthContext = createContext({} as AuthContextType)

interface AuthContextProvider {
    children: ReactNode
}

export function AuthContextProvider({children}: AuthContextProvider){
    const [isUserLoading, setIsUserLoding] = useState(false)
    const [user, setUser] = useState<UserProps>()

    const [request, response , promptAsync] = Google.useAuthRequest({
        clientId: '587465646020-m98pvs7aomb04omc0i559gjfit53ctqr.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['email', 'profile']
    })

    async function signIn(){
        try {
            setIsUserLoding(true)
            await promptAsync()

        } catch (error) {
            console.warn(error)
            throw error
        }
        finally {
            setIsUserLoding(false)
        }
    
    }

    async function signInWithGoogle(access_token: string){

        try {
            setIsUserLoding(true)
            const responseToken = await api.post('/users',{
                access_token
            })
            const {token} = responseToken.data

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
            const userInfoResponse = await api.get('/me',)
    
            const useAuthenticate = userInfoResponse.data.user

            const userInfo = {
                id: useAuthenticate.sub,
                name: useAuthenticate.name,
                avatarUrl: useAuthenticate.avatarUrl
            }

            setUser(userInfo)
            
        } catch (error) {
            console.log(error)
            throw error
        }
        finally {
            setIsUserLoding(false)
        }
    }
    

    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken)
        }
    }, [response])

    return(
        <AuthContext.Provider value={{
            signIn,
            user,
            isUserLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}