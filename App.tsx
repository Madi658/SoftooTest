import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import { StatusBar, useColorScheme, AppState, Text, Alert } from "react-native";
import { QueryClientProvider, useQueryClient } from "react-query";
import Toast from "react-native-toast-message";
import { QueryClient } from "react-query";
import { Navigation } from "./src/Services/Navigation/Navigation";
console.disableYellowBox = true;

const App = () => {
  const queryClient = new QueryClient();
  const [userId, setUserId] = useState("");
 

  //Method for handling notifications opened
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
       <Navigation/>
      </QueryClientProvider>
      <Toast />
    </>
  );
};

export default App;
