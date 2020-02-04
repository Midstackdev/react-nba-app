import React from 'react'
import styles from '../videoslist.module.css'

import VideosListTemplate from '../videosListTemplate'

const VideosRelated = (props) => {
    
    return (
        <div className={styles.related_wrapper}>
            <VideosListTemplate 
                data={props.data}
                teams={props.teams}
            />
        </div>
    )
}

export default VideosRelated