import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.ticketBox}
                //onPress={this._signin}
                >
                    <Text style={styles.ticketText}>Tickets</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cardBox}
                //onPress={this._signin}
                >
                    <Text style={styles.cardText}>Tarjetas</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
      },
    ticketBox: {
        justifyContent: "center",
        flexDirection: 'row',
        backgroundColor: '#428AF8',
        alignItems: "center",
        margin: 50,
        padding: 50
    },
    ticketText: {
        color: '#ffffff',
        fontWeight: '700'
    },
    cardBox: {
        justifyContent: "center",
        flexDirection: 'row',
        backgroundColor: '#428AF8',
        alignItems: "center",
        margin: 50,
        padding: 50
    },
    cardText: {
        color: '#ffffff',
        fontWeight: '700'
    }
});

export default Menu;