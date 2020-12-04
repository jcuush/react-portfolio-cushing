
import React from 'react'

const Contact = () => {
    return (
        <div>
            <main class="container">
                <section class="row">
                    <div class="col-md-8">
                        <form class="block form-horizontal">
                            <h1 class="block-header">Contact</h1>
                            <hr />
                            <div class="form-group">
                                <label for="inputEmail">Email address</label>
                                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            </div>
                                <div class="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="password" class="form-control" id="inputName" placeholder="Name"></input>
                                </div>
                                    <div class="form-group">
                                        <label for="message">Message</label>
                                        <input type="message" class="form-control" id="message" placeholder="Message"></input>
                                    </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact