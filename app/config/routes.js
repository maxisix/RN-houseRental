import { createStackNavigator } from "react-navigation";

import Home from "../screens/Home";
import AvailableHome from "../screens/AvailableHome";
import SingleHome from "../screens/SingleHome";
import navStyles from "../styles/navStyles";

export default createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Choose your home preferences",
      ...navStyles
    }
  },
  AvailableHome: {
    screen: AvailableHome,
    navigationOptions: {
      title: "Available Home",
      ...navStyles
    }
  },
  SingleHome: {
    screen: SingleHome,
    navigationOptions: {
      title: "",
      ...navStyles
    }
  }
});
