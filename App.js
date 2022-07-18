import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import Project5 from './src/screens/Project5';
import Project6 from './src/screens/Project6';
import Project7 from './src/screens/Project7';
import Project8 from './src/screens/Project8';
import InternScreen from './src/screens/InternScreen';
import CarouselList from './src/screens/CarouselList';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Counter: CounterScreen,
    Intern: InternScreen,
    Carousel: CarouselList,
    Project5: Project5,
    Project6: Project6,
    Project7: Project7,
    Project8: Project8,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
