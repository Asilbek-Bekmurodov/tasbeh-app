import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../tasbih-app-2/main-2.scss'
class Tasbih2 extends Component {
  state = {
    count: 0,

    count2: 0,
    total: 0,
    idx: 0
  }
  arr2 = Array(9).fill()
  arr = ["Subhanallah", "Alhamdulillah", "Allahu Akbar"];
  back = (num = 1) => { this.setState({ count: this.state.count2 }) }
  handleCount = () => {
    if (this.state.count === 33) {
      this.setState({ count: 0 })
    } else {
      this.setState({
        count: this.state.count + 1,
      })
    }
    this.setState({ total: this.state.total + 1 })
    if (this.state.idx > 2) {
      this.setState({ idx: 0 })
    }
    if (this.state.count === 33) {
      this.setState({ idx: this.state.idx + 1 })
    }
  }
  _reset = (num = 0) => { this.setState({ count: 0, total: 0 }) }

  render() {
    return <>

      <div className="container tasbih2">
        <div className="row text-center">
          <header>
            <nav>
              <div>
                <button onClick={() => this._reset()} className="btn btn-outline-dark fs-5 btn-dark">Hart Reset <i class="fa-solid fa-arrow-rotate-left"></i></button>
              </div>
              <div className="tasbih-total">
                <div>
                  <h1> <span>{this.state.count}</span> / 33</h1>
                  <div className="total">
                    <h2>Jami:{this.state.total}</h2>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <h1 className="mt-1">{this.arr[this.state.idx]}</h1>
          <div className="tasbeh-zone container">

            <div onClick={this.handleCount} className="control-zone">
              <div className="circle">
                {
                  this.arr2.map(i => <span><i></i></span>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
export default Tasbih2;
