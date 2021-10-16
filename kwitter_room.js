const firebaseConfig = {
    apiKey: "AIzaSyD_UqWNiPjzcnwSaBluRwNLsDLyLV3bHF8",
    authDomain: "c-93-project.firebaseapp.com",
    projectId: "c-93-project",
    storageBucket: "c-93-project.appspot.com",
    messagingSenderId: "916679728213",
    appId: "1:916679728213:web:b41827fdda94c6cc2548dc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
