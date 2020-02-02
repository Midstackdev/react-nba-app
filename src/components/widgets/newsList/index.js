import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../../config'
import style from './newslist.module.css'

class NewsList extends Component {
    
    state = {
        items: [],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount,
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then((response) => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }

    renderNews(type) {
        let template = null

        switch(type) {
            case('card'):
                template= this.state.items.map((item, i) => (
                    <div key={i}>
                        <div className={style.news_list_item}>
                            <Link to={`/article/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                    </div>
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
                { this.renderNews(this.props.type) }
                <div onClick={() => this.loadMore()}>
                    Load More
                </div>
            </div>
        )
    }
}

export default NewsList