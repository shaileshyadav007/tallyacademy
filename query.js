
var firebaseConfig = {
    apiKey: "AIzaSyBhQndFosGKW-9BXEneTyCJk-p6opY2oZs",
    authDomain: "tally-academy.firebaseapp.com",
    databaseURL: "https://tally-academy.firebaseio.com",
    projectId: "tally-academy",
    storageBucket: "tally-academy.appspot.com",
    messagingSenderId: "986007746670",
    appId: "1:986007746670:web:5f1f7dc4084ed436cd0e7f",
    measurementId: "G-W0PX6SYCZ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  var contact = document.getElementById('contact');
  var queryRef = firebase.database().ref('queries');

  queryRef.on('value',gotData, errData)

  function gotData(data){
      var queries = data.val();
      var keys = Object.keys(queries)


    for(var i=1;i<keys.length;i++){
        var k = keys[i];
        var name = queries[k].name;
        var number = queries[k].number;
        var query = queries[k].query;

        showQuery(i,name,number,query);
        

    }
    console.log(keys)

   
  }

  function showQuery(sr,name,number,query) {
    const list = document.querySelector('#list');
    const row = document.createElement('tr');

  
    row.innerHTML = `

    <td>${name}</td>
    <td>${number}</td>
    <td>${query}</td>
    `
    list.appendChild
    (row)
  }

  function errData(err){
    console.log("ERROR");
    console.log(err)
    
  }