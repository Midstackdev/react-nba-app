import React, { Component } from 'react'
import { firebaseDB, firebaseTeams, firebaseLooper } from '../../../../firebase'

import style from '../../articles.module.css'

import Header from './header'


class NewsArticles extends Component {

    state = {
        article: [],
        team: []
    }

    componentWillMount() {
        firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
        .then(snapshot => {
            let article = snapshot.val()

            firebaseTeams.orderByChild('teamId').equalTo(article.team).once('value')
            .then(snapshot => {
                const team = firebaseLooper(snapshot)
                this.setState({
                    article,
                    team
                })
            })
        })
    }

    render () {
        const article = this.state.article
        const team = this.state.team

        return (
            <div className={style.article_wrapper}>
                <Header 
                    teamData={team[0]}
                    date={article.date}
                    author={article.author}
                />
               <div className={style.article_body}>
                   <h1>{article.title}</h1>
                   <div className={style.article_image}
                    style={{
                        background: `url('/images/articles/${article.image}')`
                    }}
                   >
                   </div>
                   <div className={style.article_text}>
                        {article.body}
                   </div>
               </div>
            </div>
        )
    }
}

export default NewsArticles
