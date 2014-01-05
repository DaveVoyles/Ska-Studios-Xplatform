(function (global) {
    var $loginWrap,
        $logoutWrap,
        $username,
        $password,
        $loggedUser;

    function init() {
        $loginWrap = $("#login-wrap");
        $logoutWrap = $("#logout-wrap");
        $username = $("#login-username");
        $password = $("#login-password");
        $loggedUser = $("#logout-username");

        setMode("login");

        $username.on("keyup", checkEnter);
        $password.on("keyup", checkEnter);
        $("#login-reset").on("click", clearForm);
        $("#login-form").on("submit", login);
        $("#logout").on("click", logout);
    }

    $(document).on("deviceready", init);

    function clearForm() {
        $username.val("");
        $password.val("");
    }

    function setMode(mode) {
        if (mode === "login") {
            $loginWrap.show();
            $logoutWrap.hide();
        }
        else {
            $loginWrap.hide();
            $logoutWrap.show();
        }
    }

    function login(e) {
        e.preventDefault();
        e.stopPropagation();

        var username = $username.val().trim(),
            password = $password.val().trim();

        if (username === "" || password === "") {
            navigator.notification.alert("Both fields are required!",
                                            function () { },
                                            "Login failed",
                                            'OK');
        } else {
            $loggedUser.text(username);
            setMode("logout");
        }
    }

    function logout() {
        clearForm();
        setMode("login");
    }

    function checkEnter(e) {
        e.preventDefault();

        if (e.keyCode == 13) {
            $(e.target).blur();
            login();
        }
    }
})(window);