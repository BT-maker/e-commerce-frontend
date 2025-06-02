const express = require('express');
const path = require('path');
const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const pageRoutes = require('./routes/pages');

// Route middleware
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

// Login ve Register route'ları
app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/login', (req, res) => {
    // TODO: Login işlemleri
    res.redirect('/');
});

app.post('/register', (req, res) => {
    // TODO: Register işlemleri
    res.redirect('/login');
});

app.post('/', (req, res) => {
    const productId = req.body.productId;
    // Burada sepete ekleme işlemleri yapılabilir
    // Örneğin: session veya veritabanı işlemleri
    
    // Anasayfaya yönlendir
    res.redirect('/');
});

// Ana route'lar
app.use('/', pageRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 