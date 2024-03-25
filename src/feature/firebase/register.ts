
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { IRegister } from "../recoilState";
import { error } from "console";
import { IFaqProps } from "@/app/faq/componet/FaqCard";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZIFUh9lwCh_l_iXAPzpt8cxZD9mccIbI",
  authDomain: "uetron-visa.firebaseapp.com",
  databaseURL: "https://uetron-visa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uetron-visa",
  storageBucket: "uetron-visa.appspot.com",
  messagingSenderId: "713364346309",
  appId: "1:713364346309:web:9153584806b9ecee8127ac",
  measurementId: "G-DJMBB74TBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function faqData(cb:(props:{error?:string,data:IFaqProps[]})=>any) {
  return onValue(ref(db, '/faq'), (snapshot) => {
    cb({data:snapshot.val()});
  }, {
    onlyOnce: true
  });
  
}

export function writeUserData(userObj:IRegister,cb:(error?:string)=>any) {
    set(ref(db, 'users/' + userObj.phone), userObj)
        .then(() => {
        cb();
      })
      .catch((error) => {
        cb(error)
        // The write failed...
      });
  }