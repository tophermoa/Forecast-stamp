# Jakarta 5-Day Weather Forecast
Program sederhana untuk menampilkan **prakiraan cuaca 5 hari ke depan di Jakarta** menggunakan OpenWeather API.

## 📌 Fitur
* Mengambil data prakiraan cuaca dari OpenWeather API
* Menampilkan suhu dalam Celsius
* Menampilkan cuaca hari ini dan 5 hari ke depan
* Format tanggal yang mudah dibaca
* Penanganan error sederhana

## ⚒ Cara Kerja
1. Aplikasi mengirim request ke API **5 Day / 3 Hour Forecast** dari OpenWeather.
2. Data pertama dari response digunakan sebagai **cuaca hari ini**.
3. Script memfilter data yang memiliki waktu **00:00:00** untuk mewakili setiap hari berikutnya.
4. Hasilnya ditampilkan dalam bentuk daftar di halaman web.

## ⚡ Endpoint API
```
https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=YOUR_API_KEY&units=metric
```

## ▶️ Cara Menjalankan
* Clone repository:
```
https://github.com/tophermoa/Forecast-stamp.git
```
* Buka folder project
* Jalankan dengan membuka file:
`index.html`

## 🔑 Dapatkan API Key
* Buka https://openweathermap.org/api
* Buat akun
* Generate API Key

## 🔍 Output
![Output Preview](assets/output.PNG)
