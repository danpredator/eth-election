import React,{ Component }from 'react';
import './App.css';
import Main from './Main.js'

class App extends Component {
  render() {
  return (
    <div>
    <nav className="navbar fixed-top bg-dark flex-md-nowrap p-2 shadow">
          <span
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-white"
          >
             Decentralized App for US election
          </span>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">0xvdbfvi34</span></small>
            </li>
          </ul>
      </nav>

    <div class="container" >
      <div class="row">
        <div class="col-lg-12">
          
          <h1 class="text-center">Election Results</h1>
          
           <main role="main" className="col-lg-12 d-flex mt-4">
              { false
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  />
              }
            </main>

        </div>
      </div>
    </div>
  </div>
  );
 }
}

export default App;
