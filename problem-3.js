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