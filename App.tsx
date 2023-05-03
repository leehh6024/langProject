import React, { useState, useEffect } from "react";
import {View, Text, SafeAreaView, Button} from "react-native";
import { useTranslation } from 'react-i18next'
import './src/localization/i18n'

export default function App() {
  const {t, i18n} = useTranslation();
  const [lang, setLang] = useState('kr');

  const handleLanguage = () => {
    if (lang === 'kr') {
      setLang('en')
    } else if (lang === 'en') {
      setLang('kr')
    }
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <SafeAreaView>
      <Button
        title={t('demoScope.title', {lng: lang})}
        onPress={() => {
          handleLanguage();
        }} />
      <Text>{t('demoScope.description')}</Text>
      <Text>{t('demoScope.content')}</Text>
    </SafeAreaView>
  ) 
}











// used I18n library
// import React from "react";
// import {View, Text, StyleSheet, SafeAreaView} from "react-native";

// import i18n from "./i18n/i18n";

// export default function App() {
//   return (
//     <SafeAreaView>
//       <View>
//         <Text
//         adjustsFontSizeToFit
//         numberOfLines={1}
//         style={{
//           fontSize: 35,
//           textAlign: 'center',
//           color: 'black',
//         }}
//         >{i18n.t('Language')}</Text>
//       </View>
//     </SafeAreaView>
//   )
// }






// No Library, Only React hooks and typescript
// import React, { useState } from "react";
// import {SafeAreaView, Text, View, Button} from 'react-native';
// // import "./styles.css";
// import useMultilingual, { LanguageType } from "./src/useMultilingual/index";

// export default function App() {
//   const [lang, setLang] = useState<LanguageType>("ko");
//   const m = useMultilingual(lang);

//   return (
//     <SafeAreaView>
//       <View>
//         {lang === "ko" ? 
//         <Button onPress={() => setLang("en")} title="영어로 바꾸기"/> :
//         <Button onPress={() => setLang("ko")} title="한국어로 바꾸기"/>}
//       </View>
//       <View>
//         {/* <Text>{m("MAIN_TITLE")}</Text>
//         <Text>{m("SUB_TITLE")}</Text> */}
//         {lang === "ko" ? 
//         <Text>{m("school")}</Text> :
//         <Text>{m("school")}</Text>}
//       </View>
//     </SafeAreaView>
//   );
// }