import { Stack } from "expo-router";

const publicLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ headerTitle: "Create Account" }}
      />
    </Stack>
  );
};

export default publicLayout;
