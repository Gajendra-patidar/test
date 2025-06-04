// client/app/_layout.jsx
import { Tabs } from 'expo-router';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ title: 'Home', tabBarIcon:({ size }) => (
          <FontAwesome5 name="home" size={size} color="#ff8a05" />
        ) , headerShown: false }}
        
      />
      <Tabs.Screen 
        name="settings" 
        options={{ title: 'Settings', tabBarIcon:({ size }) => (
          <FontAwesome5 name="cog" size={size} color="#ff8a05" />
        ) , headerShown: false }} 
      />

    </Tabs>
  );
}
