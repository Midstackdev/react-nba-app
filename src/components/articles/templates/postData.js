import React from 'react'
import moment from 'moment'

import style from '../articles.module.css'

const formatDate = (date) => {
    return moment(date).format(' MM-DD-YYYY')
}

const PostData = (props) => {
    return (
        <div className={style.article_post_data}>
            <div>
                Date:
                <span>{formatDate(props.data.date)}</span>
            </div>
            <div>
                Author:
                <span>{props.data.author}</span>
            </div>
        </div>
    )
}

export default PostData