import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Props from "./components/Props";

function App() {
  const clientHead = new QueryClient();

  return (
    <QueryClientProvider client={clientHead}>
      <Props />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
