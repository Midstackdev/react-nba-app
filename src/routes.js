import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Layout from './hoc/layout/layout'
import NewsArticle from './components/articles/news/post'

class Routes extends Component {
    render () {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/articles/:id" exact component={NewsArticle}/>
                </Switch>
            </Layout>     
        )
    }
}

export default Routes