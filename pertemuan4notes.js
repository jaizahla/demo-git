let nama = 'jaizah' //string
let umur = 19 //integer
let tinggiBadan = 150 //float
let beratBadan = 42.5 //float
let pacar = 'arkan'

//let namaPanggilan = {
//    "jai", (index 0 krn index mulai dr 0)
//    "jaizah", (index 1)
//    "jaizahla" (index 2)
//}

tinggiBadan = 150;

//  if (pacar == 'arkan') { disini mksdnya klo ngisi nya arkan maka akan menampilkan udah ada, smisal di "let pacar" itu isi nya
//  angka atau nama lain maka yg muncul tulisan belom ada, dan ini tuh diisi di alert

//    pacar= 'udah ada'
//  } else { klo selain arkan bakal nampilin belom ada
//    pacar = 'belom ada'
//  }

tinggiBadan = 150;

switch(pacar){
    case 1: //ini tuh buat diisi di let pacar itu misal let pacar = 1 maka nnt output di notif nya aku punya 1 pacar
        pacar ='punya 1'
        break
    case 2 : //misal let pacar = 2 maka nnt output di notif nya aku punya 2 pacar
        pacar ='punya 2'
        break
    default : //jika lain dr 1 dan 2 maka hasil nya belom ada pacar dgn catatan inputan angka aja dia ga nerima string
     pacar : 'belom ada'
      break

}
console.log(nama)
alert(`nama aku ${nama} umur aku ${umur} tinggi badanku ${tinggiBadan}cm berat badanku ${beratbadan}kg dan pacar ku ${pacar}`)
// console itu muncul nya di inspect
//console.log(namaPanggilan[0]) {krn index 0 brrt  jai yg muncul di inspect}
//namaPanggilan[2] = "jaizah lutfiyah az"; ini tuh semisal mau ganti, misal mau ganti di index ke 2 trus sm dgn itu utk ngasih tau pergantian nya jadi apa yaitu jadi jaizah lutfiyah az dan ini muncul nya di inspect
//console.log(namaPanggilan)
//namaPanggilan[1] = 19; ini cmn buat nyontohin klo mw ganti ke integer bisa
//console.log(namaPanggilan)


let uangAwal = 20000;
let uangTambahan = 10000;
const uangAkhir = uangAwal + uangTambahan
 //constatnta itu tipe data variabel artinya tetap (const dieksekusi per baris)pk const krn nilai tetap dan jg biar semisal uang awal / uang tambahan berubah jumlah nya uang akhir nya ikut ngejumlah sesuai perhitungan (fungsi const)
 //yg artinya dia gabakal berubah dia akan selalu ngikut hasil dr uang awal brp uang tambahan brp klo mau ubah, ubah di uang awal dan uang tambahan
alert(`uang aku awalnya  Rp. ${uangAwal} & dikasih uang sm ortu Rp.${uangTambahan} , jadi total uang aku ada Rp. ${uangAkhir}`)
