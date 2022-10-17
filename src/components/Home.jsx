//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Data } from '../Data/Data';
import {Drinks} from '../Data/Drinks';
import {Meal} from '../Data/Meal';


const Home = () => {


 const [ Page, setPage ] = useState(null);
//    const [count, setCount] = useState(0);

//         console.log(Data.img);
//         console.log(Drinks.img);
//         console.log(Meal.img);
        console.log(Page)

        const onPress = () =>{

          if(Page === "Meals"){
            console.log(Page)
          }else if(Page === "Drinks"){
            console.log(Page)
           }
           else{
           console.log(Page)
           }

        }


    return (
    <>
        <View style={styles.container}>
            <Text style = {styles.head} > Food Categories </Text>
           <View style = {styles.imageNav}>
            <TouchableOpacity style={styles.button} onPress={setPage('Meals')} >
            <View>
                {/* Entering data for ,meals */}
                <Text style= {styles.textCat}>Meals</Text>
                <Image style={styles.gates} source={require('../../assets/meal.jpeg')} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={setPage('Drinks')} >
            <View>
                {/* Entering data for drinks */}
                <Text style= {styles.textCat}>Drinks</Text>
                <Image style={styles.gates} source={require('../../assets/drinks.jpg')} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={setPage('Deserts')} >
            <View>
                {/* Entering data for deserts */}
                <Text style= {styles.textCat}>Deserts</Text>
                <Image style={styles.gates1} source={require('../../assets/desert.jpg')} />
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.subContainer}>

                  {Data.map((data, key) => {
                     return <View style={styles.food} key={key}>
                        <Text style={styles.textJS}>{data.title}</Text>
                        <Image source={data.img} style = {styles.imageJS} key={data.id}/>
                        <Text style={styles.textJS}>{data.price}</Text>
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
//         justifyContent: 'center',
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
//       backgroundColor: 'yellow',

    },
    imageNav: {

       height: '15vh',
       width: '100vw',
//        backgroundColor: 'grey',
       flexDirection: 'row'

    },
    textCat:{
       textAlign: 'center'
    },
    subContainer:{

    height: '60vh',
    width: '100vw',
//     backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    flexWrap: 'wrap'


    },
    food:{

    width: '32vw',
    marginLeft: '1vw',
    height: '20vh',
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

    }

});

export default Home;
