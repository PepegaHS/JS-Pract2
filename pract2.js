
// const operation = {
// id: 0,
// title: "",
// amount: 0,
// category: ""
// }

let currentId = 1

const expenseTracker = {

    expenses1: [],
    expenses2: [],
    currentExpenses: "expenses1", // имя активного массива (свойства)

    getActiveArray() {
        return this[this.currentExpenses]
    },

    switchExpenseArray() {
        if (this.currentExpenses === "expenses1") {
            this.currentExpenses = "expenses2"
            console.log("Переключено на массив расходов 2")
        } else {
            this.currentExpenses = "expenses1"
            console.log("Переключено на массив расходов 1")
        }
    }, 

    addExpense() {
        const title = prompt("Введите название расхода:")
        const amount = parseFloat(prompt("Введите сумму расхода:"))
        const category = prompt("Введите категорию расхода:")

        if (isNaN(amount) || amount <= 0 || !title || !category) {
            console.log("Ошибка: некорректные данные")
            return
        }

        const newExpense = {
            id: currentId++,
            title,
            amount,
            category
        }

        this.getActiveArray().push(newExpense)
    },

    printAllExpenses() {
        const expenses = this.getActiveArray()

        if (expenses.length === 0) {
            console.log("Список пуст")
            return
        }

        expenses.forEach((expense, index) => {
            console.log(`${index + 1}. ${expense.title} - ${expense.amount} руб. (${expense.category})`)
        })
    },

    getTotalAmount() {
        const expenses = this.getActiveArray()

        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
        console.log(`Общий баланс: ${total} руб.`)
    },

    filterByCategory() {
    const category = prompt("Введите категорию:")
    const expenses = this.getActiveArray()

    const filtered = expenses.filter(e => e.category === category)

    if (filtered.length === 0) {
        console.log("Ничего не найдено")
        return
    }

    filtered.forEach((e, i) => {
        console.log(`${i + 1}. ${e.title} - ${e.amount}`)
    })
    },

    findExpenseByTitle() {
    const title = prompt("Введите название:")
    const expenses = this.getActiveArray()

    const found = expenses.find(e => e.title === title)

    if (!found) {
        console.log("Не найдено")
        return
    }

    console.log(`${found.title} - ${found.amount} руб.`)
    },

    deleteExpense() {
    const id = parseInt(prompt("Введите id:"))
    const expenses = this.getActiveArray()

    const index = expenses.findIndex(e => e.id === id)

    if (index === -1) {
        console.log("Не найдено")
        return
    }

    expenses.splice(index, 1)
    console.log("Удалено")
    },

    getCategoryStatistics() {
    const expenses = this.getActiveArray()

    const stats = expenses.reduce((acc, e) => {
        acc[e.category] = (acc[e.category] || 0) + e.amount
        return acc
    }, {})

    for (const category in stats) {
        console.log(`${category}: ${stats[category]} руб.`)
    }
}

}

    function main() {
        console.log("Выбор действия")

            let choice = prompt("Выберите действие:\n"+
            "1 - Добавить расход,\n" +
            "2 - Показать все расходы,\n"+
            "3 - Показать общий баланс,\n"+
            "4 - Фильтровать по категории,\n"+
            "5 - Найти расход по названию,\n"+
            "6 - Удалить расход по id,\n"+
            "7 - Показать статистику по категориям,\n"+
            "8 - Переключить массив расходов,\n"+
            "0 - Выйти.")
            while (choice !== "0") 
            {
                switch (choice) {
                    case "1": // Добавление расхода
                        expenseTracker.addExpense()
                        break

                    case "2": // Показать все расходы
                        expenseTracker.printAllExpenses()
                        break

                    case "3": // Показать общий баланс                   
                        expenseTracker.getTotalAmount()
                        break

                    case "4": // Фильтровать по категории
                        expenseTracker.filterByCategory()
                        break

                    case "5": // Найти расход по названию
                        expenseTracker.findExpenseByTitle()
                        break

                    case "6": // Удалить расход по id
                        expenseTracker.deleteExpense()
                        break

                    case "7": // Показать статистику по категориям
                        expenseTracker.getCategoryStatistics()
                        break

                    case "8": // переключение массивов
                        expenseTracker.switchExpenseArray()
                        break
                    default:
                        console.log("Неверный выбор. Пожалуйста, попробуйте снова.")
                    }   
                choice = prompt("Выберите действие: \n"+
                "1 - Добавить расход,\n" +
                "2 - Показать все расходы,\n"+
                "3 - Показать общий баланс,\n "+
                "4 - Фильтровать по категории,\n "+
                "5 - Найти расход по названию,\n "+
                "6 - Удалить расход по id, \n"+
                "7 - Показать статистику по категориям, \n"+
                "8 - Переключить массив расходов, \n"+
                "0 - Выйти.")
            }
    }  
main()