import React, {Component} from 'react';
import postService from "../http/postService";
import {Post} from "./post/post";

export default class AllPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        postService.getAllPost()
            .then(response => response.text())
            .then(result => {
                const obj = JSON.parse(result);
                console.log("ComponentDidMount");
                console.log(obj.data);
                this.setState({posts: obj.data})
            })
    }

    render() {
        return (<div>
            {Object.entries(this.state.posts).map(([key, value]) => (
                <Post key={key} title={value.title} body={value.body} created={value.created_at} updated={value.updated_at}/>
            ))}
        </div>);
    }
}
