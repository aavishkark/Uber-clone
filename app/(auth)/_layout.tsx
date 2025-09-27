import { Stack, Redirect } from "expo-router";
import React from "react";
import { useAuth } from '@clerk/clerk-expo'

export default function Layout() {

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="signin" options={{ headerShown: false }} />
    </Stack>
  );
}
