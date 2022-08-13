import Alert from 'react-bootstrap/Alert';

const AlertMessage =({info}) => {
  return info === null ? null : (
    <Alert variant={info.type}></Alert>
  )
}

export default AlertMessage