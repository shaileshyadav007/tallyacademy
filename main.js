// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


var queryRef = firebase.database().ref('queries');

document.getElementById('contactForm').addEventListener('submit',submitForm);


function submitForm(e){
    e.preventDefault();


    //Get Value
    var name = getInputValue('name');
    var number = getInputValue('number');
    var query = document.getElementById('query').value;
    var date =  new Date()
    console.log(date)

    //Save Query

    saveQuery(name,number,query,date);
    alert("Your Query has been sent.");
    document.getElementById('contactForm').reset();

    
}

// Get Value

function getInputValue(id){
 return document.getElementById(id).value;
}

//Save msg to firebase

function saveQuery(name,number,query,date){
    var newQueryRef = queryRef.push();
    newQueryRef.set({
        name : name,
        number : number,
        query : query,
    
       
    })
}

function clearData(){

}