import React from 'react';
import {View,Image,Text,Button,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';



export default class Login extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"#FFF",
                height:"100%"
            }}>
                <Image
                source={require('../images/homeimage.jpeg')}
                style={{
                    width:"100%",
                    height:"40%"
                }}
                />

                    <View style={{marginLeft:20,flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:10,position:"relative"}}>
                            
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Home')}
                        >

                            <Image
                                source={require('../images/2.png')}
                                style={{height:25,width:20,}}
                            />

                        </TouchableOpacity>

                        <Text style={{
                        fontSize:30,
                        fontFamily:"SemiBold",
                        alignSelf:"center",
                    }}>Se connecter</Text>

                    </View>

            <Text style={{
                fontFamily:"SemiBold",
                marginHorizontal:55,
                textAlign:"center",
                opacity:0.4
            }}>
                Veuillez vous connecter
            </Text>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:30,
                paddingHorizontal:10,
                borderColor:'#00716F',
                borderRadius:23,
                paddingVertical:2
            }}>
                <Icon
                name="user"
                color="#00716F"
                size={24}
                />

                <TextInput
                    style={{
                        paddingHorizontal:10,
                        width:"90%"
                    }}
                    placeholder="Nom d'utilisateur"
                />
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:10,
                paddingHorizontal:10,
                borderColor:'#00716F',
                borderRadius:23,
                paddingVertical:2
            }}>
                <Icon
                name="lock"
                color="#00716F"
                size={24}
                />

                <TextInput
                    style={{
                        paddingHorizontal:10,
                        width:"90%"
                    }}
                    placeholder="Mot de passe"

                />
            </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:20,
                    backgroundColor:"#00716F",
                    paddingVertical:8,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:"white"
                    }}
                    onPress={() => this.props.navigation.navigate('Register')}
                    >
                        S'inscrire
                    </Text>

                </View>

                <View style={{
                flexDirection:"column",
                alignItems:"center",
                marginHorizontal:120,
                borderWidth:2,
                marginTop:20,
                justifyContent:"center",
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
                <FontAwesome.Button name="google" backgroundColor="white" color="#00716F" style={{
                borderColor:"#00716F",
                borderRadius:23,

            }}
                >
                    Google
                </FontAwesome.Button>
                
                
                </View>

                <View style={{
                flexDirection:"column",
                alignItems:"center",
                marginHorizontal:120,
                borderWidth:2,
                marginTop:10,
                justifyContent:"center",
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2,
            }}>
                <FontAwesome.Button name="facebook" backgroundColor="white" color="#00716F" style={{
                borderColor:"#00716F",
                borderRadius:23,

            }}
                >
                    Facebook
                </FontAwesome.Button>
                
                
                </View>

            </View>
        )
    }
    
}