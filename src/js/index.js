// import './library/jquery.js';
$(function() {
    $("img.lazy").lazyload({ effect: "fadeIn" });
    $.ajax({
        type: "get",
        url: "../../interface/getData.php",
        dataType: "json",
        success: function(res) {
            console.log(res);
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.picture);

                // console.log(picture[0].src);

                temp += `  <li class="phone-sell">
                <a href="../html/detail.html?id=${elm.id}">
                    <div class="phone-img">
                    <img  src="${picture[0].src}" alt="">
                    </div>
                    <h3 class="phone-xm11">${elm.title}</h3>
                    <p class="phone-desc">${elm.details}</p>
                    <p class="phone-price">
                        <span>${elm.price}</span>元起
                        
                    </p>
                </a>
            </li>`

            });

            $('.phones1').append(temp);
        }
    });
});
$(function() {
    console.log(1)
    let oli = document.querySelectorAll('.home-app1 .home-tab>li');
    for (let i = 0; i < oli.length; i++) {
        oli[i].addEventListener('mouseenter', function() {
            console.log(i)
            $(this).addClass('active').siblings().removeClass('active');
            $('.content2').children().eq(i).siblings().removeClass('show').addClass('hide');
            $('.content2').children().eq(i).removeClass('hide').addClass('show');
            console.log($(this).addClass('active').siblings())
        });
    }
    let futuer = new Date(2021, 1, 15, 20, 0, 0);
    setInterval(function() {
        let now = new Date();
        let s = parseInt((futuer - now) / 1000);
        let hour = parseInt(s % 86400 / 3600);
        let min = parseInt(s % 3600 / 60);
        let sec = parseInt(s % 60);

        sec = '0' + sec;
        sec = sec.slice(-2, );
        min = '0' + min;
        min = min.slice(-2, );
        hour = '0' + hour;
        hour = hour.slice(-2, );
        $('#hour').html(hour)
        $('#min').html(min)
        $('#sec').html(sec)
        console.log(sec)
    }, 1000)
});