var site = '';
$(function() {
	console.log( Page.width );
	site = new Site();
	site.init();
});


var Page = {
	width : $(window).width(),
	height : $(window).height(),

};

function Site() {
	this.init = function() {
		$('#nav_toggle').on('click', function() {
			site.toggleMenu();
		});
		if(Page.width < 768) {site.toggleMenu();}
	},
	this.toggleMenu = function() {
		$('#sidebar').toggleClass( 'navhide' );
		$('#content').toggleClass( 'navhide' );
	}
}