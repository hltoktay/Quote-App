import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import React, { Component } from "react";

import { NavigationService } from "../api/NavigationService";
import { theme } from "../constant/theme";
import TabBar from "../components/TabBar";

const primaryHeader = {
  headerStyle: {
    backgroundColor: theme.color.redLightest
  },
  headerTintColor: theme.color.white,
  headerTitleStyle: {
    fontWeight: "400"
  }
};

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require("./LoginScreen").default
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require("./Home").default
    }
  },
  {
    navigationOptions: { ...primaryHeader }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    New: {
      getScreen: () => require("./AddQuote").default
    },
    Settings: {
      getScreen: () => require("./Settings").default
    }
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require("./Splash").default
    },
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: "Splash"
  }
);

class Navigation extends Component {
  state = {};
  render() {
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
