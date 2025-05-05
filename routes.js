// Importa a função para criar o navegador de abas na parte inferior da tela
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Restaurante } from "./restaurante";
import { FilmeSerie } from "./filmeSerie";
import { Musica } from "./musica";
import { Receita } from "./receita";
import { Ionicons } from "@expo/vector-icons/";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Cria um objeto que representa o navegador de abas
const Tab = createBottomTabNavigator();

export default function RotaInterna() {
  return (
<Tab.Navigator
  screenOptions={{
    tabBarActiveBackgroundColor: "#A020F0",
    tabBarStyle: {
      position: "absolute",
      height: 80,
      right: 30,
      left: 30,
      borderRadius: 5,
      backgroundColor: "#fff",
    },
  }}
>
      <Tab.Screen
        name="restaurante"
        component={Restaurante}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons size={30} color={"#fff"} name="restaurant"  
              style={{
                marginTop: 40,
                height: 30,
              }} />;
            }
            return <Ionicons size={30} color={"#A020F0"} name="restaurant-outline" 
            style={{
                marginTop: 40,
                height: 30,
              }} />;
          },
        }}
      />
      <Tab.Screen
        name="filmeserie"
        component={FilmeSerie}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons size={30} color={"#fff"} name="film" style={{
                marginTop: 40,
                height: 30,
              }} />;
            }
            return (
              <Ionicons size={30} color={"#A020F0"} name="film-outline" style={{
                marginTop: 40,
                height: 30,
              }} />
            );
          },
        }}
      />
      <Tab.Screen
        name="musica"
        component={Musica}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <Ionicons size={30} color={"#fff"} name="musical-notes"  
              style={{
                marginTop: 40,
                height: 30,
              }} />;
            }
            return <Ionicons size={30} color={"#A020F0"} name="musical-notes-outline" 
            style={{
                marginTop: 40,
                height: 30,
              }} />;
          },
        }}
      />
      <Tab.Screen
        name="receita"
        component={Receita}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <MaterialCommunityIcons size={30} color={"#fff"} name="bowl-mix" style={{
                marginTop: 40,
                height: 30,
              }} />;
            }
            return (
              <MaterialCommunityIcons size={30} color={"#A020F0"} name="bowl-mix-outline" style={{
                marginTop: 40,
                height: 30,
              }} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
