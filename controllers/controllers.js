const defaulRoute = (req, res) => {
    res.render('index');
}

const aboutRoute = (req, res) => {
    res.render('about');
}

const galleryRoute = (req, res) => {
    res.render('gallery');
}

const contactRoute = (req, res) => {
    res.render('contact');
}

module.exports = {defaulRoute, aboutRoute, galleryRoute, contactRoute}