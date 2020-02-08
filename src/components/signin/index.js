import React, { Component } from 'react'
import styles from './signin.module.css'

import FormField from '../widgets/formFields' 

class SignIn extends Component {

    state = {
        registerError: '',
        loading: false,
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
        }
    }

    updateForm = (element) => {
        const newFormData = {
            ...this.state.formdata
        }

        const newElement = {
            ...newFormData[element.id]
        }
        newElement.value = element.event.target.value
        newFormData[element.id] = newElement

        this.setState({
            formdata: newFormData
        })
    }

    render() {
        return (
            <div className={styles.login_container}>
                <form>
                    <h2>Login / Register</h2>
                    <FormField 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}
                    />

                    <FormField 
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    />
                </form>
            </div>
        )
    }
}

export default SignIn