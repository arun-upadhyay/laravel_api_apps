class PostService {
    getAllPost() {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem('accessToken'));
        return fetch("api/post", {
            method: 'GET',
            credentials: "same-origin",
            headers: myHeaders,
            redirect: 'follow'
        });
    }
}

export default new PostService();
