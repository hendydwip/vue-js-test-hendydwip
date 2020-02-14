const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

function duplicateRemover(city) {
  temp = []
  city.filter(function(kota) {
    if(temp.indexOf(kota) === -1){
      temp.push(kota)
    }
  })
  return temp
} 

console.log(duplicateRemover(city)) 
