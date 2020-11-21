import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import AuthNavigator from "./AuthNavigator";
import { ILoginState, ISystemState } from '../redux/types';
import MainTab from './MainTabNavigator';
import SplashScreen from '../containers/SplashScreen';

interface RootNavigationProps extends ILoginState {

}

interface RootNavigationState {
    isLoaded: boolean
}

class RootNavigation extends React.Component<RootNavigationProps, RootNavigationState> {

    timer: any

    constructor(props: RootNavigationProps) {
        super(props)

        this.state = {
            isLoaded: false
        }
    }

    componentDidMount() {

        this.timer = setTimeout(() => {
            this.setState({ isLoaded: true })
        }, 4000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <NavigationContainer>
                    {this.props.is_logged_in ? <MainTab /> : <AuthNavigator />}
                </NavigationContainer>
            )
        } else {
            return (
                <SplashScreen animated />
            )
        }

    }
}

const mapStateToProps = ({ login: { is_logged_in } }: ISystemState) => ({
    is_logged_in
})

export default connect(mapStateToProps)(RootNavigation)