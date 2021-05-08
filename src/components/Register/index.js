import React from 'react';
import {View,Image,Text,Button,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'

export default class Register extends React.Component {
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
            <Text style={{
                fontSize:30,
                fontFamily:"SemiBold",
                alignSelf:"center",
                marginTop:20
            }}>S'inscrire</Text>

            <Text style={{
                fontFamily:"SemiBold",
                marginHorizontal:55,
                textAlign:"center",
                marginTop:5,
                opacity:0.4
            }}>
                Veuillez vous inscrire
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
                name="mail"
                color="#00716F"
                size={24}
                />

                <TextInput
                    style={{
                        paddingHorizontal:10,
                        width:"90%"
                    }}
                    placeholder="Adresse mail"
                />
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:20,
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
                marginTop:20,
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
                marginTop:30,
                backgroundColor:"#00716F",
                paddingVertical:8,
                borderRadius:23
            }}>
                <Text style={{
                    color:"white"
                }}
                onPress={() => this.props.navigation.navigate('Home')}
                >
                    Accueil
                </Text>
            </View>
            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:30,
                backgroundColor:"#00716F",
                paddingVertical:8,
                borderRadius:23
            }}>
                <Text style={{
                    color:"white"
                }}
                onPress={() => this.props.navigation.navigate('Login')}
                >
                    Se connecter
                </Text>
            </View>
            </View>
        )
    }
    
}