import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../../styles';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/core';

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
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <TouchableOpacity 
        style={{
            ...styles.btn,
            width: '60%',
            marginTop: 40,
        }}
        onPress={handleLogout}
    >
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen