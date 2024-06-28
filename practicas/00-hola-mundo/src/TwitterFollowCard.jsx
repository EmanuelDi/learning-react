import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({ children, userName }) {
    const [isFollowing, setIsFollowing] = useState(false)

    /*const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className="tw-followCard-avatar" src={`https://unavatar.io/${userName}`} alt="El avatar de Juan" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    
    )
}