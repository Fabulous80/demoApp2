import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Accordion, Card, CardItem, Body } from "native-base";

const dataArray = [
  {
    title: "About Us",
    content: "A page by sports photography enthusiasts volunteers for running events. Find your running shots at events and tag yourself or your friends.",
  },
  {
    title: "Who is this by?",
    content:
      "We are a community of runners who are also into photography. ",
  },
  {
    title: "Why do you do this?",
    content: "We believe this will motivate and encourage them to continue their pursue of running. This is our way of contributing back to the running community.",
  },
 ];
 


function HomeHomeScreen() {
 return (
   <View style={styles.container}>
     
     <Text style={styles.titleText}>Running Shots</Text>
     <Card style={styles.card}>
       <CardItem>
         <Body>
           <Text style={styles.cardTitle}>Welcome</Text>
           <Text>
             Thanks for downloading our app! Here, you can find the photos taken by our volunteers for races in Singapore. You can also find the latest upcoming Running Events as well.
           </Text>
         </Body>
       </CardItem>
       <CardItem cardBody>
         <Image
           source={{
             uri:
               "https://scontent.fsin5-1.fna.fbcdn.net/v/t1.0-9/6986_668009086580700_608931365_n.png?_nc_cat=109&ccb=2&_nc_sid=dd9801&_nc_ohc=7UrdWff_YKUAX-hQF6x&_nc_ht=scontent.fsin5-1.fna&oh=b12b1e614a3fa9a3cbaa1df5443709e8&oe=5FF10044",
           }}
           style={{ height: 200, width: null, flex: 1 }}
         />
       </CardItem>
     </Card>

     <Accordion
          style={styles.accordion}
          dataArray={dataArray}
          expanded={0}
        />

   </View>
 );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
 return (
   <Stack.Navigator>
     <Stack.Screen name="Welcome" component={HomeHomeScreen} />
   </Stack.Navigator>
 );
}

const styles = StyleSheet.create({
 container: {
  
   padding: 10,
 },
 titleText: {
   fontSize: 30,
   fontWeight: "bold",
   textAlign: "center",
   marginBottom: 0,
 },
 cardTitle: {
   fontSize: 24,
   fontWeight: "bold",
   marginBottom: 12,
 },
});
