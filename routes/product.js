const express = require('express');
const router = express.Router();

// Örnek ürün verisi
const sampleProduct = {
    id: 1,
    name: "Premium Deri Cüzdan",
    code: "PRD-2024-001",
    mainImage: "/images/cuzdan1.png",
    images: [
        "/images/cuzdan1.png",
        "/images/cuzdan2.png",
        "/images/cuzdan3.png",
        "/images/cuzdan4.png",
       
    ],
    price: 1299.99,
    oldPrice: 1599.99,
    discount: 20,
    rating: 4.5,
    reviewCount: 128,
    stock: 50,
    description: "Yüksek kaliteli deri malzemeden üretilmiş şık ve dayanıklı cüzdan.",
    features: [
        "Gerçek deri malzeme",
        "Çoklu kart bölmesi",
        "Para bölmesi",
        "Şık tasarım",
        "Dayanıklı yapı"
    ],
    fullDescription: "Bu premium deri cüzdan, en kaliteli deri malzemeden üretilmiştir. Çoklu kart bölmesi ve geniş para bölmesi ile günlük kullanım için idealdir. Şık tasarımı ve dayanıklı yapısı ile uzun yıllar kullanabileceğiniz bir üründür. İç bölmeleri özel olarak tasarlanmış olup, kartlarınızı ve paralarınızı düzenli bir şekilde taşımanızı sağlar.",
    specifications: [
        { name: "Malzeme", value: "Gerçek Deri" },
        { name: "Renk", value: "Siyah" },
        { name: "Boyut", value: "11 x 8 x 2 cm" },
        { name: "Kapasite", value: "12 Kart + Para Bölmesi" },
        { name: "Garanti", value: "2 Yıl" }
    ],
    reviews: [
        {
            userName: "Ahmet Y.",
            rating: 5,
            date: "15.03.2024",
            content: "Çok kaliteli bir ürün, kesinlikle tavsiye ederim. Deri kalitesi çok iyi ve kullanımı çok rahat."
        },
        {
            userName: "Mehmet K.",
            rating: 4,
            date: "10.03.2024",
            content: "Fiyatı biraz yüksek ama kalitesi buna değer. Deri kalitesi ve işçiliği çok iyi."
        },
        {
            userName: "Ayşe S.",
            rating: 5,
            date: "05.03.2024",
            content: "Eşime hediye aldım, çok beğendi. Deri kalitesi ve tasarımı harika."
        }
    ],
    relatedProducts: [
        {
            id: 2,
            name: "Deri Kemer",
            price: 599.99,
            image: "/images/cuzdan2.png"
        },
        {
            id: 3,
            name: "Deri Çanta",
            price: 2499.99,
            image: "/images/cuzdan2.png"
        },
        {
            id: 4,
            name: "Deri Ayakkabı",
            price: 1899.99,
            image: "/images/cuzdan2.png"
        }
    ]
};

// Ürün detay sayfası
router.get('/:id', (req, res) => {
    // TODO: Ürün verilerini veritabanından al
    // Şimdilik örnek ürünü kullanıyoruz
    const product = sampleProduct;
    res.render('product-detail', { product });
});

module.exports = router; 