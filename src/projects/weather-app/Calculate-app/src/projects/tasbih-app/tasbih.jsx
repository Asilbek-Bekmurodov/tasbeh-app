import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../tasbih-app/main.scss'
class Tasbih extends Component {
  state = {
    count: 0,
    count2: 0
  }
  back = (num = 1) => { this.setState({ count: this.state.count2 }) }
  dic = (num = 1) => { this.setState({ count: this.state.count + num, count2: this.state.count }) }

  _reset = (num = 0) => { this.setState({ count: 0, count2: this.state.count }) }

  render() {
    return <>
      <div className="container tasbih">
        <div className="row text-center">
          <div className="col">
            <div onClick={() => this.dic()} className="display">
              <div>
                <h1 >{this.state.count}</h1>
                <h3>Count</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button onClick={() => this._reset()} className="btn btn-danger ">Reset</button>
              <button onClick={() => this.dic()} className="btn btn-success ms-3">Count</button>
              <button onClick={() => this.back()} className="btn btn-info ms-3">Back</button>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
export default Tasbih;
