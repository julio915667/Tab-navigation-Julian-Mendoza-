import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

import { products } from '../../constants/data/productos';
import ProductsItem from '../../components/product-item';


const Products = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate("Productos", {
      categoryId: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderItems = ({ item }) => {
    return (
      <ProductsItem item={item} onSelected={onSelected} />
    );
  };

  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView >
      <FlatList
        data={products}
        renderItem={renderItems}
        keyExtractor={keyExtractor}
        
      />
    </SafeAreaView>
  );
};

export default Products;
