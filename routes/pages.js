const express = require('express');
const router = express.Router();

// Ana sayfa
router.get('/', (req, res) => {
    res.render('index');
});

// Statik sayfalar
router.get('/categories', (req, res) => {
    res.render('categories');
});

router.get('/new-arrivals', (req, res) => {
    res.render('new-arrivals');
});

router.get('/order-tracking', (req, res) => {
    res.render('order-tracking');
});

router.get('/return-exchange', (req, res) => {
    res.render('return-exchange');
});

router.get('/faq', (req, res) => {
    res.render('faq');
});

router.get('/sale', (req, res) => {
    res.render('sale');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/search', (req, res) => {
    res.render('search');
});

module.exports = router; 