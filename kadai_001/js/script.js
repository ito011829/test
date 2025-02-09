$(function () {
    // カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        speed: 1500,
    });

    // タイトル&ナビゲーションのアニメーション
    $('.home').on('mouseover', function() {
        $(this).animate({
            opacity: 0.6,
        }, 300);
    });

    $('.menu-about').on('mouseover', function() {
        $(this).animate({
            opacity: 0.6,
        }, 300);
    });

    $('.menu-works').on('mouseover', function() {
        $(this).animate({
            opacity: 0.6,
        }, 300);
    });
    
    $('.home').on('mouseout', function() {
        $(this).animate({
            opacity: 1,
        }, 300);
    });

    $('.menu-about').on('mouseout', function() {
        $(this).animate({
            opacity: 1,
        }, 300);
    });

    $('.menu-works').on('mouseout', function() {
        $(this).animate({
            opacity: 1,
        }, 300);
    });

    // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    // ページ内リンクのスクロールをなめらかにする
    $('a[href^="#"]').click(function () {
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
            $target = $('html');
        } else {
            $target = $(href);
        }
        const position = $target.offset().top;
        $('html, body').animate({'scrollTop': position }, speed, 'swing');
        return false;
    });

    // スクロールしたときにセクションをフェードイン
    $(window).scroll(function() {
        $('section').each(function () {
            const imgPos = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100) {
                $(this).addClass('fade-in');
            }
        });
    });
  });
  