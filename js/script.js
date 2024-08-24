$(document).ready(function(){
	$(window).on('load', function(){
		/*TweenMax.to(window, 1, {delay:0.5, scrollTo:{y:0}});*/ 
	});
	$(".image-holder").not(".product-desc").on("mouseenter", function(){
		TweenMax.to($(this).find(".image-desc"), 0.5, {ease:Back.easeOut, top:"-50%"});
		TweenMax.to($(this).find(".image-holder-container"), 0.5, {ease:Back.easeOut, "background-position":"0% 10%"});
	});

	$(".image-holder").not(".product-desc").on("mouseleave", function(){
		TweenMax.to($(this).find(".image-desc"), 0.5, {ease:Back.easeOut, top:"1%"});
		TweenMax.to($(this).find(".image-holder-container"), 0.5, {ease:Back.easeOut, "background-position":"0% 50%"});
	});

	function tlComplete(){
		tl.restart();
	};

	var tl = new TimelineMax({
		onComplete:tlComplete
	});
	tl.insert( TweenMax.staggerTo(".news-item", 4, {	
		delay:1,
    	top:"-150px",
    	ease: SlowMo.ease.config(0.7, 0.7, false)
    }, 4) );
	/*tl.to($(".news-item")[0], 0.1, {top:"-200px"})
	*/
    /*tl.insert( TweenMax.staggerTo(".news-item", 4, {	
		opacity:0.2,
    	ease: Expo.easeIn
    }, 3) );*/
});