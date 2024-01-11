// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";
// async-storage
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDDxQiO6aodY1PETCtn0fSHmOZJ1TIAvA",
  authDomain: "reactnative-goit-e3765.firebaseapp.com",
  projectId: "reactnative-goit-e3765",
  storageBucket: "reactnative-goit-e3765.appspot.com",
  messagingSenderId: "398644508792",
  appId: "1:398644508792:web:8a13b5fdbcd1919416558d",
  // measurementId: "G-57T8MDWCD5",
};

const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
// const db = firestore();
