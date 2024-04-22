import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(event) {
    event.preventDefault();
    const enteredPassword = event.target.querySelector('input[type="password"]').value;
    const { password } = this.state;
    if (enteredPassword === password) {
      this.setState({ authorized: true });
    }
  }

  render() {
    const login = (
      <form onSubmit={this.authorize} action="#">
        <input type="password" placeholder="Password" />
        <input type="submit" />
      </form>
    );

    const contactInfo = (
      <ul>
        <li>Name: John Doe</li>
        <li>Email: johndoe@example.com</li>
        <li>Phone: 123-456-7890</li>
      </ul>
    );


    return (
      <div>
        <h1>{this.state.authorized ? 'Contact' : 'Enter the Password'}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);