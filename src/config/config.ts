import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apikey: import.meta.env.VITE_FIREBASE_API_KEY,
    auth: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messageSender: import.meta.env.VITE_MESSAGEING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_APP_ID
}

const app = initializeApp(config);
const db = getFirestore(app)

export { db }