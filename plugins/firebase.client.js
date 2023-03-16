
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyB7iloOyY7rkIdNR7i6yKNx8HpcNWk5M-c",
//     authDomain: "penggerak-malaysia-official.firebaseapp.com",
//     projectId: "penggerak-malaysia-official",
//     storageBucket: "penggerak-malaysia-official.appspot.com",
//     messagingSenderId: "249755658316",
//     appId: "1:249755658316:web:e99e5fa05f3585c71d6ce9",
//     measurementId: "G-3HVQQFTGV9"
//   };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
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
