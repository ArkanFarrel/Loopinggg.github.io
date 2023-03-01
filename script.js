//Ada lima mcam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2.
//yaitu Counted loop and Uncounted loop
//Perbedaannya:
//1. Counted loop merupakan perulangan yang jelas dan sudah tentu banyak perulangaannya.
//2. Uncounted loop merupakan perulangan yang tidak jelas berapa kali hrus mengulang.
//contoh Counted loop:
// function PushUp(){
    //CODE
// }
// for(i = 0; i<10; i++){
//     PushUp();
// }

// let bosan;
//Contoh uncounted loop:
// while(bosan == false){
//     PushUp();
// }

//Macam2 perulangan Counted loop:
//1. Perulangan for
//2. perulangan foreach
//3. perulangan repeat

//macam2 perulangan Uncounted loop:
//1. perulangan while
//2. perulangan do/while

//perulangan FOR
//perulangan FOR merupakan perulangan yang termasul dalam counted loop, karena sudah jelas berapa kali akan mengulang sebuah perulangan.
//Contoh:
// for(let i = 0; i < 100; i++){
//     document.write(`<p>Perulangan ini berulang ${i} kali </p>`)
// }

//perulangan while
//Perulangan while merupakan perulangan yang termasuk ke dalam perulangan uncounted loop namun, perulangan while juga dapat masuk atau menjadi
//perulangan yang counted loop dengan memberikan sebuah counter didalamnya.

//Contoh
// let ulang = confirm("apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("apakah anda mau mengulang?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//     }
// }

// document.write("perulangan sudah dilakukan sebanyak " + counter + "kali");

//Perulangan Do/While
//Perulangan do/while sama seperti perulangan while.

//perbedaannya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam
// kurung while.

// do{
//     //CODE
// }while(kondisi);

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);

// document.write("pengulangan yang sudah dilakukan sebanyak " + counter +" kali");

// let Sum = "";
// while(true){
//     let value = prompt ("Masukkan sebuah angka","");
//     if(!value) break;

//     Sum += value;
// }

// alert(`Sum :` + sum);

let sum = "";
while(true){
    let value = prompt("masukan sebuh huruf",'');
    if(!value) break;
    sum+= value
}
alert('kata yang anda masukan adalah : ' + sum)