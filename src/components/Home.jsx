//import liraries
import React, { Component, useState } from 'react';
// import { Icon } from "@rneui/themed";
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { Data } from '../Data/Data';
import {Drinks} from '../Data/Drinks';
import {Meal} from '../Data/Meal';


const Home = () => {

  const [itemCount, setItemCount] = React.useState(0);

   console.log(itemCount);

    const addToCart = () =>{

    setItemCount(itemCount +1)

    }


    return (
    <>
        <View style={styles.container}>
            <Image  />
{/*             <Icon name='rowing' />
            <Icon name='g-translate' color='#00aced' /> */}
            <Text style = {styles.head} > Food Categories </Text>
           <View style = {styles.imageNav}>

            <TouchableOpacity style={styles.button}  >
                <Text style= {styles.textCat}>Meals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} /*onPress={}*/ >
                <Text style= {styles.textCat}>Drinks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}  >
                <Text style= {styles.textCat}>Deserts</Text>
            </TouchableOpacity>

            </View>


            <View style={styles.subContainer}>

                  {Data.map((data, key) => {
                     return <View style={styles.food} key={key}>

                        <Text style={styles.textJS}>{data.title}</Text>
                        <Image source={data.img} style = {styles.imageJS} key={data.id}/>
                        <Text style={styles.textJS}>{data.price}</Text>
                        <Button
                          onPress={ addToCart }
                          title="Add To Cart"
                          color="#cccccc"
                          accessibilityLabel="Learn more about this purple button"/>
                   </View>;
                   })}

            </View>


        </View>

       </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    gates: {
        width: '32vw',
        height: '10vh',
        marginLeft: '1vw',
        borderRadius:'10%',
        overflow: 'hidden'

        },
    gates1: {
        width: '32vw',
        height: '10vh',
        marginLeft: '1vw',
        borderRadius:'10%',
        overflow: 'hidden'

        },

    head: {

      marginTop: '2vh',
      height: '5vh',
      width: '100vw',
      textAlign: 'center',
      backgroundColor: 'yellow',

    },
    imageNav: {

       height: '15vh',
       width: '100vw',
//        backgroundColor: 'grey',
       flexDirection: 'row'

    },
    textCat:{
       textAlign: 'center',
       justifyContent: 'center',
        marginTop: '.8vh'
    },

    subContainer:{

    height: '60vh',
    width: '100vw',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
//     borderWidth: 1,
    marginTop: '-9vh',
    marginBottom: '10vh',
    flexWrap: 'wrap'

    },
    food:{

    width: '32vw',
    marginLeft: '1vw',
    height: '21vh',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey',

    },

    textJS:{

     color:'white',
     flexGrow:1,
     color: 'black'

    },

    imageJS:{

    height: '12vh',
    width: '30vw'

    },
    button:{

    height: '4vh',
    width: '33vw',
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: '.1vw',
    backgroundColor: '#cccccc'


    }

});

export default Home;
