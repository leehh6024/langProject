import React, { useState } from "react";
import {SafeAreaView, Text, View, Button} from 'react-native';
// import "./styles.css";
import useMultilingual, { LanguageType } from "./src/useMultilingual/index";

export default function App() {
  const [lang, setLang] = useState<LanguageType>("ko");
  const m = useMultilingual(lang);

  return (
    <SafeAreaView>
      <View>
        {lang === "ko" ? 
        <Button onPress={() => setLang("en")} title="영어로 바꾸기"/> :
        <Button onPress={() => setLang("ko")} title="한국어로 바꾸기"/>}
      </View>
      <View>
        {/* <Text>{m("MAIN_TITLE")}</Text>
        <Text>{m("SUB_TITLE")}</Text> */}
        {lang === "ko" ? 
        <Text>{m("school")}</Text> :
        <Text>{m("school")}</Text>}
      </View>
    </SafeAreaView>
  );
}