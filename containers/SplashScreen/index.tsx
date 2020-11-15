import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { SystemColors } from '../../constants/Colors';

interface SplashScreen {
    animated?:boolean
}

const usePulse = (animated: boolean  = false , startDelay = 100) => {

    const scale = useRef(new Animated.Value(1)).current;

    const pulse = () => {

        Animated.sequence([
            Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
            Animated.timing(scale, { toValue: 2, useNativeDriver: true })
        ]).start(() => {
            pulse()
        });

    };

    useEffect(() => {
        if(animated){
            const timeout = setTimeout(() => pulse(), startDelay);
            return () => clearTimeout(timeout);
        }
      
    }, []);

    return scale;
};

const SplashScreen: React.FC<SplashScreen> = ({ animated }) => {

    const scale = usePulse(animated)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: SystemColors.darkBG }} >
            <Animated.Image source={require('../../assets/images/Logo.png')} style={{ width: 200, height: 200, transform: [{ scale }] }} />
        </View>
    )
}
export default SplashScreen