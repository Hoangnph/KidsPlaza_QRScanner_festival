import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../../styles';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';
import QRReader from '../../components/QRReader';

const HomeScreen = () => {

    const navigation = useNavigation()

    const handleLogout = () => {
        auth
            .signOut()
            .then(() =>{
                navigation.replace("Login")
            })
            .catch(err => alert(err.message));
    }

  return (
    <View style={{...styles.container, flexDirection:"column", justifyContent:"flex-start"}}>
      <View style={{
        width:'100%',
        height: 50,
        position: "absolute",
        flexDirection:'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 2,
        zIndex: 1
      }}>
        <Text 
          style={{
            alignSelf: 'center',
            marginLeft: 50,
          }}
        >
          {auth.currentUser?.email} </Text>
        <TouchableOpacity 
          style={{
              ...styles.btn,
              width: '30%',
          }}
          onPress={handleLogout}
        >
        <Text style={{...styles.btnText, fontSize: 12}}>Logout</Text>
      </TouchableOpacity>
      </View>
        
      <View style={styles.rnholeView}>
        <QRReader />
      </View>
    </View>
  )
}

export default HomeScreen