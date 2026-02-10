/**
 * Firebase 초기화 및 서비스 인스턴스 내보내기
 * 📚 공식 문서: https://firebase.google.com/docs/web/setup
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/**
 * Firebase 설정 객체
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

/**
 * Firebase 앱 초기화
 */
const app = initializeApp(firebaseConfig);

/**
 * Firebase Authentication 인스턴스
 * 📚 Auth 문서: https://firebase.google.com/docs/auth/web/start
 */
export const auth = getAuth(app);

/**
 * Cloud Firestore 인스턴스
 * 📚 Firestore 문서: https://firebase.google.com/docs/firestore/quickstart
 */
export const db = getFirestore(app);

/**
 * Firebase 앱 인스턴스 내보내기 (필요시 사용)
 */
export default app;
