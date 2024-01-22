## Getting started:

**Create new app:**
```bash
npx react-native@latest init <project-name>
```
**gradle setup:**
```bash
. ./android/gradlew clean
```
**Tailwind css:**
```bash
npm i nativewind
npm i --save-dev tailwindcss
npx tailwindcss init
```
`tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

**styles for SafeAreaView**
```ts
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
```
