! function (e) {
    "use strict";
    e(window).on("load", function () {
        e('[data-loader="circle-side"]').fadeOut(), e("#preloader").delay(350).fadeOut("slow"), e("body").delay(350), e("#hero_in h1,#hero_in form").addClass("animated"), e(".hero_single, #hero_in").addClass("start_bg_zoom"), e(window).scroll()
    }), e(window).on("scroll", function () {
        e(this).scrollTop() > 1 ? e(".header").addClass("sticky") : e(".header").removeClass("sticky")
    }), e("#sidebar").theiaStickySidebar({
        additionalMarginTop: 150
    });
    var i = e("nav#menu").mmenu({
            extensions: ["pagedim-black"],
            counters: !1,
            keyboardNavigation: {
                enable: !0,
                enhance: !0
            },
            navbar: {
                title: "MENU"
            },
            navbars: [{
                position: "bottom",
                content: ['<a href="#0">© 2019 GPHU</a>']
            }]
        }, {
            clone: !0,
            classNames: {
                fixedElements: {
                    fixed: "menu_2",
                    sticky: "sticky"
                }
            }
        }),
        t = e("#hamburger"),
        a = i.data("mmenu");

    function n(i) {
        e(i.target).prev(".card-header").find("i.indicator").toggleClass("ti-minus ti-plus")
    }

    function o(i) {
        e(i.target).prev(".panel-heading").find(".indicator").toggleClass("ti-minus ti-plus")
    }

    function o(i) {
        e(i.target).prev(".panel-heading").find(".indicator").toggleClass("ti-minus ti-plus")
    }
    t.on("click", function () {
            a.open()
        }), a.bind("open:finish", function () {
            setTimeout(function () {
                t.addClass("is-active")
            }, 100)
        }), a.bind("close:finish", function () {
            setTimeout(function () {
                t.removeClass("is-active")
            }, 100)
        }), e('a[href^="#"].btn_explore').on("click", function (i) {
            i.preventDefault();
            var t = this.hash,
                a = e(t);
            e("html, body").stop().animate({
                scrollTop: a.offset().top
            }, 800, "swing", function () {
                window.location.hash = t
            })
        }), new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: function (e) {},
            scrollContainer: null
        }).init(), e(".video").magnificPopup({
            type: "iframe"
        }), e(".magnific-gallery").each(function () {
            e(this).magnificPopup({
                delegate: "a",
                type: "image",
                gallery: {
                    enabled: !0
                },
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () {
                        this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                    }
                },
                closeOnContentClick: !0,
                midClick: !0
            })
        }), e('[data-toggle="tooltip"]').tooltip(), e("#accordion_lessons").on("hidden.bs.collapse shown.bs.collapse", n), e(".accordion_2").on("hidden.bs.collapse shown.bs.collapse", n), e(".panel-group").on("hidden.bs.collapse", o), e(".panel-group").on("shown.bs.collapse", o),
        function () {
            var e;

            function i(e) {
                classie.add(e.target.parentNode, "input--filled")
            }

            function t(e) {
                "" === e.target.value.trim() && classie.remove(e.target.parentNode, "input--filled")
            }
            String.prototype.trim || (e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function () {
                return this.replace(e, "")
            }), [].slice.call(document.querySelectorAll("input.input_field, textarea.input_field")).forEach(function (e) {
                "" !== e.value.trim() && classie.add(e.parentNode, "input--filled"), e.addEventListener("focus", i), e.addEventListener("blur", t)
            })
        }(), e(".selectbox").selectbox(), e("input.icheck").iCheck({
            checkboxClass: "icheckbox_square-grey",
            radioClass: "iradio_square-grey"
        }), e("#carousel").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            margin: 0,
            responsive: {
                0: {
                    items: 1,
                    dots: !1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        }), e("#reccomended").owlCarousel({
            center: !0,
            items: 2,
           autoplay:true,
			autoplayTimeout: 3000,
      smartSpeed: 1100,
      loop:true,
		dots: false,
		nav: true,
		navClass: ['owl-prev', 'owl-next'],
		  navText: ["<i class='icon-left-dir'></i>","<i class='icon-right-dir'></i>"],
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        }),e("#popular-courses").owlCarousel({ 
            items: 4,
            autoplay:true,
			autoplayTimeout: 3000,
            smartSpeed: 1100,
            loop:true,
    		dots: false,
    		nav: true,
		    navClass: ['owl-prev', 'owl-next'],
		    navText: ["<i class='icon-left-dir'></i>","<i class='icon-right-dir'></i>"],
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        }), e(window).bind("load resize", function () {
            e(window).width() <= 991 ? e(".sticky_horizontal").stick_in_parent({
                offset_top: 50
            }) : e(".sticky_horizontal").stick_in_parent({
                offset_top: 95
            })
        });
    var s = e(".secondary_nav");
    s.find("a").on("click", function (i) {
        i.preventDefault();
        var t = this.hash,
            a = e(t);
        e("html, body").animate({
            scrollTop: a.offset().top - 180
        }, 800, "swing")
    }), s.find("ul li a").on("click", function () {
        s.find("ul li a.active").removeClass("active"), e(this).addClass("active")
    }), e('#faq_box a[href^="#"]').on("click", function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var i = e(this.hash);
            if ((i = i.length ? i : e("[name=" + this.hash.slice(1) + "]")).length) return e("html,body").animate({
                scrollTop: i.offset().top - 225
            }, 800), !1
        }
    }), e("ul#cat_nav li a").on("click", function () {
        e("ul#cat_nav li a.active").removeClass("active"), e(this).addClass("active")
    })
}(window.jQuery);
