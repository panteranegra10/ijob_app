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

      <Text h3>Tela de Login</Text>
      <Image
        source={ require('./assets/IJOB.png') }
        containerStyle={styles.item}
      />
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        style={styles}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        style={styles}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        onPress={() => entrar()}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    aspectRatio: 2.8,
    resizeMode: "cover",
    width: 120,
    height: 100,
  },
  
});