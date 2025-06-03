// client/app/_layout.jsx
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home" 
        options={{ title: 'Home', tabBarIcon: () => null, headerShown: false }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ title: 'Settings', tabBarIcon: () => null, headerShown: false }} 
      />
    </Tabs>
  );
}
