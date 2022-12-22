import React, { Component } from 'react'
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Cypher'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: 'Cyphercode'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA