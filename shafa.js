let nama = 'Shafa Aulia Nadhira' //string
let umur = '20' //integer
let tinggiBadan = 153 //float (kalau ada komanya pakai titik)
let beratBadan = 45
let pacar = 'Alan'
// let namaPanggilan = {
//   "sapa"
//   "shafa",
//   "dhira",
//   "aul"
// }

beratBadan = 45
// if (pacar == "Alan") {
//        pacar = 'udah ada'
//     } else {
//     pacar = 'belum ada'
// }

 tinggiBadan = 153
switch(pacar) {
    case 1:
        pacar = 'punya 1'
        break
    case 2: 
        pacar = 'punya 2'
    break
    default:
        pacar = 'ada'
        break
}

let uangAwal = 50000
let uangTambahan = 20000
const uangAkhir = uangAwal + uangTambahan

console.log(nama)
alert(`nama aing ${nama} usia aing ${umur} tinggi badan aing ${tinggiBadan}cm berat badan aing ${beratBadan}kg pacar aing ${pacar} pacar`)
// console.log(namaPanggilan[0])
// namaPanggilan[2] = "Shafa Aulia N";
// console.log(namaPanggilan)
// namaPanggilan[1] = 20;
// console.log(namaPanggilan)
alert(`Uang aku awalnya Rp.${uangAwal} terus dapat uang dari penghasilan jualan Rp.${uangTambahan} lalu uangku bertambah jadi Rp.${uangAkhir}`)