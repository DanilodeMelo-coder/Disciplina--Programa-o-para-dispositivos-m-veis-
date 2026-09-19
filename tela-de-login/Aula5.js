import { View, Text, Button } from 'react-native';
import {useState} from "react" //criando o conceito de hook

// async function buscarDados(setTitle) {
//   const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');

//   const dados = await resposta.json();

//   setTitle(dados[4].title);
//   //console.log(dados[0]);
// }

async function buscarDados(setTitle) {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(dados => {setTitle(dados[0].title)})
    .catch(erro => {console.log("Erro", erro)})
}


const App = () => {
  // console.log(resposta instanceof Promise); //True

  // console.log(String(resposta)); // [object promise]

  const[title, setTitle] = useState('');
  return (
    <View>
      <Button title= "Buscar Dados" onPress={() => buscarDados(setTitle)} />
      <Text> {title} </Text> 
     </View>
  )
};

export default App;
