import { useState } from "react";

function ExpenseForm( {onExpenseAdded}) {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    function handleSubmit(e)  { // This function handles the form submition
        e.preventDefault() // This prevents the html file from refreshing since it would cause website to lose all data by default
        fetch('http://localhost:5000/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount, category, date})
        })
            .then(() => {
                setAmount('')
                setCategory('')
                setDate('')
                onExpenseAdded()
            })
            .catch((error) => console.log(error))
    }
return(
    <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-red-900 mb-4">Add New Expense</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="text-gray-700 font-semibold">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="border border-gray-300 roundee p-2"/>
            <label className="text-gray-700 font-semibold">Category</label>
            <input type="text" value={amount} onChange={(e) => setCategory(e.target.value)} className="border border-gray-300 roundee p-2"/>
            <label className="text-gray-700 font-semibold">Date</label>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="border border-gray-300 roundee p-2"/>
            <br />
            <button type="submit" className="bg-red-900 text-white p-2 rounded hover:bg-gray-700">Add Expense</button>
        </form>
    </div>
)
}

export default ExpenseForm;