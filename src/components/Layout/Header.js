import { Fragment } from "react";

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
        // wrapping with fragment because I can have just one root element.
         <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            {/* onShowCart is passed to the header from App.js to manage the visibility of cart through state  */}
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        {/* css class with a dash in it like main-image is wrapped in square bracket to reference it */}
        <div className={classes['main-image']}>
            <img src={mealsImage} alt= 'A table full of delicious food!' />
        </div>
    </Fragment>
    );
};

export default Header;