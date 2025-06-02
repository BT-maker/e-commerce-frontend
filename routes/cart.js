const express = require('express');
const router = express.Router();

// Sepet sayfası
router.get('/', (req, res) => {
    // TODO: Sepet verilerini veritabanından al
    const cart = {
        items: [],
        subtotal: 0,
        shipping: 0,
        discount: 0,
        total: 0
    };
    res.render('cart', { cart });
});

// Ödeme sayfası
router.get('/checkout', (req, res) => {
    res.render('checkout');
});

module.exports = router; 