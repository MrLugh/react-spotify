import React from 'react';
import {Spin} from 'antd';

let style = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 4,

        background: '#5a5a5a5a'
    }
};

export default ({size = 'large'}) => (
    <div style={style.container}>
        Espere unos segundos, por favor.
        <Spin size={size} />
    </div>
);
