import React from 'react';
import Link from 'next/link';
import './index.scss'

export default () => (
    <div className='index content'>
        <div className='post'>Post</div>
        <div className='post'>Post</div>
    </div>
    // <ul>
    //     <li>
    //          <Link href="/b" as="/a">
    //                      <a>a</a>
    //     </Link>
    //     </li>
    //     <li>
    //          <Link href="/a" as="/b">
    //                      <a>b</a>
    //     </Link>
    //     </li>
    // </ul>
);