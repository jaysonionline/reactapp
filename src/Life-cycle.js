import React from 'react'

class LifeCycle extends React.Component {


    constructor(props){
        super(props);

        console.log("constructor method called");
        console.log('props', props)

        this.state = {
            name:"lemon",
            height: 50,
            fruits: true
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps method called");
        console.log('props getDerived', props)
        console.log("prevState", state)

        return null;
    }


    componentDidMount(){
        console.log("componentDidMount method called");
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate method called");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate method called");

        return null;
    }

    componentDidUpdate(){
        console.log("componentDidUpdate method called");
    }


    componentWillUnmount(){
        console.log("componentWillUnmount method called"); 
    }


    render() {

        return(
            <h1> Life cycle of components </h1>
        )
    }

}

export default LifeCycle;