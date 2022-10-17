//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Data } from '../Data/Data';

const Home = () => {

    return (
    <>
        <View style={styles.container}>
            <Text style = {styles.head} > Food Categories </Text>
           <View style = {styles.imageNav}>
            <View>
                {/* Entering data for ,meals */}
                <Text style= {styles.textCat}>Meals</Text>
                <Image style={styles.gates} source={require('../../assets/meal.jpeg')} />
            </View>
            <View>
                {/* Entering data for drinks */}
                <Text style= {styles.textCat}>Drinks</Text>
                <Image style={styles.gates} source={require('../../assets/drinks.jpg')} />
            </View>
            <View>
                {/* Entering data for deserts */}
                <Text style= {styles.textCat}>Deserts</Text>
                <Image style={styles.gates1} source={require('../../assets/desert.jpg')} />
            </View>
            </View>
            <View numColumns={3} style={styles.subContainer}>

                  {Data.map((data, key) => {
                     return <View style={styles.food} key={key}>

{/*                      <Text style={styles.textJS}>{data.title}</Text> */}
                        <Text style={{ color:'white', borderRadius:20, paddingRight: 5, flexGrow:1}}>{data.title}</Text>

                     </View>;
                   })}

            </View>

{/*            <BottomNav/> */}

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
    backgroundColor: 'pink',
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
    backgroundColor:'green'



    }
});

export default Home;
