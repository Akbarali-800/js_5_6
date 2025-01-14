const myArray = ["element1", "element2", "element3", "element4"];

console.log("Array uzunligi: " + myArray.length);
alert("Array uzunligi: " + myArray.length);

const uzunlik = confirm("Arraydan bitta element olib tashlashni xohlaysizmi?");

if (uzunlik) {
    myArray.pop();
    console.log("Yangi array: ", myArray);
    alert("Arraydan bitta element olib tashlandi. Yangi uzunlik: " + myArray.length);
} else {
    console.log("Array o'zgarmadi: ", myArray);
    alert("Array o'z holicha qoldi. Uzunlik: " + myArray.length);
}
