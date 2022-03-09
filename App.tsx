import { NativeBaseProvider, Box, StatusBar } from "native-base";
import { Provider } from "react-redux";

import MainScreen from "./src/screens/MainScreen";

import { store } from "./src/app/store";

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#1f2937" />
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
