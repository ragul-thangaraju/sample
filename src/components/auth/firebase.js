import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCNRp6hjSkuDeAbaF8OORzxXwCRLjXPKNA",
  authDomain: "facebook-f1057.firebaseapp.com",
  projectId: "facebook-f1057",
  storageBucket: "facebook-f1057.appspot.com",
  messagingSenderId: "753582824780",
  appId: "1:753582824780:web:79df4172f9586587ccc3e9",
  measurementId: "G-ELGL50WHWQ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;

// import facebookProvider from "./provider";
// import socialMediaAuth from "./auth";

// onClick = async (provider) => {
//   const res = await socialMediaAuth(provider);
//   console.log(res);
// <button onClick={() => this.onClick(facebookProvider)}>click</button>
// };
