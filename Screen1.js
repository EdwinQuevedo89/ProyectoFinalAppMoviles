import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, Alert } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const users = [

    { id: 1, username: 'admin', password: '123456' },
  ];

  const handleLogin = () => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      // Si las credenciales son válidas, navegar a Screen2
      navigation.navigate('Screen2');
    } else {
      // Si las credenciales son inválidas, mostrar un mensaje de error
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsu4MtMOV2gAMRjuC_YE9-JQAMw9L7mr6Qyg&usqp=CAU' }}
        style={styles.image}
      />

      <Text style={styles.title}>¡BIENVENIDO A TU APP DE COMPRAS!</Text>
    
      <TextInput
        style={styles.input}
        placeholder="User"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="INGRESAR"
        onPress={handleLogin}
        color="#4d47ff"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f2ebdd',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2d1670',
    fontFamily: 'Roboto',
  },
  image: {
    height: 200,
    width: 200,
    marginVertical: 50,
    borderRadius: 50,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    color: '#229743',

  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#000080',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default Screen1;