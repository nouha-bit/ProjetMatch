
var firebaseConfig = {
    apiKey: "AIzaSyCSe5C2BSAY0qtLCiJgvkCfLKDKqBZ7Xrs",
    authDomain: "projetmatch-76a6e.firebaseapp.com",
    databaseURL: "https://projetmatch-76a6e.firebaseio.com",
    projectId: "projetmatch-76a6e",
    storageBucket: "projetmatch-76a6e.appspot.com",
    messagingSenderId: "603412845437",
    appId: "1:603412845437:web:f7287c540e05000b"
};
firebase.initializeApp(firebaseConfig);

function Register_User() {
    var r = "User";;
    var e = "waiting"
    console.log('in function register ');
    var email = document.getElementById('email').value;
    var password = document.getElementById('pwd').value;
    
    var select = document.getElementById('pays');
    choice = select.selectedIndex ;
    pays=select.options[choice].text
    console.log(select.options[choice].text);
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
        console.log(user.user.uid);
        const data = {
            Email:email,
            Password:password,
            Nom: document.getElementById('nom').value,
            Prenom: document.getElementById('prenom').value,
            Email: document.getElementById('email').value,
            Password: document.getElementById('pwd').value,
            Adresse: document.getElementById('adresse').value,
            Pays: pays,
            DateNaissance: document.getElementById('datenaissance').value,
            Etat: e,
            Role:r
        }
        console.log(data);
        
        firebase.database().ref('Users/' + user.user.uid).set(data)

    })

}
function Register_Agence(){
        var r = "agence";
        var e = "waiting";
        var email = document.getElementById('email').value;
        var pwd = document.getElementById('pwd').value;
        firebase.auth().createUserWithEmailAndPassword(email, pwd).then(agence => {
          console.log(agence)
          firebase.database().ref('Users/' + agence.user.uid).set({
            Name: document.getElementById('name').value,
            Email: document.getElementById('email').value,
            Pwd: document.getElementById('pwd').value,
            Adresse: document.getElementById('adress').value,
            Url: document.getElementById('url').value,
            Etat: e,
            Role: r,
          })
        })
      }
    

