## lifecycle hooks

React calls these hooks in order.
- Mount - When an instnce of the component is created and inserted in the DOM.
    1 constructor
    2 render
    3 componentDidMount
    
- Update - When state/props of the component changes.
    1 render
    2 componentDidUpdate

- Unmounted - When components is removed from the DOM.
    1 componentWillUnmount



Construnctor-
    Always initialize once and to be called super in it.
    pass parameter only will recognize the props.
    constructor (props) {
        super(props);
        console.log("App - constructor", this.props)
        this.state = this.props.something
    }

componentDidMount-
    After constructor
    Get the data from the server and set the state.
    componentDidMount(){
        // Ajax calls
        // this.setState({})
    }

componentDidUpdate-
    after a component is updated.
    we have new state and new props
    compare this new state with the old state and if required call Ajax
    this can be used as an optimization technique.
    componentDidUpdate(prevProps, prevState){
        if (this.prevProps.counter.value !== this.props.counter.value){
        // Ajax call from server
        }
    }