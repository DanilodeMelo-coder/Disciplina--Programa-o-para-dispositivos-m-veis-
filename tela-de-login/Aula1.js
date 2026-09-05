
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView
} from 'react-native';

import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';

const Aula1 = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <ScrollView>

          <View>

            {/* SEÇÃO 1 - CABEÇALHO */}

            <View>
              <Text>APP</Text>
              <Text>Bem-Vindo!</Text>
              <Text>Entre com seus dados para acessar o sistema</Text>
            </View>

            {/* SEÇÃO 2 - DADOS DE ACESSO */}

            <View>

              <Text>E-mail</Text>

              <TextInput
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
              />

              <Text>Senha</Text>

              <TextInput
                placeholder="Digite sua senha"
                secureTextEntry={true}
              />

            </View>

            {/* SEÇÃO 3 - OPÇÕES */}

            <View>

              <Text>Lembrar-me</Text>

              <Pressable>
                <Text>Esqueci a senha</Text>
              </Pressable>

            </View>

            {/* SEÇÃO 4 - ENTRAR */}

            <View>
              <Button title="ENTRAR" />
            </View>

            {/* SEÇÃO 5 */}

            <View>
            </View>

          </View>

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Aula1;