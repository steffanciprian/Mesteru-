import MainScreen from "../screens/MainScreen";
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from "../components/LoginScreen";
import {createAppContainer} from "react-navigation";
import ServiceDetailScreen from "../screens/ServiceDetailScreen";

const MesteruNavigator = createStackNavigator({
    LoginScreen: LoginScreen,
    MainScreen: MainScreen,
    ServiceDetailScreen: ServiceDetailScreen,
})
ServiceDetailScreen.navigationOptions =
    {
        headerTitle: 'Servicii'
    }
export default createAppContainer(MesteruNavigator);

