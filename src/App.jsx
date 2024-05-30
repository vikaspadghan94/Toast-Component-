
import './App.css'
import useNotification from './hooks/use-notification'

function App() {
// Custom hook for notification position
const { notificationComponent, triggerNotification } = useNotification("bottom-left")

  return (
    <div>
      Toast Components
      {/* <Notification type='success' message={"new notification"}/> */}
      <button onClick={()=>triggerNotification({
        type: "success",
        message: "file send successfully",
        duration:3000,
      }
      )}>Trigger Success</button>
      <button onClick={()=>triggerNotification({
        type: "error",
        message: "file send Failed",
        duration:3000,
      }
      )}>Trigger error</button>
      {notificationComponent}
    </div>
  )
}

export default App
