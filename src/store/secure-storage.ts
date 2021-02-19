// globals.ts

import SecureLS from 'secure-ls';

export const storageKey = 'sample-app'; // the key used by localStorage

export const secureStorage = new SecureLS({
  isCompression: false,
  encryptionSecret: 'w7f8wgfo9-jrp3r80397r9q9-qiono',
});

const initialStoreContent = secureStorage.get(storageKey); // or localStorage.get(storageKey)
export const initialUnencryptedStorage = initialStoreContent
  ? JSON.parse(initialStoreContent)
  : {}; // parse the localStorage value to an object when it's defined, else set it as an empty object

export function PreserveState(storageKey: string) {
  const initialStoreContent = secureStorage.get(storageKey);
  if (!initialStoreContent) return false;

  if (initialStoreContent) {
    const response: any = {};
    response[storageKey] = JSON.parse(initialStoreContent)[storageKey];
    console.log(response);
    return Boolean(JSON.parse(initialStoreContent));
  }

  return false;
}
