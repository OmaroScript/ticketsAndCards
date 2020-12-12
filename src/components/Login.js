import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
import Http from '../libs/http';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { userName: '', password: '', isLoading: true, dataUser: [] } 
  }

  getDataUser = async () => {
    dataUser = await Http.instance.get('http://localhost:3000/user/');

    console.log(dataUser);
  //   return fetch('http://localhost:3000/user')
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({ dataUser: json });
  //     })
  //     .catch((error) => console.error(error))
  //     .finally(() => {
  //       this.setState({ isLoading: false })
  //     });
  }

  render() {
    const { dataUser, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login!</Text>
        <TextInput 
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={(userName)=>this.setState({userName})}
          value={this.state.userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={(password)=>this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style= {styles.btnEnter}
          onPress={this._signin}
        >
          <Text style={styles.btnEnterText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _signin = async () => {
    if(this.state.dataUser.id === this.state.userName && this.state.dataUser.id === this.state.password) {
      //alert('Logged');
      this.props.navigation.navigate('Menu');
    } else {
      alert('El usuario o la contraseña ingresada es incorrecta');
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    input: {
      margin: 15,
      height: 40,
      padding: 5,
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#428AF8'
    },
    btnEnter: {
      justifyContent: "center",
      flexDirection: 'row',
      backgroundColor: '#428AF8',
      alignItems: "center",
      marginLeft: 15,
      marginRight: 15,
      padding: 10
    },
    btnEnterText: {
      color: '#ffffff',
      fontWeight: '700'
    }
});

export default Login;