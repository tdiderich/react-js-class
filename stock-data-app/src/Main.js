import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Stock Data For Today</h1>
                <ul>
                    <li>Microsoft: {this.props.microsoftValue}</li>
                    <li>Twitter: {this.props.twitterValue}</li>
                    <li>Amazon: {this.props.amazonValue}</li>
                    <button onClick={this.props.increase}>Increase Stock Values</button>
                    <button onClick={this.props.decrease}>Descrease Stock Values</button>
                    <button onClick={this.props.jumble}>Jumble Data</button>
                </ul>
                <ul>
                    {
                        this.props.values.map((items) => {
                            if (items.value <= 100) {
                                return <li className="Morning" key={items.company}>{items.company}: {items.value}</li>
                            } else if (items.value > 100 && items.value <= 200) {
                                return <li className="Afternoon" key={items.company}>{items.company}: {items.value}</li>
                            } else {
                                return <li className="Night" key={items.company}>{items.company}: {items.value}</li>
                            }
                        }
                        )

                    }
                    <button onClick={this.props.increase2}>Increase Stock Values</button>
                    <button onClick={this.props.decrease2}>Descrease Stock Values</button>
                    <button onClick={this.props.jumble2}>Jumble Data</button>
                </ul>
            </div>
        )
    }
}

export default Main;