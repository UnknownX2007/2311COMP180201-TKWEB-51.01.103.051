$(document).ready(function() {
    const backgrounds = [
        "url('https://i.pinimg.com/736x/70/8e/86/708e86f5581f823b949da730ee6432bf.jpg')", // Nền 1 (Mặc định)
        "url('https://i.pinimg.com/736x/7b/2f/37/7b2f3725b5149a9bd80e995fdf5ad101.jpg')", // Nền 2 (Nghĩa địa)
        "url('https://www.katebackdrop.com/cdn/shop/products/kate_halloween_rainbow_photo_backdrop_10x8ft_BH1029151U.jpg?v=1626683346&width=1501')", // Nền 3 (Rừng ma)
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXK4IbKgoG8j7mrGuJ7NfzWXrUSjGiTVd01w&s')"  // Nền 4 (Bí ngô)
    ];
    let currentBgIndex = 0;

    $('#btn-change-bg').click(function() {
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        $('body').css('background-image', backgrounds[currentBgIndex]);
    });

    const bgMusic = $('#bg-music')[0];
    
    $('#btn-music').click(function() {
        if (bgMusic.paused) {
            bgMusic.play();
            $(this).text('Tắt Nhạc');
        } else {
            bgMusic.pause();
            $(this).text('Phát Nhạc');
        }
    });

    $('.product-item h3').click(function() {
        $(this).next('.product-details').slideToggle();
    });

});