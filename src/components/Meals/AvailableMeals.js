import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Yam & Egg',
      description: 'Finest yam and egg',
      price: 1500,
    },
    {
      id: 'm2',
      name: 'Stir Fried Rice',
      description: 'A Chinese specialty!',
      price: 2800,
    },
    {
      id: 'm3',
      name: 'Jollof Rice',
      description: 'Nigerian, raw, meaty',
      price: 2000,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 2300,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => ( 
    <MealItem 
    id={meal.id}
    key={meal.id} 
    name={meal.name} 
    description={meal.description} 
    price={meal.price} 
    />));

    return (
        <section className={classes.meals}>
           <Card>
               <ul>{mealsList}</ul>
           </Card>
        </section>
    );
};

export default AvailableMeals;