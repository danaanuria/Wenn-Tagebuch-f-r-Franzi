function checkPassword() {

    const password =
        document.getElementById("password").value;

    if(password === "Franzi") {

        window.location.href = "tagebuch.html";

    } else {

        alert("Das Passwort ist leider falsch ❤️");
    }
}
