import React, { Component } from 'react';
import getPosts from '../services/fakePosts';
import Like from './like';
import Pagination from './pagination';
class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        pageSize: 5
    };

    componentDidMount() {
        const posts = getPosts();
        this.setState({ posts });
    }
    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                {posts.map(post => (
                    <div className="container-fluid" key={post.id}>
                        <div className="card shadow-lg bg-light m-2">
                            <article className="p-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <a href="#">{post.postTitle}</a>
                                    </h3>
                                    <span className="card-subtitle">
                                        <span className="fa fa-calendar m-2" />
                                        {post.postDate}
                                    </span>
                                    <img
                                        className="card-img"
                                        src={post.postImageUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        {post.postContent}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <ul className="list-inline float-right">
                                        <li className="list-inline-item">
                                            <span className="fa fa-link m-1" />
                                            برچسب ها:
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">{post.postTags}</a>
                                        </li>
                                    </ul>

                                    <Like post={post} />
                                </div>
                            </article>
                        </div>
                    </div>
                ))}
                <Pagination />
            </React.Fragment>
        );
    }
}

export default Posts;
