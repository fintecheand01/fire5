importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '627152042464'
});
const messaging = firebase.messaging();