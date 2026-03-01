
// Getting the items in the database to display on the frontend
function ExpenseList({expenses, onExpenseDeleted, onExpenseEdit }){
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/expenses/${id}`, {
            method: 'DELETE'
        }
        )
            .then(response => response.json())
            .then(() => onExpenseDeleted())
    }
    return(
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-bold text-yellow-900 mb-4">My Expenses</h2>
            {expenses.map(expense => 
                <div key={expense._id} className="border border-gray-200 rounded p-4 mb-3 flex justify-between items-center">
                    <div>
                        <p className="font-bold text-gray-800">Ksh {expense.amount}</p>
                        <p className="font-bold text-gray-800">Items: {expense.category}</p>                     
                        <p className="font-bold text-gray-800">Date:{expense.date}</p>
                    </div>
                    <div className="flex-gap-7">
                        <button onClick={() => handleDelete(expense._id)} className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-grey-900">Delete</button>
                        <button onClick={() => onExpenseEdit(expense)} className="bg-red-900 text-white px-3 py-1 rounded hover:bg-grey-900">
                            Edit
                        </button>
                    </div>

                </div>
            )}

        </div>
    )
}

export default ExpenseList;