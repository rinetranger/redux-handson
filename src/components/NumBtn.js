import React from 'react';
import PropTypes from 'prop-types';

export default class NumBtn extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

NumBtn.propTypes={
onClick:PropTypes.func.isRequired,
};

