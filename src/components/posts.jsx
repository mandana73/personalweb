import React, { Component } from 'react';
import getPosts from './../services/fakePosts';

class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    }

    componentDidMount() {
        const posts = getPosts();
        this.setState({ posts });
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="card shadow-lg bg-light m-2">
                    <article className="p-3">
                        <div className="card-header">
                            <h3 className="card-title">
                                <a href="#">تست</a>
                            </h3>
                            <span className="card-subtitle">
                                <span className="fa fa-calendar m-2" />
                                12 مهر
                            </span>
                            <img className="card-img"
                                src="https://fakeimg.pl/800x300/"
                                alt=""
                            />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore eligendi fugit repudiandae nisi. Magni eum tempore hic, placeat nemo illo numquam suscipit! Dolore a consequuntur aspernatur debitis, harum vero?</p>
                        </div>
                        <div className="card-footer">
                            <ul className="list-inline float-right">
                                <li className="list-inline-item">
                                    <span className="fa fa-link m-1" />
                                    برچسب ها:
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">تست</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">تست</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">تست</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">تست</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Posts;