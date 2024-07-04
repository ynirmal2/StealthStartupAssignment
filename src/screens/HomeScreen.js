import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FeedScreen, ExploreScreen, FavoritesScreen, FingerPrint, TakeOff, WaterDrop, Health, History, CardMembership } from './TabScreens'; // Import your screen components
import Icon from 'react-native-vector-icons/Ionicons'; // Adjust icon library as per your preference
import { Image, StatusBar, Text, View } from 'react-native';
import CardScreen from './CardScreen';
import MainScreen from './MainScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {

  const ImageComponent = (imageUrl, focused) => <Image
    source={imageUrl}
    tintColor={focused ? 'yellow' : '#fffff'}
    style={{
      height: 30,
      width: 30,

    }}
    resizeMode='contain'
  />
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      {Platform.OS === 'android' && <StatusBar barStyle="light-content" backgroundColor="#000000" />}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
      }}>
        <Image
          source={require('../assets/images/icon/Menu.png')}

          style={{
            height: 80,
            width: 80
          }}
          resizeMode='contain'
        />
        <View style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
          borderRadius: 5,
          marginVertical: 20,
          backgroundColor: '#252525'
        }}>
          <Image
            source={require('../assets/images/icon/Tips.png')}

            style={{
              height: 20,
              width: 20,

            }}
            resizeMode='contain'
          />
          <Text style={{
            color: '#fff',
            paddingLeft: 5,
            fontFamily: 'Roboto',
          }}>
            Tips
          </Text>

        </View>



      </View>

      <View style={{
        padding: 10
      }}>
        <Text style={{
          color: '#fff',
          paddingLeft: 5,
          fontFamily: 'Helvetica',
          fontSize: 36,
          fontWeight: 'bold'
        }}>
          {"All your credit card"}
        </Text>
        <Text style={{
          color: '#fff',
          paddingLeft: 5,
          fontFamily: 'Helvetica',
          fontSize: 16,
          fontWeight: '600'
        }}>
          {"Find all your credit card here"}
        </Text>
      </View>


      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            showLabel: false, // Hide tab labels
            showIcon: true, // Show tab icons
            activeTintColor: '#6200ee', // Color of the icon when tab is active
            inactiveTintColor: '#ffff', // Color of the icon when tab is inactive
            style: { backgroundColor: '#252525' }, // Background color of the tab bar
            indicatorStyle: { backgroundColor: '#6200ee' }, // Color of the indicator line at the bottom
            iconStyle: { width: 30, height: 30 },
            indicatorStyle: { height: 0 }, // Remove bottom line indicator
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

              let imageIcon;

              if (route.name === 'FingerPrint') {
                imageIcon = ImageComponent(require('../assets/images/icon/fingerprint.png'), focused)
              } else if (route.name === 'TakeOff') {
                imageIcon =
                  ImageComponent(require('../assets/images/icon/flight_takeoff.png'), focused)

              } else if (route.name === 'WaterDrop') {

                imageIcon =
                  ImageComponent(require('../assets/images/icon/water_drop.png'), focused)

              } else if (route.name === 'Health') {
                imageIcon =
                  ImageComponent(require('../assets/images/icon/health.png'), focused)
              } else if (route.name === 'History') {

                imageIcon =
                  ImageComponent(require('../assets/images/icon/history.png'), focused)
              } else if (route.name === 'CardMembership') {
                imageIcon =
                  ImageComponent(require('../assets/images/icon/card_membership.png'),focused)
              }


              // You can return any component that you like here!
              return imageIcon;
            },
          })}
        >
          <Tab.Screen name="FingerPrint" component={MainScreen} />
          <Tab.Screen name="TakeOff" component={TakeOff} />
          <Tab.Screen name="WaterDrop" component={WaterDrop} />
          <Tab.Screen name="Health" component={Health} />
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="CardMembership" component={CardMembership} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default HomeScreen;
