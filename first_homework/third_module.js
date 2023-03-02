class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

function querySort(arr, str) {

    let strSplit = str.split("&").map(el => el.split(/-/));
    for (let itemParams of strSplit) {
        if (itemParams[1].match(/<|>|<=|>=|=/)) {
            let mathParams = itemParams[1].replace(/>=|<=|=|<|>/gi, (arg) => {
                return arg + " "
            }).split(" ")
            itemParams[1] = mathParams[0];
            itemParams[2] = mathParams[1];
        }
    }



    const searchHelper = (itemParams, el) => {

        let operations = [
            { name: "=", value: function (sortedValue, queryValue) { return +sortedValue == +queryValue } },
            { name: ">", value: function (sortedValue, queryValue) { return +sortedValue > +queryValue } },
            { name: "<", value: function (sortedValue, queryValue) { return +sortedValue < +queryValue } },
            { name: "<=", value: function (sortedValue, queryValue) { return +sortedValue <= +queryValue } },
            { name: ">=", value: function (sortedValue, queryValue) { return +sortedValue >= +queryValue } },
            { name: "contains", value: function (sortedValue, queryValue) { return sortedValue.match(new RegExp(`${queryValue}`, 'gi')) } },
            { name: "starts", value: function (sortedValue, queryValue) { return sortedValue.match(new RegExp(`^${queryValue}`, 'gi')) } },
            { name: "ends", value: function (sortedValue, queryValue) { return sortedValue.match(new RegExp(`${queryValue}$`, 'gi')) } }
        ]

        let serachField = itemParams[0];
        let queryParam = itemParams[1];
        let queryValue = itemParams[2];

        for (let ind = 0; ind < operations.length; ind++) {
            if (operations[ind].name == queryParam) {
                return operations[ind].value(el[serachField], queryValue);
            }
        }
    }

    let array = arr;
    let sortArr = [];

    for (let itemParams of strSplit) {
        if (array.length > 0) {
            array.filter(el => {
                if (searchHelper(itemParams, el) != null) {
                    sortArr.push(el);
                }
            })
            array = sortArr;
            sortArr = [];
        } else {
            return "Not found";
        }
    }
    return array;
}

//Начало теста
let products = [//Созадем массив и заполняем его данными
    new Product("Test1", 1000, 100, "Test-description1"),
    new Product("Test2", 2000, 200, "Test-description2"),
    new Product("Test3", 3000, 300, "Test-description3"),
    new Product("Test4", 4000, 400, "Test-description4"),
]
const query = "name-contains-st&price-<=3000&quantity->100&description-ends-3" //Создаем параметр для выполнения теста
let sortedArr = querySort(products, query)//Выполняем запрос на сортировку по параметру
console.log(sortedArr);//вывод результата
//Конец теста