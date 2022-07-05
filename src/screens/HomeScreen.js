import React from "react";
import { Button,Text,StyleSheet,View } from "react-native";

const HomeScreen = ({navigation}) => {
    return(<View>
        <Text style={styles.textStyle}>My Portfolio</Text>
        <Button
            onPress={()=>navigation.navigation('Project1')}
            title="Go to Project1"
        />
        <Button
            onPress={()=>navigation.navigation('Project2')}
            title="Go to Project2"
        />
        <Button
            onPress={()=>navigation.navigation('Project3')}
            title="Go to Project3"
        />
        <Button
            onPress={()=>navigation.navigation('Project4')}
            title="Go to Project4"
        />
        <Button
            onPress={()=>navigation.navigation('Project5')}
            title="Go to Project5"
        />
        <Button
            onPress={()=>navigation.navigation('Project6')}
            title="Go to Project6"
        />
    </View>
    );
}

const styles=StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

export default HomeScreen;