import {View, Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'



//criando o componente das rotas de navegação
const Stack = createStackNavigator();


//criando as rotas de naveção
const Navegacao = ()=>{
  return(
      <Stack.Navigator>

        <Stack.Screen name='Home' component={Tela1} />
        <Stack.Screen name='Perfil' component={Tela2} />

      </Stack.Navigator>
  )
}


//Primeira tela
  const Tela1 =({navigation})=>{
    return(
      <View>
        <Text>
          Vaiii peixe!!!
        </Text>
        <Button title = "ir para tela 2" onPress={ ()=> {navigation.navigate('Perfil')}}/>
      </View>

    )
  }

//Segunda tela
    const Tela2 =({navigation})=>{
    return(
      <View>
        <Text>
          Roger
        </Text>
        <Button title = "ir para tela 1" onPress={ ()=> {navigate.goBack()}}/>
      </View>

    )
  }


const App=()=>{
  return (
    <NavigationContainer>
      <Navegacao />
    </NavigationContainer>
    )
}


export default App