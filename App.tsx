import "react-native-gesture-handler";
import React from "react";
import { QueryClientProvider, useQueryClient } from "react-query";
import { QueryClient } from "react-query";

import { Navigation } from "./src/Services/Navigation/navigation";


const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </>
  );
};
export default App;
