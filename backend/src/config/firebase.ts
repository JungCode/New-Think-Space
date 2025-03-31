import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

export function initializeFirebaseAdmin() {
  const requiredEnvVars = [
    "FIREBASE_PROJECT_ID",
    "FIREBASE_PRIVATE_KEY_ID",
    "FIREBASE_PRIVATE_KEY",
    "FIREBASE_CLIENT_EMAIL",
    "FIREBASE_CLIENT_ID",
    "FIREBASE_AUTH_URI",
    "FIREBASE_TOKEN_URI",
    "FIREBASE_AUTH_PROVIDER_CERT_URL",
    "FIREBASE_CLIENT_CERT_URL",
  ];

  const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

  if (missingVars.length > 0) {
    console.error("Missing environment variables:", missingVars.join(", "));
    throw new Error("One or more required Firebase environment variables are missing.");
  }

  try {
    const firebaseConfig: admin.ServiceAccount = {
      project_id: process.env.FIREBASE_PROJECT_ID!,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID!,
      private_key: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      client_email: process.env.FIREBASE_CLIENT_EMAIL!,
      client_id: process.env.FIREBASE_CLIENT_ID!,
      auth_uri: process.env.FIREBASE_AUTH_URI!,
      token_uri: process.env.FIREBASE_TOKEN_URI!,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL!,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL!,
    } as admin.ServiceAccount; // ✅ Cast để tránh lỗi TypeScript

    admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    });

    console.log("Firebase Admin SDK initialized successfully.");
    return admin.firestore();
  } catch (error) {
    console.error("Error initializing Firebase Admin:", error);
    throw error;
  }
}
