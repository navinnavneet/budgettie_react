import { IoAddCircleOutline, IoCloseCircleOutline, IoMenu } from 'react-icons/io5';
import classes from './Icon.module.css';

const icon = props => {
    switch (props.type) {
        case 'add':
            return <IoAddCircleOutline className={classes.Add} />;
        case 'remove':
            return <IoCloseCircleOutline className={classes.Remove} />;
        case 'menu':
            return <IoMenu className={classes.Menu} />;
        default:
            return;
    }
}

export default icon;