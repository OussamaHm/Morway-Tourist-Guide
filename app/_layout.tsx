/* import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
 */
import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => (
  
  <Stack>
    <Stack.Screen name="index" options={{ title: 'Home'}} />
  </Stack>
);

export default _layout