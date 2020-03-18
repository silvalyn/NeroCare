firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        document.getElementById("Login").style.color = "Red"

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            document.getElementById("password").innerHTML = "welcome : " + email_id;

        }

    } else {
        // No user is signed in.
    }
});

function login1() {
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error : " + errorMessage);
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            window.open('home.html')
        }
    })

}

function login2() {
    firebase.auth().signOut();
}