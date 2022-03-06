import { NativeBaseProvider } from "native-base";

import MainScreen from "./src/screens/MainScreen";

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
};

export default App;
