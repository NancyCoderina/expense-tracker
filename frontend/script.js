const expenseForm = document.getElementById("expenseForm")

let editingExpenseId = null

const searchInput = document.getElementById("searchInput")
const filterCategory = document.getElementById("filterCategory")


// ====================
// ADD EXPENSE
// ====================

expenseForm.addEventListener("submit", async function (event) {

    event.preventDefault()

    const title = document.getElementById("title").value
    const amount = document.getElementById("amount").value
    const category = document.getElementById("category").value

    const response = await fetch("http://localhost:3000/api/expenses", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            title: title,
            amount: Number(amount),
            category: category
        })
    })

    const data = await response.json()

    console.log(data)

    expenseForm.reset()

    getExpenses()
})


// ====================
// GET EXPENSES
// ====================

async function getExpenses() {

    const response = await fetch("http://localhost:3000/api/expenses")

    const expenses = await response.json()


    // Search and Category Filter

    const searchText = searchInput.value.toLowerCase()

    const selectedCategory = filterCategory.value


    const filteredExpenses = expenses.filter(expense => {

        const matchesSearch = expense.title
            .toLowerCase()
            .includes(searchText)


        const matchesCategory =
            selectedCategory === "" ||
            expense.category === selectedCategory


        return matchesSearch && matchesCategory
    })


    // Total Amount

    const total = expenses.reduce((sum, expense) => {

        return sum + expense.amount

    }, 0)


    document.getElementById("totalAmount").innerText = total


    // Expense List

    const expenseList = document.getElementById("expenseList")

    expenseList.innerHTML = ""


    filteredExpenses.forEach(expense => {

        const div = document.createElement("div")

        div.className = "expense-card"


        div.innerHTML = `
            <div>
                <h3>${expense.title}</h3>
                <p>₹${expense.amount}</p>
                <span class="category-badge">${expense.category}</span>
            </div>
        `


        // ====================
        // DELETE BUTTON
        // ====================

        const deleteButton = document.createElement("button")

        deleteButton.innerText = "Delete"


        deleteButton.addEventListener("click", async function () {

            await fetch(
                `http://localhost:3000/api/expenses/${expense._id}`,
                {
                    method: "DELETE"
                }
            )

            getExpenses()
        })


        // ====================
        // EDIT BUTTON
        // ====================

        const editButton = document.createElement("button")

        editButton.innerText = "Edit"


        editButton.addEventListener("click", function () {

            // Expense ID save karo

            editingExpenseId = expense._id


            // Edit form show karo

            document.getElementById("editFormContainer").style.display = "block"


            // Existing data form me fill karo

            document.getElementById("editTitle").value = expense.title

            document.getElementById("editAmount").value = expense.amount

            document.getElementById("editCategory").value = expense.category

        })


        // Buttons ko card me add karo

        div.appendChild(deleteButton)

        div.appendChild(editButton)


        // Card ko list me add karo

        expenseList.appendChild(div)

    })
}


// ====================
// UPDATE EXPENSE
// ====================

const editForm = document.getElementById("editForm")


editForm.addEventListener("submit", async function (event) {

    event.preventDefault()


    const title = document.getElementById("editTitle").value

    const amount = document.getElementById("editAmount").value

    const category = document.getElementById("editCategory").value


    await fetch(
        `http://localhost:3000/api/expenses/${editingExpenseId}`,
        {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: title,
                amount: Number(amount),
                category: category
            })
        }
    )


    // Edit form hide karo

    document.getElementById("editFormContainer").style.display = "none"


    // Updated list load karo

    getExpenses()

})


// ====================
// SEARCH
// ====================

searchInput.addEventListener("input", function () {

    getExpenses()

})


// ====================
// CATEGORY FILTER
// ====================

filterCategory.addEventListener("change", function () {

    getExpenses()

})


// ====================
// PAGE LOAD
// ====================

getExpenses()