import React, { Component } from 'react';
import getNavLinks from '../services/navLinks';
import UserInfo from './common/userInfo';
import { Avatar } from 'antd';

class Sidebar extends Component {
    render() {
        const navLinks = getNavLinks();
        return (
            <nav
                className="col-md-2 d-done d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <UserInfo
                        imgUrl="https://api.adorable.io/avatars/285/abott@adorable.png"
                        fullname="اسم شخص"
                        text="سمت شغلی"
                    />
                    <hr className="shadow" />
                    <ul className="nav flex-column">
                        {navLinks.map(nav => (
                            <li className="nav-item" key={nav.id}>
                                <a className="nav-link" href={nav.link}>
                                    <span className={nav.icon} />
                                    <span className="m-2">{nav.text}</span>
                                    {nav.count ? (
                                        <span className="badge-danger badge-pill">
                                            {nav.count}
                                        </span>
                                    ) : null}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;
