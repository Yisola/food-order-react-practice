import classes from './Card.module.css';

const Card = props => {
    return (
        // just a wrapper component that provides HTML and CSS structure for any content
        // it accepts props because it needs access to props children to get access to the wrapped elements
        <div className={classes.card}>{props.children}</div>
    );
};

export default Card;