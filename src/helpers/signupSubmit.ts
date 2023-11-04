import axios from "axios";
import { initializeApp } from 'firebase/app';
import { getDatabase,set,ref} from "firebase/database";

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

export async function signupSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
//Firebase

let formData = new FormData(e.target as HTMLFormElement);
writeUserData(formData.get("username") as String ,formData.get("email") as String,formData.get("password") as String)

  //API
  // let data = new URLSearchParams(formData as any).toString();
  // let auth = await axios({
  //   method: "post",
  //   url: "http://localhost:8000/signup",
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  //   data: data,
  // });
  // return auth.data;
}

function writeUserData(username:String,email:String,password:String) {
  const db = getDatabase();
  set(ref(db, 'users/' + username), {
    username: username,
    email: email,
    password : password
  }).then(()=>{window.location.href = "/login";});
  
}
