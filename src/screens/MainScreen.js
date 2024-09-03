import React from "react";
import { Ionicons } from "@expo/vector-icons";
import RecipeListScreen from "./RecipeListScreen";
import ScanRecipeScreen from "./ScanRecipeScreen";
import SavedRecipesScreen from "./SavedRecipesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{
          title: "Recipe",
          tabBarLabel: "Recipe",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
            name={focused ? "home-sharp" : "home-outline"}
            color={color} 
            size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanRecipeScreen"
        component={ScanRecipeScreen}
        options={{
          title: "Scan",
          tabBarLabel: "Scan",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
            name={focused ? "scan-sharp" : "scan-outline"}
            color={color} 
            size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedRecipesScreen"
        component={SavedRecipesScreen}
        options={{
          title: "Saved",
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons 
            name={focused ? "bookmarks-sharp" : "bookmarks-outline"}
            color={color} 
            size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;