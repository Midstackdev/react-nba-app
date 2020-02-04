import React from 'react'

import NewsSlider from '../../../widgets/newsSlider'
import NewsList from '../../../widgets/newsList'

const NewsMain = () => (
    <div>
        <NewsSlider 
            type="featured"
            settings={{dots:false}}
            start={0}
            amount={3}
        />
        <NewsList 
            type="cardMain"
            loadMore={true}
            start={3}
            amount={5}
        />
    </div>
)

export default NewsMain