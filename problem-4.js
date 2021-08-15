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