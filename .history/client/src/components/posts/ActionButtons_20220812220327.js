import Button from "react-bootstrap/esm/Button";
import playIcon from '../../assets/play-btn.svg';
import editIcon from '../../assets/pencil.svg';
import deleteIcon from '../../assets/trash.svg';


const ActionButtons = ({url, _id}) => {
    return (
        <>
        <Button className="post-button" href={url} target='_blank'>

        </Button>
        </>
    )
}

export default ActionButtons
