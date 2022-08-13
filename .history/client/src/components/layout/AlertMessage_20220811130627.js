import Alert from 'react-bootstrap/Alert';

const AlertMessage = ({ info }) => {
    return info === null ? null : (
        <Alert variant={info.type}>
            <span className="alert-icon"><i class="ni ni-like-2"></i></span>
            <span className="alert-text"><strong>Warning!</strong> This is a warning alert—check it out that has an icon too!</span>
        </Alert>
        // <Alert variant={info.type}>{info.message}</Alert>
    )
}

export default AlertMessage