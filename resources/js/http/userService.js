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
        myHeaders.append("X-CSRF-TOKEN", this.getCookie('CSRF-TOKEN'));
        return fetch("api/auth/logout", {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        });
    }

    getCookie(name) {
        if (!document.cookie) {
            return null;
        }
        const xsrfCookies = document.cookie.split(';')
            .map(c => c.trim())
            .filter(c => c.startsWith(name + '='));

        if (xsrfCookies.length === 0) {
            return null;
        }
        return decodeURIComponent(xsrfCookies[0].split('=')[1]);
    }
}

export default new UserService();

