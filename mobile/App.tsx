import { NativeBaseProvider, Center, Text, StatusBar } from "native-base";
import { THEME } from './src/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { AuthContext, AuthContextProvider } from "./src/context/AuthContext";
import { New } from "./src/screens/New";
import { Find } from "./src/screens/Find";
import { Pools } from "./src/screens/Pools";
import { Routes } from "./src/routes";


export default function App() {
  const [fontsIsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        translucent 
        barStyle="light-content" 
        backgroundColor={'transparent'}  
      />
      <AuthContextProvider>
        { fontsIsLoaded ? <Routes/> : <Loading/> }
      </AuthContextProvider>

    </NativeBaseProvider>
  );
}

