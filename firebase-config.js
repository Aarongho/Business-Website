/* ============================================================
   KONFIGURASI FIREBASE — Maju Terus Maju
   ------------------------------------------------------------
   Supaya data tersinkron antar HP/perangkat, isi bagian di bawah
   dengan config dari project Firebase kamu.

   Cara ambil (lengkap ada di README.md):
   1. Buka https://console.firebase.google.com  -> Add project
   2. Build -> Firestore Database -> Create database (mode test)
   3. Project settings (ikon gerigi) -> Your apps -> Web (</>)
   4. Copy isi "firebaseConfig" dan tempel menggantikan yang di bawah.

   Kalau bagian ini dibiarkan kosong (apiKey masih "ISI_DISINI"),
   aplikasi tetap jalan tapi data hanya tersimpan di HP itu saja
   (mode offline / localStorage), tidak tersinkron.
   ============================================================ */

window.FIREBASE_CONFIG = {
  apiKey: "ISI_DISINI",
  authDomain: "ISI_DISINI.firebaseapp.com",
  projectId: "ISI_DISINI",
  storageBucket: "ISI_DISINI.appspot.com",
  messagingSenderId: "ISI_DISINI",
  appId: "ISI_DISINI"
};

/* (Opsional) Kode akses sederhana supaya tidak sembarang orang bisa buka.
   Kosongkan ("") kalau tidak mau pakai. */
window.APP_ACCESS_CODE = "";
