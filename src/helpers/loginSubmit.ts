import axios from "axios";
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
  apiKey: "AIzaSyDpWqXThqBmso1ObwnKqlnlp5xDmo2CfdE",
  authDomain: "flint-a8bd6.firebaseapp.com",
  projectId: "flint-a8bd6",
  storageBucket: "flint-a8bd6.appspot.com",
  messagingSenderId: "468648434040",
  appId: "1:468648434040:web:e2ec8259f3f4e43235d08d",
  measurementId: "G-X115NJJ4J7",
  databaseURL: "https://flint-a8bd6-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function loginSubmit(e: React.FormEvent<HTMLFormElement>) {

  e.preventDefault();
  console.log("sjfk")
  let formData = new FormData(e.target as HTMLFormElement);

  
const dbRef = ref(getDatabase());
get(child(dbRef, `users/${formData.get("username")}`)).then((snapshot) => {
  if (snapshot.exists()) {
    if(snapshot.val().password === formData.get("password")){
      window.location.href = "/";
    }
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});




  // let data = new URLSearchParams(formData as any).toString();
  // let auth = await axios({
  //   method: "post",
  //   url: "http://localhost:8000/login",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   data: data,
  // });
  // return auth.data;
}
