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

const firebaseConfig = {
  apiKey: "AIzaSyBbHIE_dPMZXJL8P50-Ix_dj2bXqyukAe4",
  authDomain: "majuterusmaju-b03f6.firebaseapp.com",
  projectId: "majuterusmaju-b03f6",
  storageBucket: "majuterusmaju-b03f6.firebasestorage.app",
  messagingSenderId: "450902574757",
  appId: "1:450902574757:web:44e4619e095dcf437d6f4c",
  measurementId: "G-6K39NYMBLG"
};

/* (Opsional) Kode akses sederhana supaya tidak sembarang orang bisa buka.
   Kosongkan ("") kalau tidak mau pakai. */
window.APP_ACCESS_CODE = "";
