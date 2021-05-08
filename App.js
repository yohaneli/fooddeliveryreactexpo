import React,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'
import {StyleSheet} from 'react-native'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

const App = () => {

  const [isFontLoaded,setLoaded] = useState(false);

  const loading = async () => {
    await Font.loadAsync({
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf'),

    })
    setLoaded(true);
  }

  useEffect(() => {
    loading();
  },[])

  return((isFontLoaded)?
    (<NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>):(null)
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})