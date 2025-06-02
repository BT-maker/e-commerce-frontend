const express = require('express');
const router = express.Router();

// User middleware - yetkilendirme kontrolü
const isAuthenticated = (req, res, next) => {
    // Burada kullanıcı kontrolü yapılacak
    // Örnek: if (req.user) next();
    // Şimdilik geçici olarak her isteğe izin veriyoruz
    next();
};

// Kullanıcı ana sayfa
router.get('/', isAuthenticated, (req, res) => {
    res.render('user/index');
});

// Siparişler
router.get('/orders', isAuthenticated, (req, res) => {
    res.render('user/orders');
});

// Kullanıcı Profili
router.get('/profile', isAuthenticated, (req, res) => {
    res.render('user/profile');
});

// Profil güncelleme
router.post('/profile/update', isAuthenticated, (req, res) => {
    // Profil güncelleme işlemleri burada yapılacak
    res.redirect('/user/profile');
});

// Şifre değiştirme
router.post('/profile/change-password', isAuthenticated, (req, res) => {
    // Şifre değiştirme işlemleri burada yapılacak
    res.redirect('/user/profile');
});

// Adresler
router.get('/addresses', isAuthenticated, (req, res) => {
    res.render('user/addresses');
});

// Favoriler
router.get('/favorites', isAuthenticated, (req, res) => {
    res.render('user/favorites');
});

// Favori ekleme/çıkarma
router.post('/favorites/toggle/:productId', isAuthenticated, (req, res) => {
    // Favori ekleme/çıkarma işlemleri burada yapılacak
    res.json({ success: true });
});

// Listeler
router.get('/lists', isAuthenticated, (req, res) => {
    res.render('user/lists');
});

// Yeni liste oluşturma
router.post('/lists/create', isAuthenticated, (req, res) => {
    // Liste oluşturma işlemleri burada yapılacak
    res.redirect('/user/lists');
});

// Liste silme
router.delete('/lists/:listId', isAuthenticated, (req, res) => {
    // Liste silme işlemleri burada yapılacak
    res.json({ success: true });
});

// Kuponlar
router.get('/coupons', isAuthenticated, (req, res) => {
    res.render('user/coupons');
});

// Kupon ekleme
router.post('/coupons/add', isAuthenticated, (req, res) => {
    // Kupon ekleme işlemleri burada yapılacak
    res.redirect('/user/coupons');
});

// Değerlendirmeler
router.get('/reviews', isAuthenticated, (req, res) => {
    res.render('user/reviews');
});

// Hesap ayarları
router.get('/settings', isAuthenticated, (req, res) => {
    res.render('user/settings');
});

// Destek Talepleri
router.get('/support', isAuthenticated, (req, res) => {
    res.render('user/support');
});

// Yeni destek talebi oluşturma
router.post('/support/create', isAuthenticated, (req, res) => {
    // Destek talebi oluşturma işlemleri burada yapılacak
    res.redirect('/user/support');
});

// Destek talebi detayı
router.get('/support/:ticketId', isAuthenticated, (req, res) => {
    // Destek talebi detayı görüntüleme
    res.render('user/support-detail');
});

// Çıkış işlemi
router.get('/logout', (req, res) => {
    // TODO: Session temizleme
    res.redirect('/');
});

module.exports = router; 