declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.avif";
declare module "*.mp4";
declare module "*.webp";
declare module "*.gif";
declare module "redux-persist/lib/storage";
declare module "redux-persist/es/persistReducer";
declare module "redux-persist/es/persistStore";
declare module "redux-persist/integration/react";

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_MERCHANT_ID: string;
  readonly VITE_API_KEY: string;
  readonly VITE_ACCOUNT_ID: string;
  readonly VITE_CURRENCY: string;
  readonly VITE_RESPONSE_URL: string;
  readonly VITE_CONFIRM_URL: string;
  readonly VITE_CHECKOUT_URL: string;
  readonly VITE_PAYEREMAIL: string;
  readonly VITE_SOCKET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
