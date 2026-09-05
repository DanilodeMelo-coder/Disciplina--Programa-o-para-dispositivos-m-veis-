import { View, Text, StyleSheet, FlatList } from 'react-native';


const DATA=[

  {id: 1, nome:"Roger"},
  {id: 2, nome:"Rafa meratriz gay"}
]

const Aula2 = () => {
  return (
    <View>

      <View style={styles.area}>
        <Text style={styles.text}>
          OLA
        </Text>
      </View>

      <View>
        <Text>ARRAYS</Text>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Text>{item.id} - {item.nome}</Text>}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    width: 150,
    height: 35,
    backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'grey',
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 20,
  },

  text: {
    textAlign: 'center',
    color: 'red',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 10,
  },
});

export default Aula2;