import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Layout from './hoc/layout/layout'
import NewsArticle from './components/articles/news/post'
import VideoArticle from './components/articles/videos/video'
import NewsMain from './components/articles/news/main'
import VideosMain from './components/articles/videos/main'

class Routes extends Component {
    render () {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/news" exact component={NewsMain}/>
                    <Route path="/videos" exact component={VideosMain}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                    <Route path="/videos/:id" exact component={VideoArticle}/>
                </Switch>
            </Layout>     
        )
    }
}

export default Routes