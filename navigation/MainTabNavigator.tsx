import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SystemColors } from "../constants/Colors";
import { PagePadding, PageRadius } from "../constants/Styles";
import Finer from "../containers/User/Finder";
import GymDetails from "../containers/User/GymDetails";
import History from "../containers/User/History";
import Profile from "../containers/User/Profile";
import GymProfile from "../containers/Gym/Profile";
import GymHistory from "../containers/Gym/History";
import RequestsAvailability from "../containers/User/RequestsAvailability";


export type FinderParamList = {
    Finder: undefined,
    GymDetails: undefined,
    RequestsAvailability: undefined
}

const Finder_Navigator = createStackNavigator<FinderParamList>();

interface Finder_Navigator_Prop {

}

const FinderStack: React.FC<Finder_Navigator_Prop> = () => (
    <Finder_Navigator.Navigator headerMode='none' >
        <Finder_Navigator.Screen name={'Finder'} component={Finer} />
        <Finder_Navigator.Screen name={'GymDetails'} component={GymDetails} />
        <Finder_Navigator.Screen name={'RequestsAvailability'} component={RequestsAvailability} />
    </Finder_Navigator.Navigator>
)


export type UserProfileParamList = {
    UserProfile: undefined,
}

const UserProfile_Navigator = createStackNavigator<UserProfileParamList>();

interface UserProfile_Navigator_Prop {

}

const UserProfileStack: React.FC<UserProfile_Navigator_Prop> = () => (
    <UserProfile_Navigator.Navigator headerMode='none' >
        <UserProfile_Navigator.Screen name={'UserProfile'} component={Profile} />
    </UserProfile_Navigator.Navigator>
)




export type UserHistoryParamList = {
    UserHistory: undefined,
    GymProfile: undefined
}

const UserHistory_Navigator = createStackNavigator<UserHistoryParamList>();

interface UserHistory_Navigator_Prop {

}

const UserHistoryStack: React.FC<UserHistory_Navigator_Prop> = () => (
    <UserHistory_Navigator.Navigator headerMode='none' >
        <UserHistory_Navigator.Screen name={'UserHistory'} component={History} />
    </UserHistory_Navigator.Navigator>
)


const tabBarIconSize = 22
export const tabBarHeight = 55

export type UserMainTabParamList = {
    Finder: undefined,
    UserProfile: undefined,
    UserHistory: undefined
}

export type GymMainTabParamList = {
    GymHistory: undefined
}

interface UserMainTabProps {

}

interface GymMainTabProps {

}


const tabBarVisible = (route: any) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : route.name
    switch (routeName) {

        case 'GymDetails':
        case 'RequestsAvailability':
            // case 'UserProfile':
            return false
        default:
            return true
    }
}


const UserTab = createBottomTabNavigator<UserMainTabParamList>();

const GymTab = createBottomTabNavigator<GymMainTabParamList>();

export const UserMainTab: React.FC<UserMainTabProps> = () => {
    return (
        <UserTab.Navigator
            tabBarOptions={{
                style: {
                    shadowColor: SystemColors.logoColor,
                    shadowOpacity: 1,
                    position: 'absolute',
                    marginHorizontal: PagePadding.largePadding * 2,
                    bottom: 10,
                    height: tabBarHeight,
                    borderRadius: PageRadius.largeRadius * 2,
                    backgroundColor: SystemColors.lightDarkBG,
                },
            }
            } >


            <UserTab.Screen
                name='Finder'
                component={FinderStack}
                options={({ route }) => ({
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='location-pin' size={tabBarIconSize} style={{ position: 'absolute', top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
                    tabBarVisible: tabBarVisible(route),
                    tabBarVisibilityAnimationConfig: {
                        hide: {
                            animation: 'timing',
                            config: {
                                delay: 1000,
                                duration: 1000
                            }
                        }
                    }
                })}
            />

            <UserTab.Screen
                name='UserProfile'
                component={UserProfileStack}
                options={({ route }) => ({
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='user' size={tabBarIconSize} style={{ position: 'absolute', top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
                    tabBarLabel: () => null,
                    tabBarVisible: tabBarVisible(route),
                })}
            />

            <UserTab.Screen
                name='UserHistory'
                component={UserHistoryStack}
                options={{
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='layers' size={tabBarIconSize} style={{ position: 'absolute', top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
                    tabBarLabel: () => null,
                }}
            />

        </UserTab.Navigator>
    )
}

export const GymMainTab: React.FC<GymMainTabProps> = () => {
    return (
        <GymTab.Navigator>

            <GymTab.Screen
                name='GymHistory'
                component={GymHistory}
                options={({ route }) => ({
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='layers' size={tabBarIconSize} color={focused ? SystemColors.logoColor : SystemColors.lightDarkBG} />)
                })}
            />

            <GymTab.Screen
                name='GymProfile'
                component={GymProfile}
                options={({ route }) => ({
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='user' size={tabBarIconSize} color={focused ? SystemColors.logoColor : SystemColors.lightDarkBG} />)
                })}
            />

        </GymTab.Navigator>
    )
}

