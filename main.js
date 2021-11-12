function main()
{
    console.log("Loaded!");

    let car1 = document.querySelector("#image1");
    console.log(car1);
    console.log(car1.children[1]);
    car1.children[1];
}

document.addEventListener("DOMContentLoaded", main);