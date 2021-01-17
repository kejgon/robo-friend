import React from 'react';



const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',
            borderRadius: '10px',
            padding: '20px',
            marginTop: '20px',
            height: '500px',
            boxShadow: '5px 5px 15px 5px #000000'
        }}>
            {props.children}
        </div>
    )

}

export default Scroll;