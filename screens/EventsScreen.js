import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, CardItem, Body, Button } from "native-base";

function EventsHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Latest Races</Text>

      <Card style={styles.card} >
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>
              Standard Chartered Singapore Marathon 2020
            </Text>
            <Text>05 Dec 2020 - 06 Dec 2020</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://scontent.fsin5-1.fna.fbcdn.net/v/t1.0-9/118211062_3250201318360087_4064340439823001118_n.jpg?_nc_cat=106&ccb=2&_nc_sid=85a577&_nc_ohc=BrPwP4-MvGQAX9wJ6LW&_nc_ht=scontent.fsin5-1.fna&oh=5f8b0018709aa4c1221d89f688e051f6&oe=5FF0A112",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>

      <Button 
        style={{ alignSelf: "center" }}
        danger
        onPress={() => navigation.navigate("Events 2/3")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {" "}
          Events 2/3{" "}
        </Text>
      </Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Events 2/3</Text>

      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Run For Inclusion 2020</Text>
            <Text>13 Dec 2020</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "data:image/png;base64,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",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>

      <Button
        style={{ alignSelf: "center" }}
        danger
        align
        onPress={() => navigation.navigate("Events 3/3")}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {" "}
          Events 3/3{" "}
        </Text>
      </Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Events 3/3</Text>

      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>The Straits Times Virtual Run 2020</Text>
            <Text>17 Dec 2020</Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://www.straitstimesrun.com/op/wp-content/uploads/2020/08/strun2020-logo-v3-1.png",
            }}
            style={{ height: 200, width: null , flex: 1 }}
          />
        </CardItem>
      </Card>

      

      <Button
        style={{ alignSelf: "center" }}
        danger
        align
        onPress={() => navigation.popToTop()}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {" "}
          Back to top{" "}
        </Text>
      </Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events Home" component={EventsHomeScreen} />
      <Stack.Screen name="Events 2/3" component={EventsSecondScreen} />
      <Stack.Screen name="Events 3/3" component={EventsThirdScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 12,
  },
  card:{
    marginTop:20,
    marginBottom:50
  }
});
