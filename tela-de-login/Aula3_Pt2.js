import {View, Text, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
//import {createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/FontAwesome'
//criando o componente das rotas de navegação
//const Stack = createStackNavigator();

const Tab = createBottomTabNavigator()
//criando as rotas de naveção
const Navegacao = ()=>{
  return(
      <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Tela1}
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          )
        }}
      />

        <Tab.Screen name='Perfil' component={Tela2} />

      </Tab.Navigator>
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
        <Button title = "ir para tela 1" onPress={ ()=> {navigation.goBack()}}/>
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