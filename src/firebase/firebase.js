import * as firebase from 'firebase';

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// =============================================================

// Expense removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Expense updated
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// Expense added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// const expenses = [
//   {
//     description: 'Coffee',
//     note: '',
//     amount: 3,
//     createdAt: 0
//   }, {
//     description: 'Tea',
//     note: 'This is a note',
//     amount: 2.5,
//     createdAt: -1000
//   }, {
//     description: 'Water',
//     note: '',
//     amount: 1,
//     createdAt: 1000
//   }
// ];

// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });

// database.ref('notes/-LLEJKvinARBNCdolhkm').update({
//   body: 'Buy food'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React'
// });

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Ekku Sipilä',
//   age: 21,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Jyväskylä',
//     country: 'Finland'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

/* database.ref('isSingle')
  .remove()
  .then(() => {
    console.log('Data was removed');
  }).catch((e) => {
    console.log('Did not remove data', e);
  }); */