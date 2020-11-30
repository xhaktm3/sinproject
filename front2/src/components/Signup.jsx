import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
  state = {
    username:'',
    password:'',
  }

  appChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  appEnter = (e) =>{
    if(e.key === 'Enter'){
      this.appClick();
    }
  }

  //회원가입 시도 액션
  appClick = () =>{
    fetch('http://whale.sparcs.org:52313/api/auth/signup',{
          method: "POST",
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            username : this.state.username,
            password : this.state.password,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.access_token) {
              this.props.history.push("/");
            } else if (!response.access_token) {
              alert("ID already exist");
              this.props.history.push("/signup");
            }
          });
  }

  render() {
    const {appChange, appClick, appEnter} = this;
    return (
      <div className="Signup">
        <header className="Signup-header">
          <h1>
            SIGN UP
          </h1>
          <div>
            <label for="username">아이디</label>
            <input className="username" placeholder="Username" name="username" type="text" value={this.state.user} onChange={appChange}/>
          </div>
          <div>
            <label for="password">비밀번호</label>
            <input className="password" placeholder="Password" name="password" type="password" value={this.state.password} onChange={appChange} onKeyPress={appEnter}/>
          </div>
            <button onClick ={appClick} className="App-signup2"> 
              Sign up
            </button>
        </header>
      </div> 
    );
  }
}

export default withRouter(Signup);