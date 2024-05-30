import {  AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai"
import './Notification.css'

const iconstyles = {marginRight:"10px"}
const icons = {
    success: <AiOutlineCheckCircle style={iconstyles} />,
    info: <AiOutlineInfoCircle style={iconstyles}/>,
    warning: <AiOutlineWarning style={iconstyles}/>,
    error : <AiOutlineCloseCircle style={iconstyles}/>
}

const Notification = ({type= "info", message, onClose = ()=>{}}) => {
  return <div className={`notification ${type}`}>
    {/* icons */}
    {icons[type]}
    {message}
    <AiOutlineClose color="white" className="closebtn" onClick={()=> onClose()} />
  </div>
  
}

export default Notification