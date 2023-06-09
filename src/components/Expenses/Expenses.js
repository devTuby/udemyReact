import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card'

const Expenses = (props) => {

  return (
    <Card className="expenses">
      {props.items.map((item) => (  
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
