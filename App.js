import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  

  const entrar = () => {
    console.log(email)
    console.log(password)
  } 

  return (
    <View style={styles.container}>

     
      <Image
        source={ require('./assets/ijob_branca.png') }
        containerStyle={styles.item}
      />
      <Input
        placeholder="E-mail"
        rightIcon={{ type: 'font-awesome', name: 'envelope' }}
        style={styles}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        rightIcon={{ type: 'font-awesome', name: 'lock' }}
        style={styles}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
              title="Login"
              buttonStyle={{
                backgroundColor: '#1e53d9',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
              onPass={() => entrar()}
            />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e53d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    aspectRatio: 1.0,
    resizeMode: "cover",
    width: 140,
    height: 120,
  },
  
});