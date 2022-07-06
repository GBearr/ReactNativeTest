import React, {useReducer} from "react";
import { View,Text,Button } from "react-native";

const reducer = (state,action) => {
    switch(action.type) {
        case 'increment':
            return{...state,count: state.count+action.payload}
        case 'reset':
            return{...state,count: 0}
        default:
            return state;
    }



}

const CounterScreen=() =>{
    const[state,callMyReducer] = useReducer(reducer,{count:0})

    return (
        <View>
            <Button
                onPress={()=>{
                    callMyReducer({type:'increment',payload: 1})
                }}
                title= "Increase"
            />
            <Button
                onPress={()=>{
                    callMyReducer({type:'reset'})
                }}
                title= "Reset"
            />
            <Text>Current Count:{state.count}</Text>
        </View>
    );

}

export default CounterScreen;