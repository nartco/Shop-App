import React from 'react'
import { Text, StyleSheet} from 'react-native'

import Colors from "../constants/Colors";


export const TitleText = props => {
    return <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
}

export const DefaultText = props => {
    return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>   
}

export const DefaultBoldText = props => {
    return <Text style={{...styles.defaultBolt, ...props.style}}>{props.children}</Text>   
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'qualyBold',
        color: Colors.primary,
        fontSize: 18
    },
    default: {
        fontFamily: 'openSans',
        color: Colors.primary,
        fontSize: 15
    },
    defaultBolt: {
        fontFamily: 'openSansBold',
    }
})

