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