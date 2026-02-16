const operation = {
id: number,
title: string,
amount: number,
category: string
}

let expenses = []

// 1. Добавление расхода
function addExpense(title, amount, category) {
const newExpense = {
    title: title,
    amount: amount,
    category: category
}
expenses.push(newExpense)
}

// 2. Вывод всех расходов
function printAllExpenses() {
console.log("Все расходы:")
expenses.forEach((expense, index) => {
    console.log(`${index + 1}. ${expense.title} - ${expense.amount} руб. (${expense.category})`)
})
}

// 3. Подсчёт общего баланса
function getTotalAmount() {
const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
console.log(`Общий баланс: ${total} руб.`)
}

// 4. Фильтрация по категории
function filterByCategory(category) {
    if (!category) {
        console.log("Ошибка: Категория не указана")
        return
    }
    
    const filteredExpenses = expenses.filter(expense => expense.category === category)
    
    if (filteredExpenses.length === 0) {
        console.log(`Расходы по категории "${category}" не найдены`)
        return
    }
    
    console.log(`Расходы по категории "${category}":`)
    filteredExpenses.forEach((expense, index) => {
        console.log(`${index + 1}. ${expense.title} - ${expense.amount} руб.`)
    })
}

// 5. Поиск расхода
function findExpenseByTitle(title) {
const foundExpense = expenses.find(expense => expense.title === title)
if (foundExpense) {
    console.log(`Найден расход: ${foundExpense.title} - ${foundExpense.amount} руб. (${foundExpense.category})`)
} else {
    console.log(`Расход с названием "${title}" не найден`)
}
}

//7.1 метод удаления расхода по id
function deleteExpense(id) {
const index = expenses.findIndex(expense => expense.id === id)
if (index !== -1) {
    expenses.splice(index, 1)
    console.log(`Расход с id ${id} удалён`)
} else {
    console.log(`Расход с id ${id} не найден`)
}
}

//7.2 Вывод статистики по категориям
function getCategoryStatistics() {
    const categoryStats = expenses.reduce((stats, expense) => {
        if (!stats[expense.category]) {
        stats[expense.category] = 0
        }
        stats[expense.category] += expense.amount
        return stats
    }
    , {})
    console.log("Статистика по категориям:")
    for (const category in categoryStats) {
        console.log(`${category}: ${categoryStats[category]} руб.`)
    }
}



// 6. Объект управления приложением
    const expenseTracker = 
    {
    expenses: [],
    addExpense,
    getTotalAmount,
    filterByCategory,
    findExpenseByTitle,
    deleteExpense,
    getCategoryStatistics
    }


// Пример использования

expenseTracker.addExpense("Покупка продуктов", 1500, "Еда")
expenseTracker.addExpense("Оплата интернета", 500, "Коммунальные услуги")
expenseTracker.addExpense("Кофе", 200, "Развлечения")
expenseTracker.printAllExpenses()
expenseTracker.getTotalAmount()
expenseTracker.filterByCategory("Еда")
expenseTracker.findExpenseByTitle("Кофе")
expenseTracker.deleteExpense(1)
expenseTracker.getCategoryStatistics()