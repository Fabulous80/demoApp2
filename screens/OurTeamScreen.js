import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Marcus Lim",
    title: "Founder",
    company: "Running Shots",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Tekko Koh",
    title: "Co-Founder",
    company: "Running Shots",
    pic: "https://randomuser.me/portraits/men/4.jpg",
  },
  {
    name: "Sotong Mah",
    title: "The Trigger Happy Man",
    company: "Running Shots",
    pic: "https://randomuser.me/portraits/men/3.jpg",
  },
  
];



 function ContactContactScreen() {
  return (
    <Container>
      <Content>
        <List>
          {contactsData.map((item) => {
            return (
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: item.pic }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>
                    {item.title}, {item.company}
                  </Text>
                </Body>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Container>
  );

        }
const Stack = createStackNavigator();

export default function OurTeamScreen() {
 return (
   <Stack.Navigator>
     <Stack.Screen name="Our Team" component={ContactContactScreen} />
   </Stack.Navigator>
 );

}
