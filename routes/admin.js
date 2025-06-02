const express = require('express');
const router = express.Router();

// Admin middleware - yetkilendirme kontrolü
const isAdmin = (req, res, next) => {
    // Burada admin kontrolü yapılacak
    // Örnek: if (req.user && req.user.isAdmin) next();
    // Şimdilik geçici olarak her isteğe izin veriyoruz
    next();
};

// Admin ana sayfa
router.get('/', isAdmin, (req, res) => {
    res.render('admin/index');
});

// Ürün yönetimi
router.get('/products', isAdmin, (req, res) => {
    res.render('admin/products');
});

// Sipariş yönetimi
router.get('/orders', isAdmin, (req, res) => {
    res.render('admin/orders');
});

// Kullanıcı yönetimi
router.get('/users', isAdmin, (req, res) => {
    res.render('admin/users');
});

// Kategori yönetimi
router.get('/categories', isAdmin, (req, res) => {
    res.render('admin/categories');
});

// Ayarlar
router.get('/settings', isAdmin, (req, res) => {
    res.render('admin/settings');
});

module.exports = router; 