import React from 'react'

import NewsSlider from '../widgets/newsSlider'
import NewsList from '../widgets/newsList'

const Home = () => {
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={0}
                amount={6}
                settings={{
                    dots: false
                }}
            />

            <NewsList
                type="card"
                loadMore={true}
                start={3}
                amount={3}
            />
        </div>
    )
}

export default Home