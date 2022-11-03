import { NativeBaseProvider, Center, Text, StatusBar } from "native-base";
import { THEME } from './src/styles/theme';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/loading';
import { SignIn } from './src/screens/SignIn';


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
      
      { fontsIsLoaded ? <SignIn/> : <Loading/> }

    </NativeBaseProvider>
  );
}

