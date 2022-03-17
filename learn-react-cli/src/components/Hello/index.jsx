import  {Component} from "react";
import "./index.module.css"
export default class Hello extends Component {
    render() {
        return (
            <div className='hello-app'>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}