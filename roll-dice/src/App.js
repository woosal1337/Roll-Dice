import React from "react"
import './index.css';


class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            dice1: "https://woosal.com/1337/1.png",
            dice2: "https://woosal.com/1337/2.png"
        }
        this.buttonHandle = this.buttonHandle.bind(this)
    }

    randomGen(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    buttonHandle(event) {
        event.preventDefault()

        var dice1 = `https://woosal.com/1337/${this.randomGen(1, 6)}.png`
        var dice2 = `https://woosal.com/1337/${this.randomGen(1, 6)}.png`

        this.setState({
            dice1: dice1,
            dice2: dice2
        })

    }

    render() {
        return (
            <div className="center">
                <div className="center">
                    <form>
                        <div className="center">
                            <button type="submit" id="submit-button" onClick={this.buttonHandle}>Roll Dice</button>
                        </div>
                    </form>

                    <img alt="" src={this.state.dice1}/>
                    <img alt="" src={this.state.dice2}/>
                </div>
            </div>


        )
    }
}

export default App;
