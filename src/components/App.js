import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from '../actions';

class App extends React.Component {
    render() {
        const { counter, onIncrementClick } = this.props;

        return (
            <div>
                <button onClick={() => { onIncrementClick(1); }} >Increment 1</button>
                <button onClick={() => { onIncrementClick(10); }} >Increment 10</button>
                <b>Total: </b> {counter}
            </div>
        )
    };
}

const mapStateToProps = (state) => {
    return { counter: state }
};

const mapDispatchToProps = {
    onIncrementClick: incrementAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);