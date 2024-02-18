// App.tsx

import React, { Suspense } from "react";
import Routes from "./Routes/Index";

const App: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes />
    </Suspense>
  );
};

export default App;
