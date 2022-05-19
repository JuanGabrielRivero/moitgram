import { initializeApp } from "firebase/app";

import { getDatabase, ref, child, push, update } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.API_KEY || "API_KEY_VACIA",
  authDomain: process.env.AUTH_DOMAIN || "AUTH_DOMAIN_VACIO",
  projectId: process.env.PROJECT_ID || "PROJECT_ID_VACIO"
};

const app = initializeApp(firebaseConfig);

function writeNewPost(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid,
    body,
    title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), "posts")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return update(ref(db), updates);
}
