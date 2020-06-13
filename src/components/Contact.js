import React, { Component } from 'react'
// Make it so submit button sends form to my email or private database

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div id="section-title">
                    <h1>CONTACT</h1>
                </div>
                <div id="contact-text">
                    <p>Any Questions? Comments? Business Inquiries?</p>
                    <p>Leave me a message!</p>
                </div>
                <div id="contact-form">
                    <form>
                        <div id="form-row">
                            <input placeholder="Name" type="text" name="name" required/>
                        </div>
                        <div id="form-row">
                            <input placeholder="Email" type="email" name="email" required/>
                        </div>
                        <div id="form-row">
                        <textarea placeholder="Your Message" type="text" name="message"></textarea>
                        </div>
                        <input id="submit" type="submit" value="SUBMIT"/>
                    </form>
                </div>
            </section>
        )
    }
}
