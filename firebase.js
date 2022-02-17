// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  // Import the functions you need from the SDKs you need
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPWx2cQPB52hyIylJ6LdtoqVWh48BeRcU",
  authDomain: "fir-crud-9e4f2.firebaseapp.com",
  projectId: "fir-crud-9e4f2",
  storageBucket: "fir-crud-9e4f2.appspot.com",
  messagingSenderId: "725085500253",
  appId: "1:725085500253:web:984fd2e811c25d6a95eeb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Guardar nueva tarea en el Firestore
 * @param {string} title El titulo de la tarea
 * @param {string} description La descricpión de la tarea
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
export const getTasks = () => getDocs(collection(db, "tasks"));
