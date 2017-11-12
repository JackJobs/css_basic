$(function() {
	'use strict'
	var sidebar = $('#sidebar')
	var mask = $('.mask')
	var trigger = $('.sidebar-trigger')
	var backButton = $('.back-to-top')

	function showSidebar() {
		mask.fadeIn()
		sidebar.animate({'right': 0})
	}

	function hideSidebar() {
		mask.fadeOut()
		sidebar.animate({'right': -sidebar.width()})
	}

	trigger.on('click', showSidebar)
	mask.on('click', hideSidebar)
	backButton.on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800)
	})

	$(window).on('scroll', function() {
		if($(window).scrollTop() > $(window).height())
			backButton.fadeIn()
		else 
			backButton.fadeOut()
	})

	$(window).trigger('scroll')
})