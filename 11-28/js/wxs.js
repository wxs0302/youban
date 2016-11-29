$(function() {
	my_wallet();
	var seconds = 2;

	function my_wallet() {

		time = setInterval(function() {
			seconds++;

			$("page-2 li").show();

			$(".page-2 li").eq(seconds).css("z-index", "99").find('.show').show().siblings().hide();
			$(".page-2 li").eq(seconds).siblings('li').css("z-index", "88").find('.show').hide().siblings().show();

			$(".page-2-1 li").eq(seconds).addClass('selected_li').siblings().removeClass('selected_li');
			$(".title-1 li").eq(seconds).show().siblings().hide();
			if(seconds >= 4) {
				seconds = -1;
			}

		}, 3000);

	}

	function hover(_index) {

		$(".page-2 li").eq(_index).css("z-index", "99").find('.show').show().siblings().hide();
		$(".page-2 li").eq(_index).siblings('li').css("z-index", "88").find('.show').hide().siblings().show();
		$(".page-2-1 li").eq(_index).addClass('selected_li').siblings().removeClass('selected_li');

		$(".title-1 li").eq(_index).show().siblings().hide();
		seconds = _index;
		clearInterval(time);

	};

	$(".page-2 li").hover(function() {
		var _index = $(this).index();
		hover(_index);

	}, function() {
		my_wallet();

	});

	$(".page-2-1 li").hover(function() {
		var _index = $(this).index();
		hover(_index);

	}, function() {
		my_wallet();

	});

	$(".mobile_btn").click(function() {
		$(".black").show();
		var _left = $(".navigation ul").position().left;
		if(_left < 0) {
			$(".navigation ul").stop(true, false).animate({
				left: "0"
			})
		} else {
			$(".navigation ul").stop(true, false).animate({
				left: "-50%"
			})
		}
	});

	$(".black").click(function() {
		$(this).hide();
		$(".navigation ul").stop(true, false).animate({
			left: "-50%"
		})
	})

$(".toggle").click(function(){
	var _val=$(".toggle-div").is(":hidden");
	if(_val){
	$(this).find('img').css('transform','rotate(90deg)')
	$(".toggle-div").slideDown()
	}else{
		$(this).find('img').css('transform','rotate(0deg)')
	$(".toggle-div").slideUp()
	}
})
$(".toggle-div span").click(function(){
	$(this).addClass("spanS")
})

$(".off-btn").click(function(){
	$(".made-div").fadeOut()
})
$(".made").click(function(){
	$(".made-div").fadeIn()
})


})