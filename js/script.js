let userLogin = function () {
    let form = document.getElementById("login-form");
    let emali =  form.elements.namedItem("email").value;
    let password = form.elements.namedItem("password").value;
    let credentiasl = "email=" + email + "&password=" + password;
    const xml = new XMLHttpRequest();

    xml.onreadystatechange = function () {
        if (xml.status == 200) {
            console.log(xml.response);
        }
    };

    xml.open("POST", "login.php");
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send(credentials);
};