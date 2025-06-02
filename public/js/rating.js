const maxStock = Number('<%= product.stock %>');

// Görsel değiştirme fonksiyonu
function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;
}

// Miktar seçici fonksiyonları
function decreaseQuantity() {
    const input = document.getElementById('quantity');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function increaseQuantity() {
    const input = document.getElementById('quantity');
    if (input.value < maxStock) {
        input.value = parseInt(input.value) + 1;
    }
}

// Tab değiştirme fonksiyonu
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Aktif tab'ı değiştir
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // İlgili içeriği göster
        const tabId = button.getAttribute('data-tab');
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Modal işlemleri
const ratingModal = new bootstrap.Modal(document.getElementById('ratingModal'));
const openModalButton = document.getElementById('openRatingModal');
const ratingStars = document.querySelectorAll('.rating-stars .far.fa-star');

// Modalı aç
openModalButton.addEventListener('click', () => {
    ratingModal.show();
});

// Yıldız derecelendirme işlevselliği
ratingStars.forEach(star => {
    star.addEventListener('mouseover', () => {
        const value = parseInt(star.getAttribute('data-value'));
        ratingStars.forEach((s, index) => {
            if (index < value) {
                s.classList.add('fas');
                s.classList.remove('far');
            } else {
                s.classList.add('far');
                s.classList.remove('fas');
            }
        });
    });

    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        // Burada seçilen değeri (value) kullanarak bir sonraki adımı tetikleyebilirsiniz
        // Örneğin, bir input alanına yazdırabilir veya bir fonksiyona gönderebilirsiniz.
        console.log('Seçilen Derece:', value);
        // İsterseniz burada kalıcı hale getirebilirsiniz:
        // ratingStars.forEach(s => s.classList.remove('active'));
        // for(let i = 0; i < value; i++) {
        //     ratingStars[i].classList.add('active');
        // }
    });

    star.addEventListener('mouseout', () => {
        // Fare çekildiğinde, seçili bir değer yoksa yıldızları sıfırla
        // Eğer seçili bir değer varsa, o değere kadar yıldızları dolu bırak
        // Şu an sadece fare çekildiğinde sıfırlıyoruz
        let hasActive = false;
        ratingStars.forEach(s => {
            if (s.classList.contains('active')) {
                hasActive = true;
            }
        });

        if (!hasActive) {
             ratingStars.forEach(s => {
                s.classList.add('far');
                s.classList.remove('fas');
            });
        }
    });
});
