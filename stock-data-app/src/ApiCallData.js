import React from 'react';

function ApiCallData(props) {
    return (
        props.stockData.map((items) =>
            <div key={items.mic}>
                <h1>{items.longName}</h1>
                <p>This acronym is: {items.mic}</p>
            </div>
        )
    )
}

export default ApiCallData;