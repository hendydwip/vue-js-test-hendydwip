const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

function duplicateRemover(city) {
  temp = []
  for(value of city){
    if(temp.indexOf(value) === -1){
      temp.push(value)
    }
  }
  return temp
} 

console.log(duplicateRemover(city)) 
