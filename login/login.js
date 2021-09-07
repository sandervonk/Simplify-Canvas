if (window.location.href.includes("/login")) {
    window.addEventListener("load", function () {
        document.getElementById("pseudonym_session_unique_id").placeholder = "Email"
        document.getElementById("pseudonym_session_password").placeholder = "Password"
    })
}