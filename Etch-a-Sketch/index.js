$(document).ready(function () {
    buildGrid(small);
    etch();
    defaultetch();
    clearScreen();
    shader();
    color();
    trailing();
    smallsq();
    mediumsq();
    largesq();
});

var small = 120;
var medium = 60;
var large = 15;
var scrnwidth = 600;
var scrnheight = 400;



var buildGrid = function (x) {
    var squareSize = (scrnwidth / x);
    $('.square').remove();

    for (var i = 0; i < (x * x) * (scrnheight / scrnwidth); i++) {
        $('#grid').append("<div class='square'></div>")
    }

    $('.square').width(squareSize);
    $('.square').height(squareSize);
};



var smallsq = function () {
    $('#small').on('click', function () {
        screenReset();
        buildGrid(small);
        etch();
    });
};



var mediumsq = function () {
    $('#medium').on('click', function () {
        buildGrid(medium);
        screenReset();
        etch();
    });
};



var largesq = function () {
    $('#large').on('click', function () {
        screenReset();
        buildGrid(large);
        etch();
    });
};



var defaultetch = function () {
    $('#default').on('click', function () {
        screenReset();
        etch();
    });
}



var etch = function () {
    $('.square').on('mouseover', function () {
        $(this).css("background-color", "#000");
    });
};



var color = function () {
    $('#color').on('click', function () {
        screenReset();
        $('.square').on('mouseover', function () {
            $(this).css("background-color", Randrgb);
        });
    });
};



var Randrgb = function () {
    var red = Math.floor((Math.random() * 255));
    var green = Math.floor((Math.random() * 255));
    var blue = Math.floor((Math.random() * 255));
    return "rgb(" + red + "," + green + "," + blue + ")";
};



var shader = function () {
    $('#gradient').on('click', function () {
        screenReset();
        $('.square').css("background-color", "#000");
        $('.square').css("opacity", 0);
        $('.square').on('mouseover', function () {
            var value = +$(this).css("opacity");
            if (value < 1) {
                value += 0.1;
                $(this).css("opacity", value);
            };
        });
    });
};



var trailing = function () {
    $('#trail').on('click', function () {
        screenReset();
        $('.square').on('mouseenter', function () {
            $(this).css("background-color", "#000")
        });
        $('.square').on('mouseleave', function () {
            $(this).fadeTo(0, 0);
        });
    });
};



var clearScreen = function () {
    $('#clear').click(function () {
        screenReset();
    });
};



var screenReset = function () {
    $('.square').unbind();
    $('.square').css({
        "background-color": "#E8E8E8",
        "opacity": "1"
    });
};