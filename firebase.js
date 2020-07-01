
(function () {

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCS8z6C_69CkKDXEf0iBPxxoZWvcavdJcg",
        authDomain: "nerocare-1ab70.firebaseapp.com",
        databaseURL: "https://nerocare-1ab70.firebaseio.com",
        projectId: "nerocare-1ab70",
        storageBucket: "nerocare-1ab70.appspot.com",
        messagingSenderId: "954862350723",
        appId: "1:954862350723:web:4251b22f62ddafb54206b6",
        measurementId: "G-TH863E9823"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    const btnLogin = document.getElementById('Login');

    btnLogin.addEventListener('click', e => {

        const email = txtEmail.nodeValue;
        const pass = txtPassword.nodeValue;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.catch(e => Console.console.log(e.message));

    })


})