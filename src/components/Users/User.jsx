import React from 'react';




const User = (props) => {
    const {min, src ,alt, name} = props;

    return (/** Размер ячейки профиля */
        <a href='/#'className={min ? 'user min':'user'}>
            <img src= {src} alt={alt}  />

            <div>{name}</div>
        </a>
    )
}

export default User;

// width={60} height={60}