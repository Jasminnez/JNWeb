// define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]");
// language translations
var language = {
    ba: {
        home: "Po�etna",
        About: "O meni",
        Skills: "Sposobnosti",
        Resume: "Biografija",
        Contact: "Kontakt",
        AboutMe: " Ja sam Jasmin Neziri�, po zanimanju sam In�enjer Informacijskih Sistema i tehnologija. Ro�en sam 13.11.1995. godine u Jablanici.",
        AboutMeContinue: "Trenutno �ivim u Jablanici, gdje sam zavr�io osnovno obrazovanje. Srednju gra�evinsku �kolu zavr�avam u Mostaru, te sti�em zvanje Geodetski tehni�ar. Nakon srednje �kole upisujem i zavr�avam Fakultet Informacijskih tehnologija i sti�em zvanje Bachelor-In�enjer Informacijskih sistema i tehnologija. Marljiv sam, vedar, stru�an, savjesan, odgovoran i spreman za nove izazove i nova radna iskustva. Poznajem engleski jezik u govoru i pismu, i njema�ki jezik nivo A1.",
        h2About: "O meni",
        h2Skills: "Sposobnosti",
        SkillsAbout: "Za vrijeme studiranja imao sam se priliku upoznati sa raznim programima, programskim, opisnim i stilskim jezicima i raditi sa njima na vje�bama i projektima koje sam izvodio na fakultetu",
        h2Resume: "Biografija",
        EducationSubtitle: "U narednoj sekciji �u Vam ukratko opisati svoje dosada�nje obrazovanje.",
        EducationTitle: "Obrazovanje",
        h4Degree: "In�enjer Informacijskih sistema i tehnologija",
        Faculty: "Fakultet informacijskih tehnologija",
        AboutFaculty: "Fakultetsko obrazovanje mi je dalo �irok spektar teoretskog znaja, ali i uvid u prakti�ne aspekte, te sam imao priliku da se upoznam sa raznim vje�bama, projektima, programima, programskim jezicima koje sam imao priliku raditi na fakultetu.",
        HighSchoolDegree: "Geodetski tehni�ar",
        HighSchoolAbout: "Po zavr�etku Srednje gra�evinske �kole sti�em zvanje Geodetski tehni�ar",
        HighSchool: "Srednja gra�evinska �kola",
        Udemy: "Udemy - Online kurs",
        h2Contact: "Kontakt",
        LocationTitle: "Lokacija",
        CallTitle: "Telefon",

    },
    eng: {
    }
};
// define lenguage via window hash
if (window.location.hash) {
    if (window.location.hash === "#ba") {
        home.textContent = language.ba.home;
        About.textContent = language.ba.About;
        Skills.textContent = language.ba.Skills;
        Resume.textContent = language.ba.Resume;
        Contact.textContent = language.ba.Contact;
        AboutMe.textContent = language.ba.AboutMe;
        AboutMeContinue.textContent = language.ba.AboutMeContinue;
        h2About.textContent = language.ba.h2About;
        h2Skills.textContent = language.ba.h2Skills;
        SkillsAbout.textContent = language.ba.SkillsAbout;
        EducationSubtitle.textContent = language.ba.EducationSubtitle;
        EducationTitle.textContent = language.ba.EducationTitle;
        h4Degree.textContent = language.ba.h4Degree;
        Faculty.textContent = language.ba.Faculty;
        AboutFaculty.textContent = language.ba.AboutFaculty;
        HighSchoolDegree.textContent = language.ba.HighSchoolDegree;
        HighSchoolAbout.textContent = language.ba.HighSchoolAbout;
        HighSchool.textContent = language.ba.HighSchool;
        Udemy.textContent = language.ba.Udemy;
        h2Contact.textContent = language.ba.h2Contact;
        LocationTitle.textContent = language.ba.LocationTitle;
        CallTitle.textContent = language.ba.CallTitle;
    }
}
// define language reload onclick illiteration
for (i = 0; i <= dataReload.length; i++) {
    $(dataReload[i]).on('click', function () {
        window.location.hash = $(this).attr('href')
        location.reload(true);

    })
};

function myFunction(x) {
    x.classList.toggle("change");
}

var dugme = document.getElementById("button");
var nav = document.getElementById("nav-menu");
if (document.documentElement.clientWidth <= 992) {
    nav.style.maxHeight = "0px";
}
$(dugme).on('click', function () {
    if (nav.style.maxHeight === "0px") {
        nav.style.display = "block";
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else 
        nav.style.maxHeight = "0px";  
})
//var submitButton = $("submit");
//var succesDiv = $("sent-message");
//var errorDiv = $("error-message");
//$(submitButton).on('click', function () {
//    succesDiv.style.display = "block";
//    errorDiv.style.display = "block";
//})


    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var check = false;
            return this.optional(element) || regexp.test(value);
        },
        "Please check your input."
    );

    $("#ContactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 5
            }
        }
    });

!(function ($) {
    "use strict";

    // Preloader
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
    });

    // Hero typed
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    $(document).on('click', '.nav-menu a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top;

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });
    // Navigation active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop() + 300;

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 200) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    // Filter
    $(window).on('load', function () {
        // Initiate venobox (lightbox feature used in portofilo)
        $('.venobox').venobox({
            'share': false
        });

        // Initiate aos_init() function
        aos_init();
    });
})(jQuery);
