import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { firebaseTeams, firebaseArticles, firebaseLooper } from '../../../firebase'

import style from './newslist.module.css'

import Button from '../buttons'
import CardInfo from '../cardInfo'

class NewsList extends Component {
    
    state = {
        teams: [],
        items: [],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            firebaseTeams.once('value')
            .then((snapshot) => {
                const teams = firebaseLooper(snapshot)
                this.setState({
                    teams
                })
            })
        }

        firebaseArticles.orderByChild('id').startAt(start).endAt(end).once('value')
        .then(snapshot => {
            const articles = firebaseLooper(snapshot)
            this.setState({
                items:[...this.state.items, ...articles],
                start,
                end
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end + 1, end)
    }

    renderNews(type) {
        let template = null

        switch(type) {
            case('card'):
                template= this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:style.news_list_wrapper,
                            enterActive:style.news_list_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div key={i}>
                            <div className={style.news_list_item}>
                                <Link to={`/articles/${item.id}`}>
                                    <CardInfo 
                                        teams={this.state.teams}
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ))
                break
            case('cardMain'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter:style.news_list_wrapper,
                            enterActive:style.news_list_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className={style.flex_wrapper}>
                                <div className={style.left}
                                    style={{
                                        background:`url('/images/articles/${item.image}')`
                                    }}
                                >
                                    <div></div>
                                </div>
                                <div className={style.right}>
                                    <CardInfo 
                                        teams={this.state.teams}
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </CSSTransition>
                ))
                break
            default:
                template=''    
        }

        return template

    }
    

    render () {

        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    { this.renderNews(this.props.type) }
                </TransitionGroup>

                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load More News"
                />

            </div>
        )
    }
}

export default NewsList