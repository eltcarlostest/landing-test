import RouterPage from "@Presentation/router/RoutePage";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense>
          <RouterPage />
      </Suspense>
    </>
  );
}

export default App;
