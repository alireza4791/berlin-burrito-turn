if (window.innerWidth >= 0 && window.innerWidth < 480) {
    $("#first-card").turn({
        width: 100,
        height: 165,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 100,
        height: 165,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 100,
        height: 165,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 100,
        height: 165,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 481 && window.innerWidth < 767) {
    $("#first-card").turn({
        width: 150,
        height: 210,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 150,
        height: 210,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 150,
        height: 210,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 150,
        height: 210,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 768 && window.innerWidth < 992) {
    $("#first-card").turn({
        width: 150,
        height: 250,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 150,
        height: 250,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 150,
        height: 250,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 150,
        height: 250,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 992 && window.innerWidth < 1280) {
    $("#first-card").turn({
        width: 300,
        height: 350,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 300,
        height: 350,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 300,
        height: 350,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 300,
        height: 350,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
    $("#first-card").turn({
        width: 300,
        height: 360,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 300,
        height: 360,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 300,
        height: 360,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 300,
        height: 360,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 1440 && window.innerWidth < 1920) {
    $("#first-card").turn({
        width: 300,
        height: 380,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 300,
        height: 380,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 300, height: 380,
        autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 300,
        height: 380,
        autoCenter: true,
        display: "single"
    });
}
else if (window.innerWidth >= 1920) {
    $("#first-card").turn({
        width: 300,
        height: 400,
        autoCenter: true,
        display: "single"
    });
    $("#second-card").turn({
        width: 300,
        height: 400,
        autoCenter: true,
        display: "single"
    });
    $("#third-card").turn({
        width: 300, height: 400, autoCenter: true,
        display: "single"
    });
    $("#fourth-card").turn({
        width: 300,
        height: 400,
        autoCenter: true,
        display: "single"
    });
}

$("#first-card").bind("turning", function (event, page, view) {
    event.preventDefault();
});

$("#first-card").bind("start", function (event, pageObject, corner) {
    if (corner == "br") {
        event.preventDefault();
    }
});


$("#second-card").bind("turning", function (event, page, view) {
    event.preventDefault();
});
$("#second-card").bind("start", function (event, pageObject, corner) {
    if (corner == "br") {
        event.preventDefault();
    }
});

$("#third-card").bind("turning", function (event, page, view) {
    event.preventDefault();
});
$("#third-card").bind("start", function (event, pageObject, corner) {
    if (corner == "br") {
        event.preventDefault();
    }
});

$("#fourth-card").bind("turning", function (event, page, view) {
    event.preventDefault();
});
$("#fourth-card").bind("start", function (event, pageObject, corner) {
    if (corner == "br") event.preventDefault();
});
