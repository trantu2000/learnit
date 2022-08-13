import Alert from 'react-bootstrap/Alert'

const AlertMessage =({info}) => {
  return info === null ? null : (
    <Alert></Alert>
  )
}

export default AlertMessage