class LoginService {
    login(username, password) {
        let form_data = new FormData();
        form_data.append("username", username);
        form_data.append("password", password);
        return fetch("api/auth/login", {
            method: 'POST',
            body: form_data,
            redirect: 'follow'
        });
    }
}

export default new LoginService();

