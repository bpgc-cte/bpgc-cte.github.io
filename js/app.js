  console.log("hello");
  //Initialise firebase
    var config = {
      apiKey: "AIzaSyBzmeCe0GchfMbkLlmm3jgDOZYlz7opIYc",
      authDomain: "cte2018-4cbb8.firebaseapp.com",
      databaseURL: "https://cte2018-4cbb8.firebaseio.com",
      projectId: "cte2018-4cbb8",
      storageBucket: "cte2018-4cbb8.appspot.com",
      messagingSenderId: "138605684371"
    };
    firebase.initializeApp(config);

    //Get elements
    const obj = document.getElementById('test');

    //Create Reference
    const dbRefObject = firebase.database().ref().child('courses');

    //Sync Onject
    dbRefObject.on('child_added', snap => console.log(snap.val()));
      console.log("hello");
