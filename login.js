function toggleSignIn() {
    if (firebase.auth().currentUser) {
        // User is signed in.

        firebase.auth().signOut();
        // document.getElementById("Login").style.color = "Red"

        // var user = firebase.auth().currentUser;

        // if (user != null) {
        //     var email_id = user.email;
        //     document.getElementById("password").innerHTML = "welcome : " + email_id;

        // }

    } else {
        // No user is signed in.
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            window.alert("Error : " + errorMessage);

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }

            console.log(error);
            document.getElementById('Login').disabled = false;
            // [END_EXCLUDE]
        });
        // [END authwithemail]
    }

    function sendPasswordReset() {
        var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase.auth().sendPasswordResetEmail(email).then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            } else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    }
    // document.getElementById('Login').disabled = true;
    //     }
    //     });

    //     firebase.auth().onAuthStateChanged(firebaseUser => {
    //         if (firebaseUser) {
    //             window.open('home.html')
    //         }
    //     })

    // }
    // });
    // function login2() {
    //     firebase.auth().signOut();
    // }
}
function sendPasswordReset() {
    var email = document.getElementById('email').value;
    // [START sendpasswordemail]
    firebase.auth().sendPasswordResetEmail(email).then(function () {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END sendpasswordemail];
}
function initApp() {
    // Listening for auth state changes.
    // [START authstatelistener]
    firebase.auth().onAuthStateChanged(function (user) {
        // [START_EXCLUDE silent]
        // document.getElementById('quickstart-verify-email').disabled = true;
        // [END_EXCLUDE]
        if (user) {
            // User is signed in.
            // window.open('home.html')
            location.href = "home.html";
            // [END_EXCLUDE]

        } else {


        }
        // [START_EXCLUDE silent]
        document.getElementById('Login').disabled = false;

        // window.close()


        // [END_EXCLUDE]
    });
    // [END authstatelistener]

    document.getElementById('Login').addEventListener('click', toggleSignIn, false);


    document.getElementById('reset').addEventListener('click', sendPasswordReset, false);
}

// window.onload = function () {
//     initApp();

// };
const logout = document.querySelector('#signout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        alert('User Sign out');
        window.location.replace('index.html')
    })

})
// const login = document.querySelector('#Login');
// login.addEventListener('click', (e) => {
//     e.preventDefault();
//     login = function () {
//         initApp();
//     };
// })
