import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Data = () => {
  const {value} = useSelector((state: any) => state.counter);
  console.log('value', value);
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text style={{color: 'blue'}}>{value}</Text>
    </View>
  );
};

export default Data;
