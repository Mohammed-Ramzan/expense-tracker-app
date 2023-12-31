document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const progressLabel = document.getElementById('progress-label');
    const incomeInput = document.getElementById('income');
    const expenseInput = document.getElementById('expense');
    const incomeDescriptionInput = document.getElementById('income-description');
    const expenseDescriptionInput = document.getElementById('expense-description');
    const incomeNotes = document.getElementById('income-notes');
    const expenseNotes = document.getElementById('expense-notes');
    const addButtonIncome = document.getElementById('add-income-button');
    const addButtonExpense = document.getElementById('add-expense-button');

    let totalIncome = 0;
    let totalExpense = 0;

    addButtonIncome.addEventListener('click', addIncome);
    addButtonExpense.addEventListener('click', addExpense);

    function addIncome() {
        const income = parseFloat(incomeInput.value) || 0;
        const description = incomeDescriptionInput.value;

        if (income > 0) {
            totalIncome += income;
            document.querySelector(".total-income").innerText = totalIncome;
            updateProgressBar();
            updateIncomeNotes(`Income: ${income} "${description}"`);
            incomeInput.value = "";
            incomeDescriptionInput.value = "";
        }
    }

    function addExpense() {
        const expense = parseFloat(expenseInput.value) || 0;
        const description = expenseDescriptionInput.value;

        if (expense > 0) {
            totalExpense += expense;
            document.querySelector(".total-expense").innerText = totalExpense;
            updateProgressBar();
            updateExpenseNotes(`Expense: ${expense} "${description}"`);
            expenseInput.value = "";
            expenseDescriptionInput.value = "";
        }
    }

function updateProgressBar() {
    const targetIncome = 27400;
    const progress = Math.max(0, ((totalIncome - totalExpense) / targetIncome) * 100);
    document.querySelector(".progress-total-amount").innerText = totalIncome - totalExpense;
    progressBar.style.width = `${Math.min(100, progress)}%`;
    progressLabel.textContent = `${Math.min(100, progress).toFixed(2)}%`;
}



    function updateIncomeNotes(note) {
        incomeNotes.textContent += `${note}\n`;
    }

    function updateExpenseNotes(note) {
        expenseNotes.textContent += `${note}\n`;
    }
});
