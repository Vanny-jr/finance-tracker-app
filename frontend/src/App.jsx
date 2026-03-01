import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import EditExpenseForm from "./components/EditExpenseForm";

function App(){
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const fetchExpenses = () => {
    fetch('http://localhost:5000/expenses')
        .then(response => response.json())
        .then(data => setExpenses(data))
  }

  useEffect(() => {
    fetchExpenses()
  }, [])
  const handleExpenseUpdated = () => {
    fetchExpenses()
    setSelectedExpense(null)
  }

  return(
    <div className="min-h-screen bg-gray-400">
      <header className="bg-rose-900 text-white p-4">
        <h1 className="text-2xl font-bold">Finance Tracker</h1>
      </header>        
      <div className="max-w-4xl mx-auto p-6">
          <ExpenseForm onExpenseAdded={fetchExpenses} />
          <ExpenseList expenses={expenses} onExpenseDeleted={fetchExpenses} onExpenseEdit={setSelectedExpense}/>
          {selectedExpense && <EditExpenseForm expense={selectedExpense} onExpenseUpdated={handleExpenseUpdated} />}
        </div>
      </div>
  )
} 


export default App;