#langProject #I18n project


프로젝트 루트디렉토리에서 다음과 같이 입력
npm install react-i18next i18next
npm i --save-dev @types/react-native-i18n

ios/Podfile 아무 행에서 다음과 같이 입력
pod 'RNI18n', :path => '../node_modules/react-native-i18n'

ios 디렉토리에서 다음과 같이 입력
pod install

ios 디렉토리에서 다음과 같이 입력해서 xcode실행
open <your-project>.xcodeproj

I18n을 활용하기위해 설정해주어야 할 것.
  1. 좌측 상단의 프로젝트 선택
  2. 선택된 프로젝트의 Info > Localizations 에 한국어 추가.


*****타입스크립트 설정 안한 기본 RN의 경우***
  1. 프로젝트 루트에서 tsconfig.json 생성
  2. 다음과 같이 입력
  3. 커밋 내용에 tsconfig.json 있으니 참고바랍니다.
  {
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6", "es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "skipLibCheck": true
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"],
  "extends": "@tsconfig/react-native/tsconfig.json"
  }



*****에러 참고사항*****
라이브러리 및 Podfile 관련 패키지 등을 설치하고나면 "npm install", "pod install" 시도 바랍니다.

모듈 'react-native-i18n'에 대한 선언 파일을 찾을 수 없습니다.
해당 항목이 있는 경우 'npm i --save-dev @types/react-native-i18n'을(를) 시도하거나, 
'declare module 'react-native-i18n';'을(를) 포함하는 새 선언(.d.ts) 파일 추가

npm install react-native-i18n --save
