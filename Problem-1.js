
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