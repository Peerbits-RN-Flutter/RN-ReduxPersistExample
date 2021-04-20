import React from 'react';

import { Button as NativeButton, Body, Text } from 'native-base';
import { Colors, FontName, FontSize } from '../../utils';
import ResponsivePixels from '../../utils/ResponsivePixels';



export default Button = (props) => {
    const { style, onPress, disabled, bordered, disableAllCaps } = props
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.Gray500 : Colors.btnBgColor,
        height: ResponsivePixels.size48,
        borderColor: bordered ? Colors.btnBgColor : undefined,
        borderRadius: bordered ?  ResponsivePixels.size4 : ResponsivePixels.size4,
    }
    const textStyle = {
        color: bordered ? Colors.btnBgColor : Colors.Defaultwhite,
        fontFamily: FontName.medium,
        fontSize: FontSize.fontSize17,
    }

    return (
        <NativeButton bordered={bordered} disabled={disabled} onPress={onPress} style={{ ...button, ...style, ...{ elevation: 0 } }}>
            <Body>
                <Text style={textStyle}>{disableAllCaps ? props.title : props.title}</Text>
            </Body>
        </NativeButton>
    );
}