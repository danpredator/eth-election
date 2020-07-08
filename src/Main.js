import React,{ Component }from 'react';
import './App.css';

class Main extends Component {
  render() {
  return (
    <div class="container" >
      
      <div id="content" >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Votes</th>
            </tr>
          </thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Votes</td>
          </tr>

          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Votes</td>
          </tr>
        </table>

        <hr/>
        <form onSubmit="" class="text-center">//App.castVote(); return false;
          <div class="form-group">
            <label for="candidatesSelect">Select Candidate : &nbsp;</label>
            <input id="candi" type="radio" name="candi"
            required /> candi 1   &nbsp;
            <input id="candi" type="radio" name="candi"
            required /> candi 2
          </div>
          <button type="submit" class="btn btn-primary">Vote</button>
        </form>

        <p id="accountAddress" class="text-center">your accountAddress is jhvdah</p>
      </div>
    </div>
    
  );
 }
}

export default Main;
