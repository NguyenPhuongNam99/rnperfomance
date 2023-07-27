import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Data = () => {
  const {value} = useSelector((state: any) => state.counter);
  const {data} = useSelector((state: any) => state.example);
  console.log('value', value, data);
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Text style={{color: 'blue'}}>{value}</Text>
    </View>
  );
};

export default Data;
