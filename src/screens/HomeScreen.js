import React from "react";
import { ImageBackground,StyleSheet,View,Button } from "react-native";

const image = {uri:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png"};

const HomeScreen = ({navigation}) => {
    return(
        <ImageBackground source={image}>
    <View style={{justifyContent: "center", width: "100%", height: "100%"}}>
        <View style={styles.parentStyle}>
        
        <View style={styles.viewOneStyle}>
        <Button
            onPress={()=>navigation.navigate('Counter')}
            title="Go to Counter Screen"
            style={styles.buttonStyle}
        />
        <Button
            onPress={()=>navigation.navigate('Project2')}
            title="Go to Project2"
            style={styles.buttonStyle}
        />
        </View>
           
    </View>
    <View style={styles.parentStyle}>
        
        <View style={styles.viewOneStyle}>
        <Button
            onPress={()=>navigation.navigate('Project3')}
            title="Go to Project3"
            style={styles.buttonStyle}
        />
        <Button
            onPress={()=>navigation.navigate('Project4')}
            title="Go to Project4"
            style={styles.buttonStyle}
        />
        </View>
           
    </View>
    <View style={styles.parentStyle}>
        
        <View style={styles.viewOneStyle}>
        <Button
            onPress={()=>navigation.navigate('Project5')}
            title="Go to Project5"
            style={styles.buttonStyle}
        />
        <Button
            onPress={()=>navigation.navigate('Project6')}
            title="Go to Project6"
            style={styles.buttonStyle}
        />
        </View>
           
    </View>
    <View style={styles.parentStyle}>
        
        <View style={styles.viewOneStyle}>
        <Button
            onPress={()=>navigation.navigate('Project7')}
            title="Go to Project7"
            style={styles.buttonStyle}
        />
        <Button
            onPress={()=>navigation.navigate('Project8')}
            title="Go to Project8"
            style={styles.buttonStyle}
        />
        </View>
           
    </View>
    </View>
    </ImageBackground> 
    );
}

const styles=StyleSheet.create({
    parentStyle:{
        height:100,
        flexDirection:'row',
        marginBottom: 10
    },
    viewOneStyle:{
        flexDirection:'row',
        alignSelf:'center',
        flex:1,
        justifyContent:'space-around',
    },
    textStyle:{
        fontSize:30,
        justifyContent:"center"
    },
    buttonStyle:{
        height:80,
        width:50,
        position:"absolute",
        backgroundColor:'gray',
        zIndex:999
    }
});

export default HomeScreen;