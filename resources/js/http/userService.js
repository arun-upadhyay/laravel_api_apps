class UserService {
    login(username, password) {
        let form_data = new FormData();
        form_data.append("username", username);
        form_data.append("password", password);
        return fetch("api/auth/login", {
            method: 'POST',
            body: form_data,
            redirect: 'follow'
        })
    }

    logout() {
        /**
         *
         */
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));
        return fetch("api/auth/logout", {
            method: 'POST',
            credentials: "same-origin",
            headers: myHeaders,
            redirect: 'follow'
        });
    }

    isTokenValid() {
        console.log("isTokenValid");

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));
        return fetch("api/auth/validate", {
            method: 'POST',
            credentials: "same-origin",
            headers: myHeaders,
            redirect: 'follow'
        });
    }
}

export default new UserService();

