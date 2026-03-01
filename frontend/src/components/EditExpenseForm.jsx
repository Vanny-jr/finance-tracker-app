import { useState } from "react"

function EditExpenseForm({expense, onExpenseUpdated}) {
    const [amount, setAmount] = useState(expense.amount);
    const [category, setCategory] = useState(expense.category);
    const [date, setDate] = useState(expense.date);
    const handleSubmit = (e) => {
        e.preventDefault()
           fetch(`http://localhost:5000/expenses/${expense._id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({amount, category, date})
            })
            .then(() => {
                setAmount('')
                setCategory('')
                setDate('')
                onExpenseUpdated()
            })
    }

    return(
        <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3" >
                <label className="text-gray font-semibold">Edit your amount: </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="border border-green-300 rounded p-2"/>
                <label className="text-gray font-semibold">Edit the Category: </label>
                <input type="text"  value={category} onChange={(e) => setCategory(e.target.value)} className="border border-green-300 rounded p-2"/>
                <label className="text-gray font-semibold">Edit dates</label>
                <input type="date"  value={date} onChange={(e) => setDate(e.target.value)} className="border border-green-300 rounded p-2"/>
                <br />
                <button type='submit' className="text-white border border-red bg-red-900 hover:bg-grey-900 rounded p-2">Update Expense</button>
                
            </form>
        </div>
    )

}

export default EditExpenseForm