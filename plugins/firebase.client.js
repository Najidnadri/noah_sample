
import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_w9qNXinFsWX9ROl2xSyMNTY28oQlUqs",
  authDomain: "sample-dd7b5.firebaseapp.com",
  projectId: "sample-dd7b5",
  storageBucket: "sample-dd7b5.appspot.com",
  messagingSenderId: "231778919289",
  appId: "1:231778919289:web:b38e50122828e9ce7785a8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

export default defineNuxtPlugin(nuxtapp => {
    return {
      // provide: {
      //   firestore: db,
      //   cloudStorage: storage,
      // }
    }
}) 
