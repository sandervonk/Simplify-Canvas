if (window.location.href.includes("/conversations")) {
    window.addEventListener("load", function () {
        document.getElementsByClassName("ic-Layout-columns")[0].style = "display: block; padding: 0px !important;"
    })
}