import * as  React from "react" ;
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Modal,ScrollView,KeyboardAvoidingView} from "react-native";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../Components/MyHeader";

export default class ItemRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
            bookName:"",
            reasonToRequest:"",
            userId:firebase.auth().currentUser.email
        }
    }
    createUniqueId(){
        return (Math.random().toString(36).substring(7))
    }
    addRequest=(bookName,reasonToRequest)=>{
        var requestId=this.createUniqueId()
        db.collection("requestedBooks").add({
            userId:this.state.userId,
            bookName:bookName,
            reasonToRequest:reasonToRequest,
            requestId:requestId
        })
        this.setState({
            bookName:"",
            reasonToRequest:""
        })
        return Alert.alert("Request made")
    }
    render(){
        return(
            <View style={styles.container}>
                <MyHeader/>
                <Text>Request Books from others</Text>
            <KeyboardAvoidingView>
                <TextInput placeholder="Book name" style={styles.inputBox} value={this.state.bookName} onChangeText={(text)=>{
                    this.setState({bookName:text})
                }}/>

                <TextInput placeholder="Reason to request" style={[styles.inputBox,{height:100}]} value={this.state.bookName} onChangeText={(text)=>{
                    this.setState({bookName:text})
                }} multiline/>
                
                <TouchableOpacity style={styles.button} onPress={()=>{
                    this.addRequest(this.state.bookName,this.state.reasonToRequest);
                }}>
                    <Text style={styles.text}>Request Book</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles=StyleSheet.create(
    {
       container:{
           alignItems:"center",
           justifyContent:"center",
           marginTop:100,
       },
       text:{
           fontSize:20,
           fontWeight:"bold",
           
       },
       inputBox:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        padding:10,
        borderWidth:1,
        width:"80%",
        height:100,
       },
       button:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        padding:10,
        borderWidth:1,
        width:"50%",
        height:100,
       }

    }
)