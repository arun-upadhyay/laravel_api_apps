class LoginService {
    login(username, password) {
        let formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);
        fetch("api/auth/login", {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                if (obj.access_token) {
                    localStorage.setItem('accessToken', obj.access_token);
                    localStorage.setItem('expiresIn', obj.expires_in);
                    localStorage.setItem('authUser', obj.user.name);
                }
            })
            .catch(error => console.log('error', error));
    }
}

export default new LoginService();

