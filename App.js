import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";
import Project2 from "./src/screens/Project2";
import Project3 from "./src/screens/Project3";
import Project4 from "./src/screens/Project4";
import Project5 from "./src/screens/Project5";
import Project6 from "./src/screens/Project6";
import Project7 from "./src/screens/Project7";
import Project8 from "./src/screens/Project8";


const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Counter:CounterScreen,
    Project2:Project2,
    Project3:Project3,
    Project4:Project4,
    Project5:Project5,
    Project6:Project6,
    Project7:Project7,
    Project8:Project8,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
 


export default createAppContainer(navigator);