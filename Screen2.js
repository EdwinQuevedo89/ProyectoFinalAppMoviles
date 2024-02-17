import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

const products = [
  { id: 1, name: 'Funda de arróz', price: 0.65, pathImage:'https://i0.wp.com/www.distribuidorarcs.com/wp-content/uploads/2023/04/12.jpg?fit=1080%2C1080&ssl=1'},
  { id: 2, name: 'Funda de azucar', price: 1.20, pathImage:'https://ianser.ec/718-large_default/azucar-blanca.jpg'},
  { id: 3, name: 'Funda de papas', price: 2.50, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/65700_G.jpg'},
  { id: 4, name: 'Funda de fideos', price: 1.00, pathImage:'https://almacenescorsa.com/wp-content/uploads/2021/07/Fideo-Lazo-Amancay-400g.jpg'},
  { id: 5, name: 'Funda de sal', price: 0.80, pathImage:'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg'}
];

const Screen2 = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price;
    });
    setTotalPrice(total.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Productos a elegir:</Text>
      {products.map(product => (
        <View key={product.id}>
          <Text style={styles.name}>{product.name}</Text>
          <Image
            source={{ uri: product.pathImage }}
            style={styles.image}
          />
          <Text style={styles.price}>Precio: ${product.price.toFixed(2)}</Text>
          <Text>-----------------------------------</Text>
        </View>
      ))}
      <Text style={styles.total}>Total a pagar: ${totalPrice}</Text>
      <Text></Text>
      <Button title="Valor Total" onPress={calculateTotalPrice} color="#4d47ff" />
    </ScrollView>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAD2',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});


