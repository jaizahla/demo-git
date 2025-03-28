let nama = 'Jaizah lutfiyah azzahra' //string
let umur = '19' //integer
let tinggiBadan = 150 //float (kalau ada komanya pakai titik)
let beratBadan = 42.5
let pacar = 'Arkan'
// let namaPanggilan = {
//   "jai"
//   "jaizah",
//   "jaizahla",
// }

beratBadan = 42.5
// if (pacar == "Arkan") {
//        pacar = 'udah ada'
//     } else {
//     pacar = 'belum ada'
// }

 tinggiBadan = 150
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
alert(`nama ku ${nama} usia ku ${umur} tinggi badan ku ${tinggiBadan}cm berat badan ku ${beratBadan}kg pacar ku ${pacar} ganteng`)
// console.log(namaPanggilan[0])
// namaPanggilan[2] = "Jaizah Lutfiyah Az";
// console.log(namaPanggilan)
// namaPanggilan[1] = 20;
// console.log(namaPanggilan)
alert(`Uang aku awalnya Rp.${uangAwal} terus dapat uang dari ortu Rp.${uangTambahan} lalu uangku bertambah jadi Rp.${uangAkhir}`)
