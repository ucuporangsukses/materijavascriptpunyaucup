## 1. fungsi required itu buat maksa inputan ga boleh kosong. Jadi kalo user ga ngisi, form ga bakal bisa ke-submit.

#2. Nah kalo pattern itu gunanya ngecek format inputan sesuai regex. Misalnya buat ngecek ada @ di email:
<input type="email" pattern=".+@.+" required>
kalo semisalkan kaga ada @nya itu bakalan di tolak sama si browser nya

#3. Bedanya min sama minlength
min khusus => buat angka atau tanggal, contoh umur minimal 18.
minlength => khusus teks, contoh nama harus minimal 5 huruf.

#4. Cara cegah form reload pas submit di JS
Default-nya kan form kalo di-submit auto reload tuh. Nah biar ga reload, kita tambahin ini:
<form.addEventListener("submit", function(event) {
  <event.preventDefault();
  <console.log("Form dicegah reloadnya");
});

#5. Bedanya validasi HTML sama JavaScript
HTML => gampang, tinggal pake atribut bawaan kayak required, pattern, dll.
JavaScript => kita bikin logika sendiri, jadi bisa lebih fleksibel (misal password wajib ada angka + huruf besar).
Biasanya sih dipake dua-duanya, HTML buat basic, JS buat validasi yang lebih ribet.
