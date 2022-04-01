import React from "react";
import { ScrollView, SafeAreaView, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, persistStor } from "./src/redux/store";
import Todos from "./src/container";



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#000',
    flex: 1
  }

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistStor}></PersistGate>
      <SafeAreaView style={backgroundStyle}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
        <Todos />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  )
}

export default App
