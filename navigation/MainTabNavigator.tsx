import { createBottomTabNavigator, BottomTabBarOptions, BottomTabBar } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { SystemColors } from "../constants/Colors";
import { PagePadding, PageRadius, Screen } from "../constants/Styles";
import Finer from "../containers/User/Finder";
import Profile from "../containers/User/Profile";
import History from "../containers/User/History";
import GymDetails from "../containers/User/GymDetails";
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
export type MainTabParamList = {
    Finder: undefined,
    UserProfile: undefined,
    UserHistory: undefined
}

interface MainTabProps {

}

const tabBarVisible = (route: any) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : ''

    switch (routeName) {

        case 'GymDetails':
        case 'RequestsAvailability':
            return false
        default:
            return true
    }
}


const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab: React.FC<MainTabProps> = () => {
    return (
        <Tab.Navigator
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


            <Tab.Screen
                name='Finder'
                component={FinderStack}
                options={({ route }) => ({
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='location-pin' size={tabBarIconSize} style={{ top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
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

            <Tab.Screen
                name='UserProfile'
                component={UserProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='user' size={tabBarIconSize} style={{ top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name='UserHistory'
                component={UserHistoryStack}
                options={{
                    tabBarIcon: ({ focused }) => (<SimpleLineIcons name='layers' size={tabBarIconSize} style={{ top: 14 }} color={focused ? SystemColors.logoColor : 'white'} />),
                    tabBarLabel: () => null,
                }}
            />

        </Tab.Navigator>
    )
}

export default MainTab