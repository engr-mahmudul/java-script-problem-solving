// Problem-1

function seerToMon(seer) {
    // Error Handleing
    if (typeof seer != "number") {
        return "Parameter in wrong format,Put a nmuber as a parameter..!";
    }
    // Conversion
    else {
        const mon = seer / 40;
        return mon;
    }

}
let output = seerToMon(80);
console.log(output);



// Problem-2

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    // Error Handling
    if ((typeof shirtQuantity != "number") || (typeof pantQuantity != "number") || (typeof shoeQuantity != "number")) {
        return "Wrong parameter format, All the three must have in Number format";
    }
    // Total Cost Calculation
    else {
        let shirtPrice = 100;
        let pantPrice = 200;
        let ShoePrice = 500;
        let totalCost = (shirtPrice * shirtQuantity) + (pantPrice * pantQuantity) + (ShoePrice * shoeQuantity);
        return totalCost;
    }

}
let output = totalSales(1, 1, 1);
console.log(output);

// Problem-3

function deliveryCost(quantity) {
    // Error Handleing
    if (typeof quantity != "number") {
        return "Parameter in wrong format,Put a nmuber as a parameter..!";
    }
    // Devlivery Cost Counting
    else {
        // Calculation between 0-100
        if (quantity <= 100) {
            let perProductCost = 100;
            let totalCost = perProductCost * quantity;
            return totalCost;
        }
        // Calculation between 101-200
        else if (quantity <= 200) {
            let before100Cost = 100;
            let before100Total = before100Cost * 100;
            let restOfQuantity = quantity - 100;
            let after100Cost = 80;
            let after100Total = after100Cost * restOfQuantity;
            let totalCost = before100Total + after100Total;
            return totalCost;

        }
        // Calculation more than 200
        else {
            let before100Cost = 100;
            let before100Total = before100Cost * 100;
            let between101To200Cost = 80;
            let between101To200Total = between101To200Cost * 100;
            let restAmount = quantity - 200;
            let restCost = 50;
            let restTotal = restAmount * restCost;
            let totalCost = before100Total + between101To200Total + restTotal;
            return totalCost;

        }
    }
}

let output = deliveryCost(250);
console.log(output);

// Problem-4

function perfectFriend(names) {
    // Error Handleing
    if (typeof names != "object") {
        return "Parameter in wrong format,Put an array as a parameter..!";
    }
    else {
        for (let name of names) {
            if (name.length == 5)
                return name;
        }
        return "There has no name for five letters";

    }
}
let names = ["habi", "jabi", "sabi", "roton", "robin"];
output = perfectFriend(names);
console.log(output);