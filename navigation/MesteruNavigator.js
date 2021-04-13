import MainScreen from "../screens/MainScreen";
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../components/LoginScreen";
import {createAppContainer} from "react-navigation";

const MesteruNavigator = createStackNavigator({
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
})

export default createAppContainer(MesteruNavigator);

