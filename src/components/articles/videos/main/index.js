import React from 'react'

import VideosList from '../../../widgets/videosList/'

const VideosMain = () => (
    <div>
        <VideosList 
            type="card"
            title={false}
            loadmore={true}
            start={0}
            amount={8}
        />
    </div>
)

export default VideosMain