 // Fungsi untuk menampilkan hasil
 function displayResult() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Mohon masukkan berat badan dan tinggi badan yang valid.");
        return;
    }

    // Menghitung BMI
    var heightInMeter = height / 100;
    var bmi = weight / (heightInMeter * heightInMeter);

    // Menentukan kategori berat badan
    var category = "";
    if (bmi < 18.5) {
        category = "Berat badan Anda kurang";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Berat badan Anda normal (Ideal)";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Berat badan Anda berlebih";
    } else {
        category = "Berat badan Anda terlalu berlebihan (Obesitas)";
    }

    // Menampilkan hasil bmi dan kategori
    document.getElementById("bmi").innerHTML = bmi.toFixed(1);
    document.getElementById("result-category").innerHTML = category;

    var description = "";
    var explain = "";
    var explain2 = "";
    if (bmi < 18.5) {
        description = "Hasil BMI Anda kurang dari 18.5";
        explain = "Anda berada dalam kategori Kekurangan berat badan. Untuk mencapai berat badan yang sehat, Anda disarankan untuk meningkatkan asupan makanan yang bergizi dan mempertimbangkan untuk melakukan olahraga secara teratur.";
        explain2 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terakir dengan berat badan Anda";
        effect2="Beberapa hal yang dapat disebabkan oleh kekurangan berat badan	:"
        sideEffects = "<ol type=\"1\">" +
             "<li>Kekurangan Gizi: Kekurangan berat badan dapat mengakibatkan defisiensi nutrisi, seperti kekurangan vitamin dan mineral.</li>" +
             "<li>Osteoporosis: Kurangnya massa tulang akibat kekurangan berat badan dapat meningkatkan risiko osteoporosis, yang membuat tulang rentan terhadap patah tulang.</li>" +
             "<li>Sistem Kekebalan Tubuh yang Lemah: Kekurangan berat badan dapat melemahkan sistem kekebalan tubuh, membuat individu lebih rentan terhadap infeksi dan penyakit.</li>" +
             "<li>Menstruasi Tidak Teratur: Pada wanita, kekurangan berat badan yang signifikan dapat mengganggu siklus menstruasi.</li>" +
             "</ol>";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = "Hasil BMI Anda antara 18.5 - 24.9";
        explain = "Anda berada dalam kategori Normal (Ideal). Pertahankan pola makan seimbang dan rutin berolahraga untuk mendukung kesehatan dan kesejahteraan Anda.";
        explain2 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terakir dengan berat badan Anda";
        effect2="Beberapa hal yang dapat dilakukan untuk mempertahankan berat badan sehat Anda	:"
        sideEffects = "<ol type=\"1\">" +
             "<li>Pola Makan Sehat: Konsumsi makanan yang seimbang dan bergizi, termasuk banyak buah, sayuran, biji-bijian utuh, dan protein sehat seperti daging tanpa lemak, ikan, dan kacang-kacangan.</li>" +
             "<li>Olahraga Teratur: Lakukan aktivitas fisik secara teratur. Pilih jenis olahraga yang Anda nikmati dan lakukan minimal 30 menit setiap hari atau sesuai dengan rekomendasi dari ahli kesehatan.</li>" +
             "<li>Minum Air yang Cukup: Pastikan Anda terhidrasi dengan baik dengan minum air yang cukup setiap hari. Hindari minuman manis dan beralkohol yang tinggi kalori.</li>" +
             "<li>Jaga Pola Tidur yang Baik: Dapatkan tidur yang cukup setiap malam. Kurang tidur dapat memengaruhi hormon yang mengatur nafsu makan dan menyebabkan peningkatan berat badan.</li>" +
             "</ol>";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        description = "Hasil BMI Anda antara 25.0 - 29.9";
        explain = "Anda berada dalam kategori Kelebihan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        explain2 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terakir dengan berat badan Anda";
        effect2="Beberapa hal yang dapat disebabkan oleh kelebihan beraat badan	:"
        sideEffects = "<ol type=\"1\">" +
             "<li>Penyakit Jantung dan Pembuluh Darah: Kegemukan meningkatkan risiko penyakit jantung koroner, penyakit arteri koroner, stroke, dan hipertensi.</li>" +
             "<li>Diabetes Tipe 2: Kegemukan adalah faktor risiko utama untuk mengembangkan diabetes tipe 2.</li>" +
             "<li>Kolesterol Tinggi: Kegemukan dapat menyebabkan peningkatan kadar kolesterol dalam darah, meningkatkan risiko penyakit kardiovaskular.</li>" +
             "<li>Sleep Apnea: Kegemukan dapat menyebabkan gangguan tidur yang serius seperti sleep apnea obstruktif.</li>" +
             "</ol>";
    } else {
        description = "Hasil BMI Anda lebih dari 30.0";
        explain = "Anda berada dalam kategori Kegemukan (Obesitas). Untuk meningkatkan kesehatan Anda secara keseluruhan, penting untuk mengurangi kalori dan meningkatkan aktivitas fisik. Berbicara dengan profesional kesehatan dapat membantu merencanakan langkah-langkah yang tepat untuk mencapai berat badan yang lebih sehat.";
        explain2 = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terakir dengan berat badan Anda";
        effect2="Beberapa hal yang dapat disebabkan oleh obesitas	:"
        sideEffects = "<ol type=\"1\">" +
             "<li>Gagal Jantung: Obesitas meningkatkan risiko gagal jantung</li>" +
             "<li>Penyakit Hati Berlemak Nonalkoholik (NAFLD): Obesitas adalah faktor risiko utama untuk NAFLD, yang dapat berkembang menjadi sirosis hati.</li>" +
             "<li>Osteoartritis: Obesitas meningkatkan tekanan pada sendi, meningkatkan risiko osteoartritis.</li>" +
             "<li>Kesehatan Mental: Obesitas dapat berkontribusi pada masalah kesehatan mental seperti depresi.</li>" +
             "</ol>";
    }

    // Menampilkan hasil penjelasan
    document.getElementById("descrip").innerHTML = description;
    document.getElementById("explanation").innerHTML = explain;
    document.getElementById("explanation-2").innerHTML = explain2;
    document.getElementById("effect").innerHTML = sideEffects;
    document.getElementById("effects").innerHTML = effect2;
    // Menampilkan tombol "Konsultasi Ahli Gizi"
    document.getElementById("consultant-button").style.display = "block";
}

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("bmi").innerHTML = "0";
    document.getElementById("result-title").innerHTML = "Hasil BMI Anda";
    document.getElementById("result-category").innerHTML = "";
    document.getElementById("descrip").innerHTML = "";
    document.getElementById("explanation").innerHTML = ""; // Mengosongkan penjelasan BMI
    document.getElementById("explanation-2").innerHTML = ""; // Mengosongkan penjelasan BMI
    document.getElementById("effect").innerHTML = "";
    document.getElementById("effects").innerHTML = "";
    // Menyembunyikan tombol "Konsultasi Ahli Gizi"
    document.getElementById("consultant-button").style.display = "none";

    // Reset jenis kelamin
    document.getElementById("sex-man").checked = false;
    document.getElementById("sex-woman").checked = false;
}

// Tombol "Hitung BMI"
document.getElementById("calculate-button").addEventListener("click", displayResult);

// Tombol "Reset"
document.getElementById("reset-button").addEventListener("click", resetForm);