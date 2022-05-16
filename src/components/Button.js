import React from 'react'

import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        color: '#ffffff'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
    azul: {
        backgroundColor: '#302682'
    },
    amarelo: {
        backgroundColor: '#FFFF00',
        color: '#000'
    },
    verde: {
        backgroundColor: '#009641'
    }
})

export default props => {
    const stylesButton = [styles.button]
    if(props.double) stylesButton.push(styles.buttonDouble)
    if(props.triple) stylesButton.push(styles.buttonTriple)
    if(props.verde) stylesButton.push(styles.verde)
    if(props.amarelo) stylesButton.push(styles.amarelo)
    if(props.azul) stylesButton.push(styles.azul)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

