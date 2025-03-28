//deklarasi fungsi kalkulator menggunakan arrow function
const calculator = (operator, ...numbers) => {

//inisialisasi hasil dgn angka pertama dlm array. numbers sbg niali awal result
//mksdnya ambil angka pertama dr numbers dan disimpan di result
let result = numbers[0];

//objek yg menyimpan fungsi operator berdasarkan operator
const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '%': (a, b) => a % b
};



//loop utk melakukan operasi pd semua angka dlm array
//loop dimulai dr index 1 yg mana merupakan angka ke 2
//Ini adalah perulangan yang mulai dari angka kedua (i = 1) sampai angka terakhir.Setiap iterasi, result akan dihitung dengan angka selanjutnya.
//misal result = 10 (angka pertama dari numbers)
// maka Iterasi pertama (i = 1) ,result = 10 + 3 = 13
//Iterasi kedua (i = 2) result = 13 + 5 = 18. Akhirnya, hasil akhir 18 dikembalikan dengan: return result
for (let i = 1; i < numbers.lenghth; i++){
    result = operators[operators](result, numbers[i]);
   
}
    //mengembalikan hasil akhir
    return Result;
};

//penggunaan berbagai operasi
console.log(calculator('+',5,3));
//output : 8 (5+3)
console.log(calculator('-',5,3));
//output : 2 (5-3)
console.log(calculator('*',5,3));
//output : 15 (5 dikali 3)
console.log(calculator('/',10,2));
//output : 1 (10 dibagi 2)
console.log(calculator('%',10,3));
//output : 5 (10 modulus 3)

//contoh eror
console.log(calculator('x',5,3));
//output : "operator tidak valid"


alert(`kalkulator siap digunakan`) // notifikasi saat halaman dimuat


