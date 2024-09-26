import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight,deviceWidth } from './Dimensions';
import {API_KEY} from './Constants';
import { useDispatch, useSelector } from 'react-redux';
import { list } from './redux/actions';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppDispatch,useAppSelector } from './redux/hooks';

interface DetailParamList {
    DETAILS: {
      name: string; // Define the specific parameter for the 'DETAILS' route
    };
    [key: string]: any; // Index signature to satisfy ParamListBase constraint
  }
  
  type DetailProp = StackScreenProps<DetailParamList, 'DETAILS'>;
const Details:React.FC<DetailProp>=(props) =>{
  const { name } = props.route.params; 
  const [data,setData] = useState()
  const dispatch=useAppDispatch()
  const success=useAppSelector((state:any)=> state.list.data);
  const error=useAppSelector((state:any)=> state.list.error);
  const req= {
    'name':name,
    'apikey':API_KEY
  }

  useEffect(() => {
    
    getList(req)
   
  }, []); 

  const getList=async(req:any)=>{
    const response= await dispatch(list(req))
    //setData(response)
  }
  return (
    <View>
    <Image
        source={require('../assets/images/image2.jpg')}
        style={{
            height: deviceHeight,
            width: deviceWidth,
            opacity: 0.6,
            backgroundColor: 'black',
        }}
    />
    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
        {error ? (
            <Text style={{ color: 'red' }}>{error}</Text> 
        ) : success ? (
            <>
                <Image source={require('../assets/images/weather.png')} style={{height:100,width:100}}/>
                <Text style={{ color: 'white', fontSize: 40 }}>
                    {success.name} 
                </Text>
                <Text style={{ color: 'white',marginTop:60}}>
                    Temperature: {(success.main.temp - 273.15).toFixed(2)}°C 
                </Text>
                <Text style={{ color: 'white' }}>
                    Weather: {success.weather[0].main} 
                </Text>
                <Text style={{ color: 'white' }}>
                    Description: {success.weather[0].description} 
                </Text>
            </>
        ) : (
            <Text style={{ color: 'white' }}>Loading...</Text>
        )}
    </View>
</View>
  )
}
export default Details;