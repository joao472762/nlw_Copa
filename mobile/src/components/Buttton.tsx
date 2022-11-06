import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";
import React from "react";

interface ButtonProps extends IButtonProps {
    title: string,
    type ?: 'PRIMARY' | 'SECUNDARY'

}

export function Button({title,type='PRIMARY', ...rest}: ButtonProps){
    return(
        <ButtonNativeBase
            width={'full'}
            height='14'
            fontSize={'md'}
            textTransform='upperCase'
            bg={type === 'PRIMARY' ? 'yellow.500' : 'red.500'}
            _pressed={{
                bg: type=== 'PRIMARY' ? 'yellow.600' : 'red.600'
            }}
            _loading= {{
                _spinner:{
                    color: 'black'
                }
            }}
            {...rest}
            >
            <Text
                fontSize={'sm'}
                fontFamily={'heading'}
                textTransform= 'uppercase'
                color = {type === 'PRIMARY' ? 'black': 'white'}
            
            >{title}</Text>
        </ButtonNativeBase>
    )
}