### What do you know about Vue ?
Yang saya tahu tentang Vue merupakan suatu library javascript

### How to define data in Vue ?
Deklarasi Vue di tag ```script```
```javascript
new Vuew({
  data:{
    name:'Hendy'
  }
})
```

### In Vue What lifecycle you can run after instance created ?
Mounted

### How to bind vue property to page ?
Untuk bind ke page, vue perlu menembak ke id pusat contoh <div id='app'></div>, lalu di script Vue
```javascript
new Vuew({
  el:'#app'
})
```

### How to trigger an event and handling it in Vue ?
Contoh untuk trigger seperti click pada button bisa menggunakan v-on:click='' atau secara singkat menggunakan @click=''

### What usage of Computed Properties ?

### What usage of Watch Properties ?
Untuk melihata perubahan pada data

### How to handling input in Vue ?
Untuk menyatukan data value untuk input bisa menggunakan :value='namaData' atau bisa menggunakan v-model='namaData'

### How to make class html tag receive property ?
Contoh untuk bind properti class dengan cara menambahkan v-bind:class='' atau singkatnya hanya menggunakan :class=''

### How to make conditional rendering in vue ?
Pada tag html di berikan v-if, dan pada level yang sama dengan tag sebelumnya diberikan v-else

### How we can render list in vue ?
Yang dimaksud mungkin perulangan menggukanan v-for, contoh memiliki data Array. Lalu declare perulangan di tag list seperti berikut <li v-for='array in DataArray'></li>

### If we rendering list there must be bind key tag describe usage of it ?
Berguna untuk menandai setiap node yang render

### How we can handling input in vue ?
Soal sama seperti sebelumnya

### What is props describe it ?
Sama seperti deklarasi data, contoh seperti ini
```javascript
new Vuew({
  props:{
    name:String
  }
})
```

### What is component in vue ?


### How to pass property from parent component to child component ?
Menggunakan props

### What is Vuex ?
Yang saya tahu, vuex merupakan tempat penyimpanan data terpusat