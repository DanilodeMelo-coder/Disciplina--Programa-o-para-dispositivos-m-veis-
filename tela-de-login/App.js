import {View, Text, TextInput, Button, Presssable, ScrollView} from 'react-native'

import {SafeareaProvider, SafeAreaView} from 'react-native-safe-area-context'



const App=()=>{
  return(

   <SafeareaProvider> 
    <SafeAreaView>

      <ScrollView>
        <View>

          {/*SEÇÃO 1- CABEÇALHO*/}
            <View>
              <Text>APP</Text>

              <Text>Bem-Vindo!</Text>

              <Text>Entre com seus dados para acessar o sistema</Text>


            </View>

          {/*SEÇÃO 2 - DADOS DE ACESSO*/}
            <View>
              <Text>E-mail</Text>

              <TextInput placeholder="Digite sua senha" keyboardType="email-address" />

              <Text>Senha</Text>

              <TextInput placeholder="Digite sua senha" secureTextEntry = {true} /> 
            </View>

          {/*SEÇÃO 3 - OPÇÃOES*/}
              <View>
                <Text>Lembrar-me</Text>

                <Presssable>
                  <Text>Esqueci a senha</Text>
                </Presssable>


              </View>

            {/*SEÇÃO 4 - ENTRAR*/}
              <View>

                <Button title="ENTRAR" />

              </View>

            {/*SEÇÃO 5 - OUTRAS FORMAS DE ACESSO*/}
              <View>

                <Text>------ou-------</Text> 

                <Button title="Continuar com google" />

              </View>

        </View>
      </ScrollView>

    </SafeAreaView>
   </SafeareaProvider> 
  );
}

export default App;