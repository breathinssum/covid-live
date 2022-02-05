import "./style.css"
import { FunctionComponent } from "react"

interface PropsType {
    isPadding? : boolean
}

const Box: FunctionComponent<PropsType> = (props) => {
     return (
         <div className="box"  style={{
             padding: props.isPadding ? '15px' :0 
             }}>
             {props.children}
         </div>
     )
}

export default Box