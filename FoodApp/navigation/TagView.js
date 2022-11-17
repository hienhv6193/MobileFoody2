import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeCustomer from '../views/Customer/HomeCustomer'
import Login from '../views/Customer/Login'
import Category from '../views/Customer/Category';
import CartScreen from '../views/Customer/CartScreen';
import Payment from '../views/Customer/Payment';
import NotifyScreen from '../views/Customer/NotifyScreen'
import ChatScreen from '../views/Customer/ChatScreen'
import Profile from '../views/Customer/Profile';
import Food from '../views/Customer/Food'
import DetailsProfile from '../views/Customer/DetailsProfile';
import LikeScreen from '../views/Customer/LikeScreen';
import Introduce from '../views/Customer/Introduce';
import Register from '../views/Customer/Register';
import ShoppingCart from '../views/Customer/ShoppingCart';

const navOptionHandler = () => ({
    headerShown: false
})

function HomeDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator initialRouteName="HomeCustomer"
            screenOptions={{
                drawerStyle: { backgroundColor: '#9c27b0' },
                drawerLabelStyle: { color: '#FFF' },
                headerStyle: { backgroundColor: '#9c27b0' },
                headerTintColor: '#FFF',
                drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FFF' },
                drawerActiveBackgroundColor: '#6a0080'
            }}
        >
            <Drawer.Screen name="Home" component={HomeTab} optiosn={{
                title: "Trang chủ",
                drawerIcon: ({ size }) => <Ionicons name='home-outline' color='#FFF' size={size} />
            }} />
            <Drawer.Screen name="Login" component={Login} optiosn={{
                title: "Đăng nhập",
                drawerIcon: ({ size }) => <Ionicons name='introduce' color='#FFF' size={size} />
            }} />
            <Drawer.Screen name="Register" component={Register} optiosn={{
                title: "Đăng ký",
                drawerIcon: ({ size }) => <Ionicons name='introduce' color='#FFF' size={size} />
            }} />
            <Drawer.Screen name="Introduce" component={Introduce} optiosn={{
                title: "Giới thiệu",
                drawerIcon: ({ size }) => <Ionicons name='introduce' color='#FFF' size={size} />
            }} />
        </Drawer.Navigator>
    )
}

function HomeTab() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',

                elevation: 0,
                backgroundColor: '#eeeeee',
                height: 50,

                opacity: 0.8,
                paddingBottom: 20,
                ...styles.shadow
            }
        }} >
            <Tab.Screen name="HomeCustomer" component={HomeCustomer} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='home-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="ShoppingCart" component={ShoppingCart} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='cart-outline' size={20} color='#000' style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Notify" component={NotifyScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Icon name='bell' size={20} style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={styles.iconView}>
                        <Ionicons name='person-outline' size={20} style={{ color: focused ? '#1976d2' : '#000' }} />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default function TagView() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeCustomer" component={HomeDrawer} options={navOptionHandler} />
            <Stack.Screen name="Category" component={Category} options={navOptionHandler} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={navOptionHandler} />
            <Stack.Screen name="NotifyScreen" component={NotifyScreen} options={navOptionHandler} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={navOptionHandler} />
            <Stack.Screen name="Profile" component={Profile} options={navOptionHandler} />
            <Stack.Screen name="Food" component={Food} options={navOptionHandler} />
            <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={navOptionHandler} />
            <Stack.Screen name="LikeScreen" component={LikeScreen} options={navOptionHandler} />
            <Stack.Screen name="Introduce" component={Introduce} options={navOptionHandler} />
            <Stack.Screen name="Payment" component={Payment} options={navOptionHandler} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    iconView: {
        alignContent: 'center',
        justifyContent: 'center',
        top: 10,
    },
    btn: {
        backgroundColor: '#1976d2',
        width: 55,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55 / 2,
        top: -15,
    },
    notiBtn: {
        color: '#fff'
    }
});