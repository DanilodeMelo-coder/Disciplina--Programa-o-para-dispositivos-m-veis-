
import {View, Text} from 'react-native'


//propriedades



// function mostraAlunos(nome){

//   return(nome)
// }


// const Mostraralunos=(props)=>{

//   const {id,nome} = props;
//   return(<View><Text>{id} {nome} </Text></View>)
// }

// const App=()=>{
//   //const texto = "Danilo"
//   return( <Mostraralunos id={1} nome={"Danilo"}/> )
// }

// export default App;

const Alunos = {id: 1, nome: " Danilo", curso: " ADS ", turma:['3B ', '3A']}

const Mostraralunos=(props)=>{


  return(<View>
          <Text>
            {props.aluno.id} 
            {props.aluno.nome}  
            {props.aluno.curso}
            {props.aluno.turma[0]}
            {props.aluno.turma[1]}
          </Text>
        </View>)
}

const App=()=>{
  //const texto = "Danilo"
  return( <Mostraralunos aluno = {Alunos}/> )
}

export default App;