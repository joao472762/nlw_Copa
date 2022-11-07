import {useTheme} from 'native-base'
import {Platform} from 'react-native'
import {SoccerBall, PlusCircle} from 'phosphor-react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { New } from '../../screens/New'
import { Pools } from '../../screens/Pools'
import { Find } from '../../screens/Find'




const {Navigator,Screen} = createBottomTabNavigator()
export function AuthRoutes(){
    const {colors, sizes} = useTheme()
    const size = sizes[6]
    return(
        <Navigator
            
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    backgroundColor: colors.gray[800],
                    borderTopWidth: 0,
                    height: sizes[22],
                    position: 'absolute',
                   
                },
                tabBarItemStyle: {
                    position: 'relative',
                    marginTop: Platform.OS === 'android' ? -10 : 0
                }
    
                
            }}
        >
            <Screen 
                options={{
                    title: 'Novo Bolão',
                    tabBarIcon: ({color}) => (<PlusCircle size={size} color={color}/>)
                }}
                name='new' component={New}
            />
            <Screen 
                options={{
                    title: 'Meus bolões',
                    tabBarIcon: ({color}) => ( <SoccerBall size={size} color={color}/>
                    )
                }}
                name='pools' component={Pools}
            />
            <Screen
                name='find' component={Find}
                options={{
                    tabBarButton: () => null
                }}
            />
        </Navigator>

    )
}