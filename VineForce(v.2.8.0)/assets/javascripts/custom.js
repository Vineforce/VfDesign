
$(".save-loading").click(function () {
    $(".save-loading-container").show().delay(1000).hide(0);
});
setTimeout(function () {
    $(".bootstrap-select .btn").each(function () {
        $(this).data("title", $(this).attr("title")).removeAttr("title");
    });
}, 2500);
//Radio event on company administrator
$(document).ready(function () {
    $("input[name$='stateadmin']").click(function () {
        var test = $(this).val();
        $("div.statedata").toggle();
    });  
});
//Search Expand, value and closing
$(document).ready(function () {
    $(".search").keyup(function () {
        var dInput = $(this).val();
        $('.search').attr("value", dInput);
    });
});

$(function () {
    $(".iconsearch").on("click", function (e) {
        $(".search").toggleClass("expanded");
        $('.search').focus();
        return false;
    });
    $(document).on("click", function (e) {
        var val = $(".search").val();
        if ($(e.target).is(".search, .search-box .add-clear-x, .iconsearch, .search-select a") === false) {
            if (val.length > 0) {
                $(".search").addClass("expanded");
                $('.iconsearch').hide();
                $('.search-box .add-clear-x').show();
            }
            else {
                $(".search").removeClass("expanded");
                $('.iconsearch').show();
                $('.search-box .add-clear-x').hide();
            }
        }
    });
});

$(".search").keyup(function () {
    var val = $(this).val();
    if (val.length > 0) {
        $('.iconsearch').hide();
    }
    else {
        $('.iconsearch').show();
    }
});
// Search Extended with dropdown
$(function () {
    $(window).on("load", function (e) {
        $('.search-extended').focus();
        return false;
    });
    $(document).on("click", function (e) {
        var searchval = $(".search-extended").val();
        if ($(e.target).is(".search-expanded-drop .add-clear-x") === false) {
            if (searchval.length > 0) {
                $('.search-box-extended .add-clear-x').show();
                $('.search-box-extended .iconsearch-extended').hide();
            }
            else {
                $('.search-box-extended .add-clear-x').hide();
                $('.search-box-extended .iconsearch-extended').show();
            }
        }
    });
});
$(".search-extended").keyup(function () {
    var val = $(this).val();
    if (val.length > 0) {
        $('.iconsearch-extended').hide();
    }
    else {
        $('.iconsearch-extended').show();
    }
});

//Input clear
try {
    $(".input-clear").addClear({
        symbolClass: "fa fa-times-circle",
        onClear: function () {
            $('.iconsearch').show();
            $('.iconsearch1').show();
            $('.iconsearch-extended').show();
        }
    });
}
catch (e) {
    console.log('catch - addClear()');
}


//mODAL Search Expand, value and closing
$(function () {
    $(".iconsearch1").on("click", function (e) {
        if ($('.searchval').val()) {
            $('.iconsearch1').hide();
        }
        $(".search1").toggleClass("expanded1");
        $('.search1').focus();
        return false;
    });
    $(document).on("click", function (e) {
        var val = $(".search1").val();
        if ($(e.target).is(".search1, .search-box-modal .add-clear-x, .iconsearch1") === false) {
            if (val.length > 0) {
                $(".search1").addClass("expanded1");
                $('.iconsearch1').hide();
                $('.search-box-modal .add-clear-x').show();
            }
            else {
                $(".search1").removeClass("expanded1");
                $('.iconsearch1').show();
                $('.search-box-modal .add-clear-x').hide();
            }
        }
    });
});
$(".search1").keyup(function () {
    var val = $(this).val();
    if (val.length > 0) {
        $('.iconsearch1').hide();
    }
    else {
        $('.iconsearch1').show();
    }
});

// Validation Errors
// See Examples at https://codepen.io/SitePoint/pen/akPoad
$(function () {
    $("form[name='LoginForm']").validate({
        rules: {
            loginEmail: {
                required: true,
                email: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
            loginPassword: {
                required: "Password is required."
            },
            loginEmail: {
                required: "Work email is required.",
                email: "Work email format is incorrect."
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
    $("form[name='ForgotPasswordForm']").validate({
        rules: {
            fpEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            fpEmail: {
                required: "Work email is required.",
                email: "Work email format is incorrect."
            }
        },
        submitHandler: function (form) {
            $("#forgot-form").hide();
            $("#login-form").hide();
            $("#instruction-form").show();
            $("#reset-form").hide();
        }
    });

    $("form[name='InstructionForm']").validate({
        rules: {
        },
        messages: {
        },
        submitHandler: function (form) {
            $("#forgot-form").hide();
            $("#login-form").hide();
            $("#instruction-form").hide();
            $("#reset-form").show();
        }
    });

    $("form[name='ResetForm']").validate({
        rules: {
            resetPassword: {
                required: true
            },
            resetnewPassword: {
                required: true
            }
        },
        messages: {
            resetPassword: {
                required: "Only the following symbols are allowed<br>@%+\ / ? ! # $ ^ : . ( ) { } [ ] - _ ,"
            },
            resetnewPassword: {
                // required: "Password not matched"
            }
        },
        submitHandler: function (form) {
            $("#forgot-form").hide();
            $("#login-form").show();
            $("#instruction-form").hide();
            $("#reset-form").hide();
        }
    });

    // $("form[name='GroupForm']").validate({
    //     rules: {
    //         groupname: {
    //             required: true
    //         }
    //     },
    //     messages: {
    //         groupname: {
    //             required: "Enter group name"
    //             //required: "Group name already exists."
    //         }
    //     },
    //     submitHandler: function(form) {
    //         form.submit();
    //     }
    // });
});

// Login Form
$(".forgot-password").click(function () {
    $("#forgot-form").show();
    $("#login-form").hide();
    $("#instruction-form").hide();
    $("#reset-form").hide();
});
$(".back-login").click(function () {
    $("#forgot-form").hide();
    $("#login-form").show();
    $("#instruction-form").hide();
    $("#reset-form").hide();
});

// DatePicker
$('input[name="datepicker"]').daterangepicker({
    "autoApply": true,
    "linkedCalendars": false,
    "startDate": "03/01/2018",
    "endDate": "03/28/2018",
    "opens": "left",
    "focusOnShow":false,
    "ignoreReadonly": true
}, function (start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});

// DatePicker
$('.datepicker-up').daterangepicker({
    "autoApply": true,
    "linkedCalendars": false,
    "startDate": "03/01/2018",
    "endDate": "03/28/2018",
    "opens": "left",
    "drops": "up",
    "focusOnShow":false,
    "ignoreReadonly": true
}, function (start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
});

// Single DatePicker
$('input[name="singleDatePicker"]').daterangepicker({
    "autoApply": true,
    "linkedCalendars": false,
    "singleDatePicker": true,
    "opens": "left",
    "focusOnShow":false,
    "ignoreReadonly": true
});
// Single DatePicker Dropup
$('input[name="singleDatePickerUp"]').daterangepicker({
    "autoApply": true,
    "linkedCalendars": false,
    "singleDatePicker": true,
    "opens": "left",
    "drops": "up",
    "focusOnShow":false,
    "ignoreReadonly": true
});
//Placeholder for datepicker
$('input[name="singleDatePicker"]').val('--');
$('input[name="singleDatePickerUp"]').val('--');
$('input[name="datepicker-up"]').val('--');
$('input[name="datepicker"]').val('--');

$(function () {
    $('input[name="timepicker"]').datetimepicker({
        format: 'LT',
        allowInputToggle: true,
        focusOnShow:false,
        ignoreReadonly: true
    });
});
/* slimscroll for modal with grid*/
$('.modal-sidebar .modal-body .slimscroll').slimScroll({
    height: '100%',
    distance: '-6px',
    size: '6px',
    alwaysVisible: false,
    color: 'rgb(218, 218, 218)'
});
/* slimscroll */
$('.slimscroll').slimScroll({
    height: '100%',
    distance: '-13px',
    size: '6px',
    alwaysVisible: false,
    color: 'rgb(218, 218, 218)'
});

/* slimscroll */
$('.stateFormSettingsScroll').slimScroll({
    height: '100%',
    distance: '0px',
    size: '6px',
    alwaysVisible: false,
    color: 'rgb(218, 218, 218)'
});
/* SalesTeam slimscroll */
$('.slimscroll-insidesales').slimScroll({
    height: '100%',
    distance: '2px',
    size: '6px',
    alwaysVisible: false,
    color: 'rgb(218, 218, 218)'
});

/* Dashboard slimscroll */
$('.dashboard-slimscroll').slimScroll({
    height: '300px',
    distance: '-13px',
    size: '6px',
    alwaysVisible: false,
    color: 'rgb(218, 218, 218)'
});

// Call Tooltip 
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

//Dropdown select for new page
$('.dropdown-resizing').bind('change', function () {
    var opval = $(this).val();
    window.location = $(this).val();
});

// loader inside grid items
$('.slimscroll').slimScroll().bind('slimscroll', function (e, pos) {
    setTimeout(function () {
        $('.my-loader').hide();
        $('.data-2').show();
    }, 2500);
});

// loader inside grid items with table heading
$(window).load(function() {
    $('.loaded-grid').hide();
    setTimeout(function () {
        $('.loading-grid').hide();
    }, 2500); 
    setTimeout(function () {
        $('.loaded-grid').show();
    }, 2500);
});
//Loader on page
// $('.company-loader').append('<div id="loading"> <div class="sweet-load-outer">  <div class="sweet-load-ring"> <div class="sweet-load-circle">  <div class="sweet-load-punch"><img src="https://cdn.vineforce.com/vineforce/images/logo-icon-white.png" alt=""></div></div></div></div></div>');
$('.company-loader').append('<div class="main-loader save-loading-container"></div>');
$(window).on('load', function () {
    setTimeout(removeLoader, 10000);
});
$('.company-loader .page-container').hide();
function removeLoader() {
    $(".main-loader.save-loading-container").fadeOut(1000, function () {
        $(".main-loader.save-loading-container").remove();
        $('.company-loader .page-container').show();
    });
}

// loader for complete grid on reseting filter
$(".show-loading").click(function(){
    $("body").addClass("loading-effect")
    $('.loading-effect').append('<div class="main-loader save-loading-container"><div class="loader"></div></div>');
    setTimeout(function () {
        $("body").removeClass("loading-effect")
    }, 2500); 
    setTimeout(removeLoader, 1000);
});
$("input[name='statusaddfilter']").on("change", function (e) {
    $("body").addClass("preventclicking")
    $('.company-loader').append('<div class="main-loader save-loading-container"><div class="loader"></div></div>');
    if($("body").hasClass("preventclicking")){
        $("body").click(function (e) {
             e.stopPropagation();
        });
    }
    $('.company-loader').append('<div class="main-loader save-loading-container"><div class="loader"></div></div>');

    setTimeout(function () {
        $("body").removeClass("loading-effect")
    }, 2500); 
    setTimeout(removeLoader, 1000);
});

//Tree Structure
/* Backoffice Company Role */
$('#jstreeRolesBO').jstree({
    'plugins': ["wholerow", "checkbox", "types"],
    'core': {
        "themes": {
            "responsive": false
        },
        'data': [
            {
                "text": "Company",
                "state": {
                    "opened": true,
                    "disabled": true
                },
                "children": [
                    {
                        "text": "Licensed Users",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Roles",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                ]
            },
            {
                "text": "State",
                "state": {
                    "opened": true,
                    "disabled": true
                },
                "children": [{
                    "text": "Users, Route & Positions",
                    "state": {
                        "selected": true,
                        "disabled": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o",
                            "state":
                            {
                                "disabled": true
                            },
                        },
                    ]
                },
                {
                    "text": "Customer, Chains & Suppliers",
                    "state": {
                        "selected": true,
                        "disabled": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o",
                            "state":
                            {
                                "disabled": true
                            },
                        },
                    ]
                },
                {
                    "text": "Chargeback & Form Settings",
                    "state": {
                        "selected": true,
                        "disabled": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o",
                            "state":
                            {
                                "disabled": true
                            },
                        },
                    ]
                },]
            },
            {
                "text": "Programs",
                "state": {
                    "opened": true,
                    "disabled": true
                },
                "children": [
                    {
                        "text": "Add",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": true,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Edit and Change Status",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": true,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Payout",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": true,
                            "disabled": true
                        },
                    },
                ]
            },
            {
                "text": "Payroll",
                "state": {
                    "opened": true,
                    "disabled": true
                },
                "children": [
                    {
                        "text": "View their Programs",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": true,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Edit and Close Payroll (My Product Divisions)",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": true,
                            "disabled": true
                        },
                    },
                ]
            },
            {
                "text": "Sales IPad",
                "state": {
                    "opened": true,
                    "disabled": true
                },
                "children": [
                    {
                        "text": "Schedule",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Customer",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Program",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                    {
                        "text": "Pay",
                        "icon": "fa fa-file-o",
                        "state": {
                            "selected": false,
                            "disabled": true
                        },
                    },
                ]
            },
        ]
    },
    "types": {
        "default": {
            "icon": "fa fa-folder-o icon-state-warning icon-lg"
        },
        "file": {
            "icon": "fa fa-file-o icon-state-warning icon-lg"
        }
    }
});

/* admin roles */
$('#jstreeRoles,#jstreeRoles1').jstree({
    'plugins': ["wholerow", "checkbox", "types"],
    'core': {
        "themes": {
            "responsive": false
        },
        'data': [
            {
                "text": "Dashboard"
            },
            {
                "text": "Company",
                "children": [{
                    "text": "Add, Edit and Delete",
                    "icon": "fa fa-file-o",
                    "state": {
                        "selected": true
                    },
                },]
            },
            {
                "text": "Administration",
                "children": [{
                    "text": "Edition",
                    "state": {
                        "selected": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },
                {
                    "text": "Roles",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },
                {
                    "text": "Users",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },
                {
                    "text": "Audit Logs",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },
                {
                    "text": "Maintenance",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Add, Edit and Delete",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },
                {
                    "text": "Settings",
                    "state": {
                        "opened": true
                    },
                    "children": [
                        {
                            "text": "Company Management",
                            "icon": "fa fa-file-o"
                        },
                        {
                            "text": "User Management",
                            "icon": "fa fa-file-o"
                        },
                        {
                            "text": "Security",
                            "icon": "fa fa-file-o"
                        },
                        {
                            "text": "Email (SMTP)",
                            "icon": "fa fa-file-o"
                        },
                    ]
                },]
            },
        ]
    },
    "types": {
        "default": {
            "icon": "fa fa-folder-o icon-state-warning icon-lg"
        },
        "file": {
            "icon": "fa fa-file-o icon-state-warning icon-lg"
        }
    }
});

$('.jstreeRoles,.jstreeRoles1,.jstreeRolesBO').on("changed.jstree", function (e, data) {
    //console.log(data.selected);
});

//Charts
$(document).ready(function () {
    barChart();
    lineChart();

    $(window).resize(function () {
        window.barChart.redraw();
        window.lineChart.redraw();
    });
});

function barChart() {
    window.barChart = Morris.Bar({
        element: 'bar',
        data: [
            { y: '2012', a: 100, b: 90 },
            { y: '2013', a: 75, b: 65 },
            { y: '2014', a: 50, b: 40 },
            { y: '2015', a: 75, b: 65 },
            { y: '2016', a: 50, b: 40 },
            { y: '2017', a: 75, b: 65 },
            { y: '2018', a: 100, b: 200 }
        ],
        xkey: 'y',
        ymax: 300,
        ykeys: ['a', 'b'],
        labels: ['Data-1', 'Data-2'],
        barColors: ["#639af5", "#595eff"]
    });
}

function lineChart() {
    window.lineChart = Morris.Line({
        element: 'line',
        data: [{ "Date": "2018-06-13", "Count": 0 }, { "Date": "2018-05-27", "Count": 0 }],
        xkey: 'Date',
        ykeys: ['Count'],
        labels: ['Detail'],
        goals: [1, 0, -1],
        goalLineColors: ["rgba(0,0,0,0)"],
        lineWidth: 6,
        pointSize: 6,
        lineColors: ["#639af5"],
        pointFillColors: ['#595eff'],
        behaveLikeLine: true,
        xLabels: "day",
        xLabelFormat: function (d) {
            return d.getDate() + '/' + ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][d.getMonth()] + '/' + d.getDate();
        }
    });
}
/* Morris chart end */

/* Toaster Messages */
$('#Passwordsavedtoast').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.warning("New password is saved!");
});

$('#Passwordnotsavedtoast').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.error("Unable to save new password!");
});

$('#Passwordnewsavedtoast').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("New password is saved!");
});

$('#sendtestmailtoastr').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("Test email is sent to talsia@vws.com!");
});

$('#sendtestmailwarningtoastr').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center modal-toaster",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.warning("Test email is sent to talsia@vws.com!");
});

$('#Passwordnotsavederrortoast').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center modal-toaster",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.error("Unable to send talsia@vws.com!");
});

$('#inActiveCompany').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("Vineyard Wines & Spirits, Inc is marked inactive!");
});

$('#activeCompany').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("Johnson Brothers Liquor Co. is marked active!");
});

$('#inActiveUser').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("admin is marked inactive!");
});

$('#activeUser').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("Matthew Owens is marked active!");
});

/* Toaster Messages */
$('.show-toastr-trash').click(function () {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "10",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    }
    toastr.success("Successfully moved to trash - 110001 - [BAC] Bacardi 8 Anos Rum 700ml Non Display!");
});

/* top select with resize */
var newSelectedValue = "";
var previousSelectedValue = window.location.pathname.split("/").pop();
/* Redirection from Dropdown to Modal open */
$('.dropdown-resizing').bind('change', function (event, clickedIndex, newValue, oldValue) {
    var opval = $(this).val();
    newSelectedValue = opval;
    if (opval == "#CompanyState") {
        $('#CompanyStateModal').modal("show");
        $(".hidden-data .filter-option").hide();
    }
    else if (opval == "#StateJob") {
        $('#StateJobModal').modal("show");
        // $(".hidden-data .filter-option").hide();
    }
    else if (opval == "#StatePayoutExp") {
        $('#StatePayoutExpModal').modal("show");
    }
    else if (opval == "#StateGlCost") {
        $('#GLaccountModal').modal("show");
    }
    else {
        window.location = $(this).val();
    }
});

$("#CompanyStateModal,#StateJobModal,#StatePayoutExpModal,#GLaccountModal").on("hide.bs.modal", function () {
    $('.selectpicker').selectpicker('val', previousSelectedValue);
    newSelectedValue = "";
});


//MODAL BACKDROP CLASS REMOVE
var modal_counter = 0;
$('.modal').on('shown.bs.modal', function () {
    modal_counter++;
    if ($(".modal-backdrop").length > 1) {
        $(".modal-backdrop").not(':first').remove();
    }
});

/* Add Group for Routes */
/* extra */
$(".add-customer").click(function () {
    var customername = $('#customername').val();
    if (customername.length > 0) {
        $('#custome-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + customername + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#custome-form input').val("");
        $('#customername').val('').trigger("change");
        $('#custome-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#custome-edit").click(function () {
    $('#customername').val($('#customer-name-data').html()).trigger('change');
    $('#custome-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
});

/* Add Group */
/* extra */
$(".add-group").click(function () {
    var groupname = $('#groupname').val();
    if (groupname.length > 0) {
        $('#group-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + groupname + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Users</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#group-form input').val("");
        $('#groupname').val('').trigger("change");
        $('#group-form .add-clear-x').hide();
        $(".No-data").hide();
        $("#group-data").show();
    }
});
/* get and set value */
$("#group-edit").click(function () {
    $('#groupname').val($('#group-name-data').html()).trigger('change');
    $('#group-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.highlightdiv #group-name-data').html($('#groupname').val()).trigger('change');
    $('#groupname').val("").trigger('change');
    $('#group-selected').removeClass("highlightdiv");
    $('#group-form .add-clear-x').hide();
});

/* Users add User Group */
/* extra */
$(".add-user").click(function () {
    var username = $('#username').val();
    if (username.length > 0) {
        $('#user-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + username + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#user-form input').val("");
        $('#username').val("").trigger('change');
        $('#user-form .add-clear-x').hide();
    }
});
/* Users RTM*/
$(".add-rtmUser").click(function () {
    var rtmuser = $('.rtmuser').val();
    if (rtmuser.length > 0) {
        $('#rtmUser-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + rtmuser + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#rtmUser-form input').val("");
        $('#rtmUser-form .add-clear-x').hide();
    }
});

/* Add Chains */
/* extra */
$(".add-chain").click(function () {
    var chainname = $('#chainname').val();
    if (chainname.length > 0) {
        $('#chain-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + chainname + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Locations</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#chain-form input').val("");
        $('#chain-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#chain-edit").click(function () {
    $('#chainname').val($('#chain-name-data').html());
    $('#chain-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #chain-name-data').html($('#chainname').val());
    $('#chainname').val("");
    $('#chain-selected').removeClass("highlightdiv");
    $('#chain-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#chainname').val("");
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#chain-selected').removeClass("highlightdiv");
});

/* Add Location */
/* extra */
$(".add-location").click(function () {
    var locationname = $('#locationname').val();
    var locationdepartment = $("#locationdepartment").val();
    if (locationname.length > 0, locationdepartment.length > 0) {
        $('#location-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-5"><span>' + locationname + '</span></div><div class="col-md-5"><span>' + locationdepartment + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#location-form input').val("");
        // $('#locationname').val('').trigger("change");
        $('#locationdepartment').val('').trigger("change");
        $('#location-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#location-edit").click(function () {
    $('#locationname').val($('#location-name-data').html());
    $('#locationdepartment').val($('#location-depart-data').html()).trigger('change');
    $('#location-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #location-name-data').html($('#locationname').val());
    $('.highlightdiv #location-depart-data').html($('#locationdepartment').val()).trigger('change');
    $('#locationname').val("");
    $('#locationdepartment').val('').trigger("change");
    $('#location-selected').removeClass("highlightdiv");
    $('#location-form .add-clear-x').hide();
});

/* Add GL */
/* extra */
$(".add-gl").click(function () {
    var glno = $('#glno').val();
    var gltype = $("#gltype").val();
    if (glno.length > 0, gltype.length > 0) {
        $('#gl-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-5"><span>' + glno + '</span></div><div class="col-md-5"><span>' + gltype + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#gl-form input').val("");
        $('#glno').val('').trigger('change');
        $('#gltype').val('').trigger('change');
        $('#gl-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#gl-edit").click(function () {
    $('#glno').val($('#gl-no-data').html()).trigger('change');
    $('#gltype').val($('#gl-type-data').html()).trigger('change');
    $('#gl-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #gl-no-data').html($('#glno').val()).trigger('change');
    $('.highlightdiv #gl-type-data').html($('#gltype').val()).trigger('change');
    $('#glno').val("").trigger('change');
    $('#gltype').val('').trigger("change");
    $('#gl-selected').removeClass("highlightdiv");
    $('#gl-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#glno').val("");
    $('#gltype').val("");
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#gl-selected').removeClass("highlightdiv");
});

/* Add Job Title */
/* extra */
$(".add-job").click(function () {
    var jobname = $('#jobname').val();
    if (jobname.length > 0) {
        $('#job-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10 text-capitalize"><span>' + jobname + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#statejob-form input').val("");
        $('#statejob-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#job-edit").click(function () {
    $('#jobname').val($('#job-name-data').html());
    $('#job-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #job-name-data').html($('#jobname').val());
    $('#jobname').val('');;
    $('#job-selected').removeClass("highlightdiv");
    $('#statejob-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    // $('#jobname').val("");
    $('#jobname').val('').trigger('change');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#job-selected').removeClass("highlightdiv");
});


/* Add Position */
/* extra */
$(".add-position").click(function () {
    var positionname = $('#positionname').val();
    var positionproduct = $("#positionproduct").val();
    if (positionname.length > 0, positionproduct.length > 0) {
        $('#position-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + positionname + ' &gt;  ' + positionproduct + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#position-form select').val("");
        $('#positionproduct').val('').trigger("change");
        $('#position-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#position-edit").click(function () {
    $('#positionname').val($('#position-name-data').html());
    $('#positionproduct').val($('#position-depart-data').html()).trigger('change');
    $('#position-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #position-name-data').html($('#positionname').val());
    $('.highlightdiv #position-depart-data').html($('#positionproduct').val()).trigger('change');
    $('#positionname').val('');
    $('#positionproduct').val('').trigger("change");
    $('#position-selected').removeClass("highlightdiv");
    $('#position-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#positionname').val("");
    $('#positionproduct').val('').trigger('change');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#position-selected').removeClass("highlightdiv");
});


/* Add Product */
/* extra */
$(".add-product").click(function () {
    var productname = $('#productname').val();
    var productabbr = $("#productabbr").val();
    if (productname.length > 0, productabbr.length > 0) {
        $('#product-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + productname + ' (' + productabbr + ')</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#product-form input').val("");
        $('#product-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#product-edit").click(function () {
    $('#productname').val($('#product-name-data').html());
    $('#productabbr').val($('#product-abbr-data').html());
    $('#product-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #product-name-data').html($('#productname').val());
    $('.highlightdiv #product-abbr-data').html($('#productabbr').val());
    $('#productname').val('');
    $('#productabbr').val('').trigger("change");
    $('#product-selected').removeClass("highlightdiv");
    $('#product-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#productname').val('');
    $('#productabbr').val('');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#product-selected').removeClass("highlightdiv");
});


/* Cost Center in State */
/* extra */
$(".add-costcenter").click(function () {
    var costcenter = $('#costcenter-value').val();
    if (costcenter.length > 0) {
        $('#costcenter-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + costcenter + ' </span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#costcenter-form input').val("");
        $('#costcenter-value').val('').trigger('change');
        $('#costcenter-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#costcenter-edit").click(function () {
    $('#costcenter-value').val($('#costcenter-dataval').html()).trigger('change');
    $('#costcenter-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #costcenter-dataval').html($('#costcenter-value').val()).trigger('change');
    $('#costcenter-value').val('').trigger('change');
    $('#costcenter-selected').removeClass("highlightdiv");
    $('#costcenter-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#costcenter-value').val('').trigger('change');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#costcenter-selected').removeClass("highlightdiv");
});

/* Add Suppliers brand*/
/* extra */
$(".add-brand").click(function () {
    var BrandNo = $('#BrandNo').val();
    var BrandName = $("#BrandName").val();
    if (BrandNo.length > 0, BrandName.length > 0) {
        $('#brand-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-3"><span>' + BrandNo + '</span></div><div class="col-sm-7"><span>' + BrandName + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Items</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#brand-form input').val("");
        $('#brand-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#brand-edit").click(function () {
    $('#BrandNo').val($('#brand-no-data').html());
    $('#BrandName').val($('#brand-name-data').html());
    $('#brand-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #brand-no-data').html($('#BrandNo').val());
    $('.highlightdiv #brand-name-data').html($('#BrandName').val());
    $('#BrandNo').val("");
    $('#BrandName').val('').trigger("change");
    $('#brand-selected').removeClass("highlightdiv");
    $('#brand-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#BrandNo').val('');
    $('#BrandName').val('');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#brand-selected').removeClass("highlightdiv");
});

/* Add Item in Brand */
/* extra */
$(".add-item").click(function () {
    var ItemNo = $('#ItemNo').val();
    var ItemName = $("#ItemName").val();
    var ItemSize = $("#ItemSize").val();
    if (ItemNo.length > 0, ItemName.length > 0, ItemSize.length > 0) {
        $('#item-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-2"><span>' + ItemNo + '</span></div><div class="col-md-6"><span>' + ItemName + '</span></div><div class="col-md-2"><span>' + ItemSize + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#item-form input').val("");
        $('#item-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#item-edit").click(function () {
    $('#ItemNo').val($('#item-no-data').html());
    $('#ItemName').val($('#item-name-data').html());
    $('#ItemSize').val($('#item-size-data').html()).trigger('change');
    $('#item-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #item-no-data').html($('#ItemNo').val());
    $('.highlightdiv #item-name-data').html($('#ItemName').val());
    $('.highlightdiv #item-size-data').html($('#ItemSize').val()).trigger('change');
    $('#ItemNo').val("");
    $('#ItemName').val("");
    $('#ItemSize').val('').trigger("change");
    $('#item-selected').removeClass("highlightdiv");
    $('#item-form .add-clear-x').hide();
});

$(".cancel").click(function () {
    $('#ItemNo').val('');
    $('#ItemName').val('');
    $('#ItemSize').val('');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#item-selected').removeClass("highlightdiv");
});

/* Add SalesRep*/
/* extra */
$(".add-Rep").click(function () {
    var RepNo = $('#RepNo').val();
    var RepName = $("#RepName").val();
    if (RepNo.length > 0, RepName.length > 0) {
        $('#Rep-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + RepNo + ' - ' + RepName + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Mark Inactive</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#Rep-form input').val("");
        $('#Rep-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#Rep-edit").click(function () {
    $('#RepNo').val($('#Rep-no-data').html());
    $('#RepName').val($('#Rep-name-data').html());
    $('#Rep-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #Rep-no-data').html($('#RepNo').val());
    $('.highlightdiv #Rep-name-data').html($('#RepName').val());
    $('#RepNo').val("");
    $('#RepName').val('').trigger("change");
    $('#Rep-selected').removeClass("highlightdiv");
    $('#Rep-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#RepNo').val('');
    $('#RepName').val('');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#Rep-selected').removeClass("highlightdiv");
});


/* Add Supplier in Programs */
/* extra */
$(".add-supplier").click(function () {
    var suppliername = $('#addsuppliername').val();
    if (suppliername.length > 0) {
        $('#supplier-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-6"><span>' + suppliername + '</div><div class="col-sm-2"></div><div class="col-sm-2"></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Brand | Item</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#supplier-form input').val("");
        $('#addsuppliername').val('').trigger('change');
        $('#supplier-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#supplier-edit").click(function () {
    $('#addsuppliername').val($('#supplier-name-data').html()).trigger('change');
    $('#supplier-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
    $('.cancel').show();
});
$(".update").click(function () {
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('.highlightdiv #supplier-name-data').html($('#addsuppliername').val()).trigger('change');
    $('#addsuppliername').val("").trigger('change');
    $('#supplier-selected').removeClass("highlightdiv");
    $('#supplier-form .add-clear-x').hide();
});
$(".cancel").click(function () {
    $('#addsuppliername').val("").trigger('change');
    $('.add').show();
    $('.update').hide();
    $('.cancel').hide();
    $('#supplier-selected').removeClass("highlightdiv");
});
/* Add Brand items in Programs */
/* extra */
$(".add-brandItem").click(function () {
    var brandItemname = $('#brandItemname').val();
    if (brandItemname.length > 0) {
        $('#brandItem-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + brandItemname + '</div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Items</a></li><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#brandItem-form input').val("");
        $('#brandItemname').val('').trigger('change');
        $('#brandItem-form .add-clear-x').hide();
    }
});
/* get and set value */
$("#brandItemname-edit").click(function () {
    $('#brandItemname').val($('#brandItem-name-data').html()).trigger('change');
    $('#brandItemname-selected').addClass("highlightdiv");
    $('.add').hide();
    $('.update').show();
});

/* AddSupplier items in Programs */
/* extra */
$(".add-supplierItemname").click(function () {
    var supplierItemname = $('#supplierItemname').val();
    if (supplierItemname.length > 0) {
        $('#supplierItemname-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + supplierItemname + '</div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        // $('#supplierItemname-form input').val("");
        $('#supplierItemname').val('').trigger('change');
        $('#supplierItemname-form .add-clear-x').hide();
    }
});

/* Add Sales Chains in Programs */
$(".add-salesChains").click(function () {
    var salesChains = $('#salesChains').val();
    if (salesChains.length > 0) {
        $('#salesChains-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-10"><span>' + salesChains + '</div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#salesChains').val("").trigger("change");
        $('#salesChains-form .add-clear-x').hide();
    }
});

/* Add Members Role */
/* extra */
$(".add-members").click(function () {
    var membersname = $('#membersname').val();
    var membersrole = $("#membersrole").val();
    if (membersname.length > 0, membersrole.length > 0) {
        $('#members-data').append('<div class="row margin-left-none margin-right-none"><div class="col-md-5"><span>' + membersrole + '</span></div><div class="col-sm-5"><span>' + membersname + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#membersname').val("").trigger("change");
        $('#membersrole').val('').trigger("change");
        $('#members-form .add-clear-x').hide();
    }
});
/* Add Members Group */
/* extra */
$(".add-members").click(function () {
    var membersnamegroup = $('#membersnamegroup').val();
    var groupname = $("#groupname").val();
    if (membersnamegroup.length > 0, groupname.length > 0) {
        $('#members-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-5"><span>' + membersnamegroup + '</span></div><div class="col-md-5"><span>' + groupname + '</span></div><div class="col-sm-2"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#membersname').val("").trigger("change");
        $('#membersrole').val('').trigger("change");
        $('#members-form .add-clear-x').hide();
    }
});


/* Add Payout */
/* extra */
$(".add-payout").click(function () {
    var payoutemployee = $('#payoutemployee').val();
    var payoutpayout = $("#payoutpayout").val();
    if (payoutemployee.length > 0, payoutpayout.length > 0) {
        $('#payout-data').append('<div class="row margin-left-none margin-right-none"><div class="col-sm-6"><span>' + payoutemployee + '</span></div><div class="col-sm-2"><span>&nbsp;</span></div><div class="col-md-3 text-right">$ <span>' + payoutpayout + '</span></div><div class="col-sm-1"><div class="activity text-right"><div class="action"><div class="btn-group-sm pull-right"><button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="ellipsis"></span><span class="ellipsis"></span><span class="ellipsis"></span></button><ul class="dropdown-menu p-0 m-0"><li><a class="dropdown-item" href="javascript:;">Edit</a></li><li><a class="dropdown-item" href="javascript:;">Delete</a></li></ul></div></div><div class="clearfix"></div></div></div></div>');
        $('#payout-form input').val("");
        $('#payoutemployee').val('').trigger("change");
        $('#payout-form .add-clear-x').hide();
    }
});
/* get and set value */
// $("#payout-edit").click(function () {
//     $('#payoutemployee').val($('#payout-name-data').html()).trigger("change");
//     $('#payoutpayout').val($('#payout-depart-data').html());
//     $('#payout-selected').addClass("highlightdiv");
//     $('.add').hide();
//     $('.update').show();
//     $('.cancel').show();
// });
// $(".update").click(function () {
//     $('.add').show();
//     $('.update').hide();
//     $('.cancel').hide();
//     $('.highlightdiv #payout-name-data').html($('#payoutemployee').val()).trigger("change");
//     $('.highlightdiv #payout-depart-data').html($('#payoutpayout').val());
//     $('#payoutemployee').val("").trigger("change");
//     $('#payoutpayout').val('');
//     $('#payout-selected').removeClass("highlightdiv");
//     $('#payout-form .add-clear-x').hide();
// });
// $(".cancel").click(function () {
//     $('#payoutemployee').val("").trigger('change');
//     $('#payoutpayout').val("");
//     $('.add').show();
//     $('.update').hide();
//     $('.cancel').hide();
//     $('#payout-selected').removeClass("highlightdiv");
// });

/* here you can put your own js to customize and override the theme */
var Dashboard = function () {
    return {
        initTypeahead: function () {

            // Position in States
            var $input1 = $(".statepositiontypeahead");
            $input1.typeahead({
                source: [
                    { id: "123", name: "Account Executive" },
                    { id: "124", name: "Account Manager" },
                    { id: "125", name: "Business Dev. Manager" },
                    { id: "126", name: "Area Manager" }
                ],
                autoSelect: true
            });
            // Route in States
            var $input1 = $(".stateroutestypeahead");
            $input1.typeahead({
                source: [
                    { id: "123", name: "88001" },
                    { id: "124", name: "88002" },
                    { id: "125", name: "88003" },
                    { id: "126", name: "88004" }
                ],
                autoSelect: true
            });
        },

        initaddnewtag: function () {
            $('#salespos').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#positions .new-salespos').append('<div><span class="label-addTag truncate" data-html="true" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#salespos").selectpicker("val", "");
                }
            });

            $('#employeename').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#addemployeeModal .new-employeename').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#employeename").selectpicker("val", "");
                }
            });
            $('#employeenameRTM').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#addpositionChainsModal .new-employeenameRTM').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#employeenameRTM").selectpicker("val", "");
                }
            });

            $('#incetype').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#incentiveTypeNew').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#incetype").selectpicker("val", "");
                }
            });


            $('#catetype').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#categoryTypeNew').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#catetype").selectpicker("val", "");
                }
            });


            $('#toolType').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#toolTypeNew').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                    $("#toolType").selectpicker("val", "");
                }
            });

            $('#statepos').on('change', function (e) {
                var text = $(this).val();
                if (text.length > 0) {
                    $('#position .new-statepos').append('<div class="row"><div class="col-sm-4"><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div></div>');
                    $("#statepos").selectpicker("val", "");
                }
            });

            //RouteType
            $("#stateroute").keyup(function (event) {
                if (event.keyCode == 13) {
                    var text = $('#stateroute').val();
                    if (text.length > 0) {
                        $('#profile .new-stateroute').append('<div><span class="label-addTag truncate" data-original-title=' + text + ' data-trigger="hover" data-placement="top" data-toggle="tooltip" data-container="body">' + text + '<a href="javascript:;" class="clear-newtag">&times;</a></span></div>');
                        event.currentTarget.value = "";
                    }
                }
            });

        },

        initModalfooter: function () {

            $(".tab-changefooterModal li:last-child").click(function () {
                $(".changefooterModal .modal-dialog .modal-footer").hide();
                $(".changefooterModal .modal-dialog .modal-body").addClass("nofooter");
            });
            $(".tab-changefooterModal li:first-child").click(function () {
                $(".changefooterModal .modal-dialog .modal-footer").show();
                $(".changefooterModal .modal-dialog .modal-body").removeClass("nofooter");
            });

            $(".changefooterModal#AddSupplierModal .modal-topicons .modalfilter,.changefooterModal#AddSupplierModal .modal-topicons .search-box-modal").hide();
            $(".tab-changefooterModal1 li:nth-child(1)").click(function () {
                $(".changefooterModal .modal-dialog .modal-footer").show();
                $(".changefooterModal#AddSupplierModal .modal-topicons .modalfilter,.changefooterModal#AddSupplierModal .modal-topicons .search-box-modal").hide();
                $(".changefooterModal .modal-dialog .modal-body").removeClass("nofooter");
            });

            $(".tab-changefooterModal1 li:nth-child(2),.tab-changefooterModal1 li:nth-child(3)").click(function () {
                $(".changefooterModal .modal-dialog .modal-footer").hide();
                $(".changefooterModal#AddSupplierModal .modal-topicons .modalfilter,.changefooterModal#AddSupplierModal .modal-topicons .search-box-modal").show();
                $(".changefooterModal .modal-dialog .modal-body").addClass("nofooter");
            });

            $(".tabthird-changefooterModal li:last-child").click(function () {
                $(".changefooterModal#edituserModal .modal-dialog .modal-footer").hide();
                $(".changefooterModal#edituserModal .modal-dialog .modal-topicons .search-box-modal").show();
                $(".changefooterModal#edituserModal .modal-dialog .modal-body").addClass("nofooter");
            });
            $("#edituserModal .tabthird-changefooterModal li:nth-child(1), #edituserModal .tabthird-changefooterModal li:nth-child(2)").click(function () {
                $(".changefooterModal#edituserModal .modal-dialog .modal-topicons .search-box-modal").hide();
                $(".changefooterModal#edituserModal .modal-dialog .modal-footer").show();
                $(".changefooterModal#edituserModal .modal-dialog .modal-body").removeClass("nofooter");
            });
            $("#edituserModal .tabthird-changefooterModal li:nth-child(3)").click(function () {
                $(".changefooterModal#edituserModal .modal-dialog .modal-topicons .search-box-modal").show();
            });
            $("#editStateCustomerModal .modal-dialog .tab-changefooterModal li:first-child").click(function () {
                $("#editStateCustomerModal .modal-topicons .search-box-modal").hide();
            });
            $("#editStateCustomerModal .modal-dialog .tab-changefooterModal li:last-child").click(function () {
                $("#editStateCustomerModal .modal-topicons .search-box-modal").show();
            });
            $("#editStateCustomerBlankModal .modal-dialog .tab-changefooterModal li:first-child").click(function () {
                $("#editStateCustomerBlankModal .modal-topicons .search-box-modal").hide();
            });
            $("#editStateCustomerBlankModal .modal-dialog .tab-changefooterModal li:last-child").click(function () {
                $("#editStateCustomerBlankModal .modal-topicons .search-box-modal").show();
            });
            $(".tab-changefooter2ndModal li:first-child").click(function () {
                $(".changefooter2ndModal .modal-dialog .modal-footer").removeClass("hidden");
                $(".changefooter2ndModal .modal-dialog .modal-body").removeClass("nofooter");
            });
            $(".tab-changefooter2ndModal li:last-child").click(function () {
                $(".changefooter2ndModal .modal-dialog .modal-footer").addClass("hidden");
                $(".changefooter2ndModal .modal-dialog .modal-body").addClass("nofooter");
            });
            $("#viewBrandModal .tab-changefooter2ndModal li:last-child, #viewBrandModal .tab-changefooter2ndModal li:first-child").click(function () {
                $(".changefooter2ndModal .modal-dialog .modal-footer").addClass("hidden");
                $(".changefooter2ndModal .modal-dialog .modal-body").addClass("nofooter");
            });


            $(".changefooterModal#addRTMModal .modal-topicons .modalfilter,.changefooterModal#addRTMModal .modal-topicons .search-box-modal,.changefooterModal#editRTMModal .modal-topicons .modalfilter,.changefooterModal#editRTMModal .modal-topicons .search-box-modal").hide();
            $(".tab-changefooterModal li:nth-child(1)").click(function () {
                $(".changefooterModal#addRTMModal .modal-topicons .modalfilter,.changefooterModal#addRTMModal .modal-topicons .search-box-modal,.changefooterModal#editRTMModal .modal-topicons .modalfilter,.changefooterModal#editRTMModal .modal-topicons .search-box-modal").hide();
            });

            $(".tab-changefooterModal li:nth-child(2)").click(function () {
                $(".changefooterModal#addRTMModal .modal-topicons .modalfilter,.changefooterModal#addRTMModal .modal-topicons .search-box-modal,.changefooterModal#editRTMModal .modal-topicons .modalfilter,.changefooterModal#editRTMModal .modal-topicons .search-box-modal").show();
            });

            $(".changefooterModal#addRouteModal .modal-topicons .modalfilter,.changefooterModal#editRouteModal .modal-topicons .modalfilter,.changefooterModal#addRouteModal .modal-topicons .search-box-modal,.changefooterModal#editRouteModal .modal-topicons .search-box-modal").hide();
            $("#addRouteModal .nav-tabs li:nth-child(1),#editRouteModal .nav-tabs li:nth-child(1)").click(function () {
                $(".changefooterModal#addRouteModal .modal-topicons .modalfilter,.changefooterModal#addRouteModal .modal-topicons .search-box-modal,.changefooterModal#editRouteModal .modal-topicons .modalfilter,.changefooterModal#editRouteModal .modal-topicons .search-box-modal").hide();
            });

            $("#addRouteModal .nav-tabs li:nth-child(2),#editRouteModal .nav-tabs li:nth-child(2)").click(function () {
                $(".changefooterModal#addRouteModal .modal-topicons .modalfilter,.changefooterModal#addRouteModal .modal-topicons .search-box-modal,.changefooterModal#editRouteModal .modal-topicons .modalfilter,.changefooterModal#editRouteModal .modal-topicons .search-box-modal").show();
            });

            $("#uploadPayoutListModal li:nth-child(2)").click(function () {
                $("#uploadPayoutListModal .modal-dialog .modal-footer").addClass("hidden");
                $("#uploadPayoutListModal .modal-dialog .modal-body").addClass("nofooter");
            });

            $("#uploadPayoutListModal li:nth-child(1)").click(function () {
                $("#uploadPayoutListModal .modal-dialog .modal-footer").removeClass("hidden");
                $("#uploadPayoutListModal .modal-dialog .modal-body").removeClass("nofooter");
            });
            // $("#uploadPayoutListModal .tab-changefooterChatSupport li:first-child").click(function () {
            //     $("#uploadPayoutListModal .modal-dialog .modal-header .modal-topicons .search-box-modal").show();
            //     $("#uploadPayoutListModal .modal-dialog .modal-footer .twobtndiv").show();
            //     $("#uploadPayoutListModal .modal-dialog .modal-footer .onebtndiv").addClass("hidden");
            // });

            $("#contactSupportmodal .tab-changefooterChatSupport li:nth-child(2)").click(function () {
                $("#contactSupportmodal .modal-dialog .modal-footer .row").hide();
                $("#contactSupportmodal .modal-dialog .modal-footer .chat-footer").removeClass("hidden");
            });
            $("#contactSupportmodal .tab-changefooterChatSupport li:first-child").click(function () {
                $("#contactSupportmodal .modal-dialog .modal-footer .row").show();
                $("#contactSupportmodal .modal-dialog .modal-footer .chat-footer").addClass("hidden");
            });
        },

        initFilterPrograms: function () {
            var $programcount = $('.programCount').click(function () {
                var $el = $('.' + this.id).fadeIn(450);
                $('#programFilter .loaded-grid > div').not($el).hide();
                $programcount.removeClass('active');
                $(this).addClass('active');
            });
            var $programcount = $('.programCount').click(function () {
                var $el = $('.' + this.id).fadeIn(450);
                $('#customerfilter > div').not($el).hide();
                $programcount.removeClass('active');
                $(this).addClass('active');
            });
        },

        initimgSwap: function () {
            //arrange top header
            var src1 = "https://cdn.vineforce.com/vineforce/images/svg/arrange.svg";
            var src2 = "https://cdn.vineforce.com/vineforce/images/svg/arrange-blue.svg";
            $('.modalheaderfilter button img').click(function () {
                var src = $('.modalheaderfilter button img').attr('src');
                if (src == src2) { $('.modalheaderfilter button img').attr('src', src1); }
                else { $('.modalheaderfilter button img').attr('src', src2); }
            });

        },

        initSVGicons: function () {
            /* Replace all SVG images with inline SVG*/
            jQuery('img.svg').each(function () {
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');
                jQuery.get(imgURL, function (data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');

                    // Add replaced image's ID to the new SVG
                    if (typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                    }
                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');
                    // Replace image with new SVG
                    $img.replaceWith($svg);
                }, 'xml');
            });
        },
        initCompensationType: function () {
            $("input[name='compensation']").click(function () {
                if ($("#compCash").is(":checked")) {
                    $('.reward').hide();
                    $('.taxable').hide();
                } else {
                    $('.reward').show();
                    $('.taxable').show();
                }
            });
        },

        initPayDate: function () {
            $("input[name='filterPay']").click(function () {
                if ($("#filterPayPaid").is(":checked")) {
                    $('.pay-date').show();
                } else {
                    $('.pay-date').hide();
                }
            });
        },

        initActivityModal: function () {

            $('.activity-modal').on('show.bs.modal', function (e) {
                $(".activity-save .dropdown-menu").parent().addClass("dropup");
            });
            $(".side-links ul li:first-child").click(function () {
                $(".activity-modal .modal-dialog .modal-footer").show();
                $(".activity-modal .modal-footer .activityMainFooter").show();
                $(".activity-save .dropdown-menu").parent().addClass("dropup");
                $(".activity-modal .modal-dialog .modal-footer .btn-nosubmenu").hide();
            });
            $(".side-links ul li:nth-child(3), .side-links ul li:nth-child(4), .side-links ul li:nth-child(5)").click(function () {
                $(".activity-modal .modal-dialog .modal-footer").hide();
                $(".activity-modal .modal-dialog .modal-footer .btn-nosubmenu").hide();
            });
            $(".activity-modal .side-links ul li:nth-child(3), .activity-modal .side-links ul li:nth-child(4), .activity-modal .side-links ul li:nth-child(5)").click(function () {
                $(".activity-modal .modal-body").addClass("nofooter");
            });
            $(".activity-modal .modal-dialog .modal-footer .btn-nosubmenu").hide();
            $(".side-links ul li:nth-child(2)").click(function () {
                $(".activity-modal .modal-dialog .modal-footer").show();
                $(".activity-modal .modal-dialog .modal-footer .btn-nosubmenu").show();
                $(".activity-modal .modal-dialog .modal-footer .activity-save").hide();
            });
            $("#activityModalSidebar .side-links ul li:nth-child(1)").click(function () {
                $("#activityModalSidebar .modal-body").removeClass("nofooter");
                $("#activityModalSidebar .modal-dialog .modal-footer .activity-save").show();
            });
            $(".icon-activities").hide();
            $(".side-links ul li:last-child").click(function () {
                $(".icon-activities").show();
            });
            $(".side-links ul li:nth-child(2), .side-links ul li:nth-child(3), .side-links ul li:nth-child(4), .side-links ul li:nth-child(1)").click(function () {
                $(".icon-activities").hide();
            });
            // $("#viewactivityModalSidebar .side-links ul li:nth-child(1)").click(function () {
            //     $("#viewactivityModalSidebar .modal-dialog .modal-footer").hide();
            //     $("#viewactivityModalSidebar .modal-dialog .modal-body").css({ 'height': '100%' });
            // });

            $(".activity-modal .side-links ul li:first-child, .side-links ul li:nth-child(5), .side-links ul li:nth-child(4)").click(function(){
                $(".modal-header .modal-title span:first-child").addClass("program-truncate-long");
                $(".modal-header .modal-title span:first-child").removeClass("program-truncate");
            });
            $(".activity-modal .side-links ul li:nth-child(2), .side-links ul li:nth-child(3)").click(function(){
                $(".modal-header .modal-title span:first-child").removeClass("program-truncate-long");
                $(".modal-header .modal-title span:first-child").addClass("program-truncate");
            });

            $('#customerProfileModalSidebar').on('show.bs.modal', function (e) {
                if($(".customer-profile .modal-body .activity-section .nav-tabs li:first-child").hasClass("active")){
                    $(".profileFooter").show();
                    $(".historyFooter").hide();
                    $(".profileFooter .dropdown-menu").parent().addClass("dropup");
                }
            });

            $(".customer-profile .modal-body .activity-section .nav-tabs li:first-child").click(function(){
                $("#customerProfileModalSidebar .modal-body").removeClass("nofooter");
                $("#customerProfileModalSidebar .modal-footer").show();
                $(".profileFooter").show();
                $(".historyFooter").hide();
            });
            $(".customer-profile .modal-body .activity-section .nav-tabs li:nth-child(2)").click(function(){
                $("#customerProfileModalSidebar .modal-body").addClass("nofooter");
                $("#customerProfileModalSidebar .modal-footer").hide();
            });
            $(".customer-profile .modal-body .activity-section .nav-tabs li:nth-child(3)").click(function(){
                $("#customerProfileModalSidebar .modal-body").removeClass("nofooter");
                $("#customerProfileModalSidebar .modal-footer").show();
                $(".profileFooter").hide();
                $(".historyFooter").show();
            });
        },

        initsummernote: function () {
            
            $('.summernote').summernote({
                height: 100,
                toolbar: [
                    // [groupName, [list of button]]
                    ['style', ['bold', 'italic', 'underline']],
                    ['para', ['ul', 'ol', 'paragraph']]
                ]
            });
	       
        },

        inittrackingdetails: function () {
            $(".trackingDetails").hide();
            $("input[name='track']").click(function () {
                if ($(this).is(":checked")) {
                    $(".trackingDetails").show();
                } else {
                    $(".trackingDetails").hide();
                }
            });
            $("input[name='edittrack']").click(function () {
                if ($(this).is(":checked")) {
                    $(".trackingDetails").show();
                } else {
                    $(".trackingDetails").hide();
                }
            });


        },

        initAccordianSales: function () {

            // Change icon for collapse element which is open by default
            $(".collapse.in").each(function () {
                $(this).siblings(".panel-heading").find(".collapse-icon").removeClass("collapse-icon").addClass("expand-icon");
            });

            // Toggle icon on show hide of collapse element
            $(".collapse").on('show.bs.collapse', function () {
                $(this).parent().find(".collapse-icon").removeClass("collapse-icon").addClass("expand-icon");
            }).on('hide.bs.collapse', function () {
                $(this).parent().find(".expand-icon").removeClass("add-icon").addClass("collapse-icon");
            });
        },

        initProgramstatus: function () {
            $('#editactivityModalSidebar').on('show.bs.modal', function (e) {
                $(".activity-save .dropdown-menu").parent().addClass("dropup");
                if ($("#editactivityModalSidebar .modal-body .side-links ul li:nth-child(1)").hasClass("active")) {
                    $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer").show();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .activity-save").show();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .btn-nosubmenu").hide();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-draft").show();
                }
                if ($("#editactivityModalSidebar .modal-body .side-links ul li:nth-child(2)").hasClass("active")) {
                    $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .btn-nosubmenu").show();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .activity-save").hide();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-draft").hide();
                }
            });
            $("#approvedPayoutactivityModalSidebar").on('show.bs.modal', function (e) {
                $(".activity-save .dropdown-menu").parent().addClass("dropup");

            });
            $("#editactivityModalSidebar .modal-body .side-links ul li:nth-child(1)").click(function(){
                $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .activity-save").show();
                    $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-draft").show();
            });
            $('#viewactivityModalSidebar').on('show.bs.modal', function (e) {
                $(".activity-save .dropdown-menu").parent().addClass("dropup");
                //$('#viewactivityModalSidebar .modal-body').addClass('nofooter');
                if ($("#viewactivityModalSidebar .modal-body .side-links ul li:nth-child(1)").hasClass("active")) {
                    $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                }
            });
            $('#activityModalSidebar').on('show.bs.modal', function (e) {
                $(".activity-save .dropdown-menu").parent().addClass("dropup");
                //$('#viewactivityModalSidebar .modal-body').addClass('nofooter');
                if ($("#activityModalSidebar .modal-body .side-links ul li:nth-child(1)").hasClass("active")) {
                    $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                }
            });
            $('#activityModalSidebar').on('show.bs.modal', function (e) {
                $("#activityModalSidebar .modal-dialog .modal-footer").show();
                $("#activityModalSidebar .modal-body").removeClass("nofooter");
                //$("#activityModalSidebar .modal-dialog .modal-footer .activity-save").show();
                if ($("#activityModalSidebar .modal-body .side-links ul li:nth-child(1)").hasClass("active")) {
                    $(".icon-activities").hide();
                    $(".icon-attachments-upload").hide();
                    $("#activityModalSidebar .modal-body").removeClass("nofooter");
                    $("#activityModalSidebar .modal-dialog .modal-footer .activity-save").show();
                }
            });
            
            $(".view-distributionPendingbtn").click(function () {
                $("#editactivityModalSidebar .modal-dialog .modal-footer").hide();
                $("#editactivityModalSidebar .modal-dialog .modal-body").addClass('nofooter');
                $(".status-distributionPending").show();
                $(".status-draft, .status-approvalPending, .status-recapping, .status-distributed, .status-cancelled").hide();
                $(".dropdown-draft, .dropdown-approverPending, .dropdown-recapping, .dropdown-distributed, .dropdown-cancelled").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-cancelled").click(function () {
                $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-cancelled").hide();
                $(".status-cancelled").show();
                $(".status-draft, .status-approvalPending, .status-recapping, .status-distributed, .status-distributionPending").hide();
                $(".dropdown-draft, .dropdown-approverPending, .dropdown-recapping, .dropdown-distributed, .dropdown-distributionPending").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-chargeback").click(function () {
                $(".status-chargeback").show();
                $(".status-closed, .status-rejectedApprover, .status-rejectedPayout, .status-approvedPayout").hide();
                $(".activityClosed").hide();
                $(".activitychargeback").show();
                $("#viewactivityModalSidebar .modal-dialog .modal-footer").show();
                $("#viewactivityModalSidebar .modal-dialog .modal-body").removeClass('nofooter');
                $("#viewactivityModalSidebar .side-links ul li:nth-child(3)").show();
            });
            $(".view-closed").click(function () {
                $(".status-closed").show();
                $(".status-chargeback, .status-rejectedApprover, .status-rejectedPayout").hide();
                $(".activityClosed").show();
                $(".activitychargeback").hide();
                $("#viewactivityModalSidebar .modal-dialog .modal-footer").show();
                $("#viewactivityModalSidebar .modal-dialog .modal-body").removeClass('nofooter');
                $("#viewactivityModalSidebar .side-links ul li:nth-child(3)").show();
            });
            $(".view-rejectedPayout").click(function () {
                $(".status-rejectedPayout").show();
                $(".status-closed, .status-chargeback, .status-rejectedApprover").hide();
                $(".activityClosed").show();
                $(".activitychargeback").hide();
                $("#viewactivityModalSidebar .modal-dialog .modal-footer").show();
                $("#viewactivityModalSidebar .modal-dialog .modal-body").removeClass('nofooter');
                $("#viewactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            
            $(".view-rejectedApprover").click(function () {
                $(".status-rejectedApprover").show();
                $(".status-closed, .status-chargeback, .status-rejectedPayout").hide();
                $(".activityClosed").show();
                $(".activitychargeback").hide();
                $("#viewactivityModalSidebar .side-links ul li:nth-child(3)").show();
            });
            $(".view-distributed").click(function () {
                $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-distributed").hide();
                $(".status-distributed").show();
                $(".status-draft, .status-approvalPending, .status-recapping, .status-distributionPending, .status-cancelled").hide();
                $(".dropdown-draft, .dropdown-approverPending, .dropdown-recapping, .dropdown-distributionPending, .dropdown-cancelled").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-recapping").click(function () {
                $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-recapping").hide();
                $(".status-recapping").show();
                $(".status-draft, .status-approvalPending, .status-distributed, .status-distributionPending, .status-cancelled").hide();
                $(".dropdown-draft, .dropdown-approverPending, .dropdown-distributed, .dropdown-distributionPending, .dropdown-cancelled").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-approvalPending").click(function () {
                $(".status-approvalPending").show();
                $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-approverPending").hide();
                $(".status-draft, .status-recapping, .status-distributed, .status-distributionPending, .status-cancelled").hide();
                $(".dropdown-draft, .dropdown-recapping, .dropdown-distributed, .dropdown-distributionPending, .dropdown-cancelled").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-draft").click(function () {
                $("#editactivityModalSidebar .modal-dialog .modal-footer").show();
                $("#editactivityModalSidebar .modal-dialog .modal-footer .dropdown-draft").show();
                $(".status-draft").show();
                $(".status-approvalPending, .status-recapping, .status-distributed, .status-distributionPending, .status-cancelled").hide();
                $(".dropdown-approverPending, .dropdown-recapping, .dropdown-distributed, .dropdown-distributionPending, .dropdown-cancelled").hide();
                $("#editactivityModalSidebar .side-links ul li:nth-child(3)").hide();
            });
            $(".view-payouttab").click(function () {
                $("#viewactivityModalSidebar .side-links ul li:nth-child(3)").removeClass("hidden");
            });
            $(".icon-payout").hide();
            $(".modalfilter").hide();
            $(".icon-search").hide();
            $(".icon-attachments-upload").hide();
            $(".activity-modal .side-links ul li:nth-child(3)").click(function () {
                $(".icon-payout").show();
                $(".modalfilter").show();
                $(".icon-search").show();
                $(".icon-attachments-upload").hide();
            });
            $(".activity-modal .side-links ul li:nth-child(2)").click(function () {
                $(".icon-payout").hide();
                $(".icon-search").show();
                $(".modalfilter").hide();
                $(".icon-attachments-upload").hide();
            });
            $(".activity-modal .side-links ul li:nth-child(4)").click(function () {
                $(".icon-attachments-upload").show();
                $(".icon-payout").hide();
                $(".icon-search").hide();
                $(".modalfilter").hide();
            });
            $(".activity-modal .side-links ul li:nth-child(1),.activity-modal .side-links ul li:nth-child(5)").click(function () {
                $(".icon-payout").hide();
                $(".icon-search").hide();
                $(".modalfilter").hide();
                $(".icon-attachments-upload").hide();
            });
            //Payout Tab in programs
            $('.payout-data #autoUpdatecheck').addClass('hidden');
            $(".payout-data .row").click(function () {

                if($(this).index()>0){
                
                    $(this).toggleClass("selected-paydetail");
                    if($(".selected-paydetail").length>1){
                        $('.payout-data #autoUpdatecheck').removeClass('hidden');
                    }else{
                        $('.payout-data #autoUpdatecheck').addClass('hidden');
                    }
                }
            });
            $(".unselect-payouts").click(function(){
                $(".payout-data .row").removeClass("selected-paydetail");
                $('.payout-data #autoUpdatecheck').addClass('hidden');
            });
            setTimeout(
                function() 
                {
                    $(".payout-data .row .input-medium").click(function(){
                        $(".payout-data .row").removeClass("selected-paydetail");
                        $('.payout-data #autoUpdatecheck').addClass('hidden');
                    });
                }, 5000);
            //Payroll unpaid
            
            $('.payrollUnpaid-select #autoUpdatecheck').addClass('hidden');
            $(".payrollUnpaid-select .payroll-div .row").click(function () {

                if($(this).index()>0){
                
                    $(this).toggleClass("selected-paydetail");
                    if($(".selected-paydetail").length>1){
                        $('.payrollUnpaid-select #autoUpdatecheck').removeClass('hidden');
                    }else{
                        $('.payrollUnpaid-select #autoUpdatecheck').addClass('hidden');
                    }
                }
            });
            $(".unselect-payouts").click(function(){
                $(".payrollUnpaid-select .row").removeClass("selected-paydetail");
                $('.payrollUnpaid-select #autoUpdatecheck').addClass('hidden');
            });
            setTimeout(
                function() 
                {
                    $(".payrollUnpaid-select .row .input-medium").keyup(function(){
                        $(".row").removeClass("selected-paydetail");
                        $('.payrollUnpaid-select #autoUpdatecheck').addClass('hidden');
                    });
                }, 5000);
            
            // Sales team multiselect
            $('.salesteam-data #autoUpdatecheck').addClass('hidden');
            $(".salesteam-data .row").click(function () {
                $(this).toggleClass("selected-paydetail");
                if ($(".selected-paydetail").length > 1) {
                    $('.salesteam-data #autoUpdatecheck').removeClass('hidden');
                } else {
                    $('.salesteam-data #autoUpdatecheck').addClass('hidden');
                }
            });

            $(".memberTypeGroup").hide();
            $("input[name='memberType']").click(function () {
                if ($("#membertyperole").is(":checked")) {
                    $(".memberTypeGroup").hide();
                    $(".memberTypeRole").show();
                } else {
                    $(".memberTypeGroup").show();
                    $(".memberTypeRole").hide();
                }
            });
            // payroll
            // $("input[name='notpaid']").click(function () {
            //     if ($("#notpaid").is(":checked")) {
            //         $(".hide-notpaid").hide();
            //     } else {
            //         $(".hide-notpaid").show();
            //     }
            // });
            $(".icon-search").hide();
            $(".tab-changefooter2ndModal li:nth-child(2)").click(function () {
                $(".icon-search").show();
            });
            $(".tab-changefooter2ndModal li:nth-child(1)").click(function () {
                $(".icon-search").hide();
            });
        },

        initsearchSelectAdmin: function () {

            $(".searchinput-admin").keyup(function () {
                var val = $(".searchinput-admin").val();
                if (val.length > 0) {
                    $('.searchicon').hide();
                    $('.search-admin .add-clear-x').show();
                }
                else {
                    $('.searchicon').show();
                    $('.search-admin .add-clear-x').hide();
                }
            });

            $(".search-admin .add-clear-x").click(function () {
                $('.searchicon').show();
            });
        },

        initPayoutDriversPerCase: function () {
            $('.payoutpercase').hide();
            $("input[name='PositionEmployee']").click(function () {
                if ($("#addformEmployee").is(":checked")) {
                    $(".showonDisplay").hide();
                }
                else {
                    $(".showonDisplay").show();
                }
            });
            $("input[name='payoutdriver']").click(function () {
                if ($("#payoutperdisplay").is(":checked")) {
                    $('.payoutperdisplay').show();
                    $('.payoutpercase').hide();
                } else {
                    $('.payoutpercase').show();
                    $('.payoutperdisplay').hide();
                }
            });

            $('.addemployee-form').hide();
            $("input[name='PositionEmployee']").click(function () {
                if ($("#addformPosition").is(":checked")) {
                    $('.addposition-form').show();
                    $('.addemployee-form').hide();
                } else {
                    $('.addemployee-form').show();
                    $('.addposition-form').hide();
                }
            });

            //Edit Case
            $('.editpayoutpercase').hide();
            $("input[name='editpayoutdriver']").click(function () {
                if ($("#editpayoutperdisplay").is(":checked")) {
                    $('.editpayoutperdisplay').show();
                    $('.editpayoutpercase').hide();
                } else {
                    $('.editpayoutpercase').show();
                    $('.editpayoutperdisplay').hide();
                }
            });
            $(".edit-payoutdriverCase").click(function () {
                $('#payoutdriverpercase-data').toggleClass("hidden");
            });

            $(".showonDisplay").hide();
            $('#incentivetype').on('changed.bs.select', function () {
                if ($('#incentivetype').val() == 2) {
                    $(".showonDisplay").show();
                }
                else {
                    $(".showonDisplay").hide();
                }
            });
        },

        initDisplayPayrollSlider: function () {
            $('.slider1').bxSlider({
                minSlides: 3,
                maxSlides: 4,
                slideMargin: 10,
                moveSlides: 3,
                controls: false,
                pager: false,
                mode: 'horizontal'
            });
        },
        initProgramNameCount:function() {
            var text_max = 150;
            var text_remaining = 150;
            var text_length = 0;
		    $('#programName_feedback').html(text_length + '/' + text_max);
		    $(document).on("keyup", "#program-name", function() {
		        var text_length = $(this).val().length;
		        var text_remaining = text_max - text_length;
                $('#programName_feedback').text(text_length + '/' + text_max);
                
                // if(text_remaining == 0){
                //     $('.input-group-merge-right .form-control').addClass("error");
                // }
                // else{
                //     $('.input-group-merge-right .form-control').removeClass("error");
                // }
            });

            // Edit Program
            var text_max = 150;
            var text_remaining = 150;
            var text_length = 0;
		    $('#programNameedit_feedback').html(text_length + '/' + text_max);
		    $(document).on("keyup", "#editprogramname", function() {
		        var text_length = $(this).val().length;
		        var text_remaining = text_max - text_length;
                $('#programNameedit_feedback').text(text_length + '/' + text_max);
                
                // if(text_remaining == 0){
                //     $('.input-group-merge-right .form-control').addClass("error");
                // }
                // else{
                //     $('.input-group-merge-right .form-control').removeClass("error");
                // }
            });
        },
        
        initSeemoreLess: function(){
            
            $(".morebtn").siblings().addClass("lesscontent");
            $(".morebtn").text("See more");
            $(".morebtn").click(function(){
                $(this).siblings().toggleClass("morecontent");
                $(this).siblings().toggleClass("lesscontent");
                if($(this).siblings().hasClass("morecontent")){
                    $(this).text("See less");
                };
                if($(this).siblings().hasClass("lesscontent")){
                    $(this).text("See more");
                };
               
            });
        },

        initSalesProgram: function(){
            $(".divMyteam").hide();
            $("input[name='filterteams']").click(function () {
                if ($("#filtermyteam").is(":checked")) {
                    $('.divMyteam').show();
                } else {
                    $('.divMyteam').hide();
                }
            });
        },

        initSelectResize:function(){
            $(window).load(function() {
                $('#paging-select').width($("#width_paging-select").width());  
            });
            $('#paging-select').change(function(){
                $("#width_paging-option").html($('#paging-select option:selected').text());
                $(this).width($("#width_paging-select").width());  
            });
        },

        init: function () {
            this.initTypeahead();
            this.initaddnewtag();
            this.initModalfooter();
            this.initFilterPrograms();
            this.initimgSwap();
            this.initSVGicons();
            this.initCompensationType();
            this.initPayDate();
            this.initActivityModal();
            this.initsummernote();
            this.inittrackingdetails();
            this.initAccordianSales();
            this.initProgramstatus();
            this.initsearchSelectAdmin();
            this.initPayoutDriversPerCase();
            this.initDisplayPayrollSlider();
            this.initProgramNameCount();
            this.initSeemoreLess();
            this.initSalesProgram();
            this.initSelectResize();

        }
    };

}();
Dashboard.init(); // init components

// Filter in Modal stop on inside click and close on cross click
$('.modalfilter .dropdown-menu, .icon-attachments-upload .dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$('.modalfilter .dropdown-menu .close-dropdown, .icon-attachments-upload .dropdown-menu .close-dropdown').dropdown('toggle');

//Attachment Dropdown
// Filter in Modal stop on inside click and close on cross click
$('.icon-attachments-upload .dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$('.icon-attachments-upload .dropdown-menu .close-dropdown').dropdown('toggle');

// Suggested type in Modal stop on inside click and close on cross click
$('.modalSuggestedType .dropdown-menu').click(function (e) {
    e.stopPropagation();
});
$('.modalSuggestedType .dropdown-menu .close-dropdown').dropdown('toggle');

$('.suggestion-dropdown').click(function (event) {
    event.stopPropagation();
});

if (navigator.userAgent.match(/like Mac OS X/i)) {
    $('.selectpicker.selectpickerSales').selectpicker({
        mobile:true,
    });
}
//Selectpicker Dropup
$('.selectpickerup').selectpicker({
    dropupAuto:false,
    container: 'body',
});
$(".selectpicker2").selectpicker({
    container: 'body',
});
$(".selectpicker").selectpicker({
    container: 'body',
});

//Sweet alert
!function ($) {
    "use strict";

    var SweetAlert = function () { };

    //examples 
    SweetAlert.prototype.init = function () {

        //Parameter
        $('#delete-company').click(function () {
            swal({
                title: "Are you sure?",
                text: "Marking this Company inactive will also mark its users inactive.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $('.modal').modal('hide');
                    }
                });
        });
        $('#delete-user').click(function () {

            swal({
                title: "Are you sure?",
                text: "You want to delete this user?",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Deleted!", "Your user has been deleted.", "success");
                    }
                    else {
                        swal("Cancelled", "Your user file is safe :)", "error");
                    }
                });
        });
        $('.save-confirmationalert').click(function () {
            swal({
                title: "Are you sure?",
                text: "All unsaved changes will be lost.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $('.modal').modal('hide');
                    }
                });
        });
        $('#deletefilter').click(function () {
            swal({
                title: "Are you sure?",
                text: "you want to delete this filter?",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
                .then((willDelete) => {
                    if (willDelete) {
                        $('.modal').modal('hide');
                    }
                });
        });
        $('.movetotrashAlert').click(function () {
            swal({
                title: "Are you sure you want to move this program to trash?",
                text: "You will not be able to undo this action.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
                .then((willDelete) => {
                    if (willDelete) {

                    }
                });
        });
        $('#exportSuppliers').click(function () {
            swal({
                title: "Please wait!",
                text: "While we export your file.",
                icon: "warning",
                className: "fileuploader",
                closeOnClickOutside: false,
                buttons: {
                    cancel: "Cancel Export",
                },
            })
        });
        $('#importSuppliers').click(function () {
            swal({
                title: "Please wait!",
                text: "While we upload your file.",
                icon: "warning",
                className: "fileuploader",
                closeOnClickOutside: false,
                buttons: {
                    cancel: "Cancel Upload",
                },
            })
        });
        $('#delete-incentivetype').click(function () {

            swal({
                title: "Are you sure?",
                text: "You want to remove this Incentive Type?",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('#delete-categorytype').click(function () {

            swal({
                title: "Are you sure?",
                text: "You want to remove this Category?",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('#delete-trackingtype').click(function () {

            swal({
                title: "Are you sure?",
                text: "You want to remove this Tracking Tool?",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('.delete-supplier').click(function () {
            swal({
                title: "Are you sure?",
                text: "This will remove all Brands and Items added to this Supplier.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('.delete-attachments').click(function () {
            swal({
                title: "Are you sure?",
                text: "You won't be able to retrieve this file.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('.delete-position').click(function () {
            swal({
                title: "Are you sure?",
                text: "You are about to delete 10 Employee/Position.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        $('.delete-payout').click(function () {
            swal({
                title: "Are you sure?",
                text: "You will be deleting 2 Payout/s.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            })
        });
        //Close pay Period
        $('.close-payperiod').click(function () {
            swal({
                title: "Are you sure?",
                text: "This will close the pay period.",
                icon: "warning",
                buttons: {
                    cancel: "No",
                    confirm: "Yes",
                },
            }) 
            .then((willDelete) => {
                if (willDelete) {
                   $(".closepaySavedForm").show();
                   $(".closepayForm").hide();
                }
            });
        });
    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);

$("#defaultCredentialsShow").hide();
$("#defaultCredentials").click(function () {
    if ($(this).is(":checked")) {
        $("#defaultCredentialsShow").hide(300);
    } else {
        $("#defaultCredentialsShow").show(200);
    }
});
// Login as user in Company
$('.select-userLogin a').click(function (e) {
    e.preventDefault()

    $that = $(this);

    $('.select-userLogin').find('a').removeClass('selected-userLogin');
    $that.addClass('selected-userLogin');

});

// Dropdown Actions
// Add slideup & fadein animation to dropdown
$('.dropdown').on('show.bs.dropdown', function (e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({ 'margin-top': (orig_margin_top + 10) + 'px', opacity: 0 }).animate({ 'margin-top': orig_margin_top + 'px', opacity: 1 }, 300, function () {
        $(this).css({ 'margin-top': '' });
    });
});
// Add slidedown & fadeout animation to dropdown
$('.dropdown').on('hide.bs.dropdown', function (e) {
    var $dropdown = $(this).find('.dropdown-menu');
    var orig_margin_top = parseInt($dropdown.css('margin-top'));
    $dropdown.css({ 'margin-top': orig_margin_top + 'px', opacity: 1, display: 'block' }).animate({ 'margin-top': (orig_margin_top + 10) + 'px', opacity: 0 }, 300, function () {
        $(this).css({ 'margin-top': '', display: '' });
    });
});


$(document).on("shown.bs.dropdown", ".dropdown", function () {
    var $ul = $(this).children(".dropdown-menu");
    var $button = $(this).children(".dropdown-toggle");
    var ulOffset = $ul.offset();
    var spaceUp = (ulOffset.top - $button.height() - $ul.height()) - $(window).scrollTop();
    var spaceDown = $(window).scrollTop() + $(window).height() - (ulOffset.top + $ul.height());
    if (spaceDown < 50 && (spaceUp >= 50 || spaceUp > spaceDown))
        $(this).addClass("dropup");
}).on("hidden.bs.dropdown", ".dropdown", function () {
    $(this).removeClass("dropup");
});


//multiple typeahead for Licenced User State Filter
!function (source) {
    function extractor(query) {
        var result = /([^,]+)$/.exec(query);
        if (result && result[1])
            return result[1].trim();
        return '';
    }

    $('.multistatetypeahead').typeahead({
        source: source,
        updater: function (item) {
            return this.$element.val().replace(/[^,]*$/, '') + item + ',';
        },
        matcher: function (item) {
            var tquery = extractor(this.query);
            if (!tquery) return false;
            return ~item.toLowerCase().indexOf(tquery.toLowerCase())
        },
        highlighter: function (item) {

            var query = extractor(this.query).replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
            return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
                return '<strong>' + match + '</strong>'
            })
        }
    });

}(["CA", "AK", "AZ", "AR", "CO", "CT", "DE", "FL", "GA", "HI"]);

/* Added new data to filter */
$('.deleting-btn').hide();
$("#save-filter").click(function () {
    var filtername = $('#filtername').val();
    if (filtername.length > 0) {
        $('#saveNewFilterModal').modal('hide');
        $('.add-filter-data').html("<h5 class='modal-title' id='FilterProgramsModalLabel'><span class='add-filter-data update-data added-filename'>" + filtername + "</span> <a href='#' id='editdata'><img src='https://cdn.vineforce.com/vineforce/images/png/edit.png'></a></h5>");
        // $(".saving-btn").html("<button type='button' class='btn btn-block btn-gradient btn-modal delete-btn' id='deletefilter'>Delete Filter</button>")
        $('.saving-btn').hide();
        $('.deleting-btn').show();
    }
});

/* set data from filter */
$(".modal-title").on("click", "#editdata", function (event) {
    $('#editFilterModal').modal('show');
    var filternamedata1 = $('.added-filename').html();
    $('#editfiltername').val(filternamedata1);
});
$('input[id=editfiltername333]').val('Expiring this month');
$("#savefilter").click(function () {
    var filternamedata = $('#editfiltername333').val();
    if (filternamedata.length > 0) {
        $('#editFilterModal').modal('hide');
        $('.update-data').html($('#editfiltername333').val());
    }
});
/* reset data to filter */
$("#savefilter").click(function () {
    var filternamedata = $('#editfiltername').val();
    if (filternamedata.length > 0) {
        $('#editFilterModal').modal('hide');
        $('.update-data').html($('#editfiltername').val());
    }
});

//dropup and dropdown in Dropdown-menu according to window size
function determineDropDirection() {
    $(".dropdown-menu").each(function () {

        // Invisibly expand the dropdown menu so its true height can be calculated
        $(this).css({
            visibility: "hidden",
            display: "block"
        });
        // Necessary to remove class each time so we don't unwantedly use dropup's offset top
        $(this).parent().removeClass("dropup");

        // Determine whether bottom of menu will be below window at current scroll position
        if ($(this).offset().top + $(this).outerHeight() > $(window).innerHeight() + $(window).scrollTop()) {
            $(this).parent().addClass("dropup");
        }

        // Return dropdown menu to fully hidden state
        $(this).removeAttr("style");
    });
}

determineDropDirection();
$(window).scroll(determineDropDirection);


//EDITABLE FIELD
//turn to inline mode
$.fn.editable.defaults.mode = 'inline';

$('.editable').editable({
    showbuttons: false,
    autotext:'auto',
    display: function(value) {
        $(this).text('$' + value + '.00' );
      }
    // showbuttons: false,
    
    // tpl: "<div class='input-group input-group-pay'><div class='input-group-addon'>$</div><input type='text' class='form-control input-medium'></div>",
    // tpl: "<input type='text' class='form-control' placeholder='0.00'>"
});
/* for dynamic created class for numeric value in x-editable code */
$(document).on('keyup', 'input.input-medium', function() {
    // skip for arrow keys
    if(event.which >= 37 && event.which <= 40){
        event.preventDefault();
    }
    var $this = $(this);
    var num = $this.val().replace(/,/gi, "").split("").reverse().join("");    
    var num2 = RemoveRougeChar(num.replace(/(.{3})/g,"$1,").split("").reverse().join(""));    
    
    // the following line has been simplified. Revision history contains original.
    $this.val(num2);
    function RemoveRougeChar(convertString){
    if(convertString.substring(0,1) == ","){        
        return convertString.substring(1, convertString.length)    
    }
    return convertString;
    }
});


/* ================================================
 * Extend Bootstrap 3 Tooltip plugin by adding custom classes.
 * ============================================= */

(function ($) {
  if (typeof $.fn.tooltip.Constructor === 'undefined') {
    throw new Error('Bootstrap Tooltip must be included first!');
  }
  var Tooltip = $.fn.tooltip.Constructor;
  $.extend( Tooltip.DEFAULTS, {
    customClass: ''
  });
  var _show = Tooltip.prototype.show;
  Tooltip.prototype.show = function () {
    _show.apply(this,Array.prototype.slice.apply(arguments));
    if ( this.options.customClass ) {
        var $tip = this.tip()
        $tip.addClass(this.options.customClass);
    }
  };
})(window.jQuery);

$('.modalpayroll').tooltip({
    customClass: 'supplier-tooltip'
});
$('.contentMore').tooltip({
    customClass: 'supplier-list-tooltip'
});
// large width for tooltip
// $('.badge-tooltip').tooltip({
//     customClass: 'lg-tooltip'
// });

// END

//For Payout Driver option in sales team tab
$('.editable-percase').editable({
    showbuttons: false,
    tpl: "<input type='text' class='form-control' placeholder='$1,000.00' style='position:absolute;top:-8px;padding:6px;'>"
}).on('shown', function (e, editable) {
    $('.payoutcasevalues .label').hide();
}).on('hidden', function (e, editable) {
    $('.payoutcasevalues .label').show();
});


determineDropDirection();
$(window).scroll(determineDropDirection);

//jMentions (https://github.com/icorradi/jMentions)
$('#secactivitiesmsg').jMentions({
    source: function (prefix) {
        var data = [
            { "username": "jhon", "name": "Jhon", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "maria", "name": "Maria", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "alex", "name": "Alex", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "ava", "name": "Ava Ranara", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "nik", "name": "Nikunj Varu", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "harsh", "name": "Harsh Gupta", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "jason", "name": "Jason Murrey", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" },
            { "username": "cathy", "name": "Catherine Valdez", "user-pic": "https://cdn.vineforce.com/vineforce/images/profile.png" }
        ];

        var newData = data.filter(function (element) {
            return element.username.indexOf(prefix) != -1 || element.name.indexOf(prefix) != -1;;
        });
        return newData;
    },
    value: 'username', // default is 'value'
    label: 'name', // default is 'label'
    avatar: 'user-pic', // default is 'avatar'
    dropdownClass: 'jmention' // default is 'jmentions-dropdown'
});


/* Example to get mentions results (FOR DEVELOPERS)*/
// $('#results-button').click(function() {
//     console.log($.jMentions.getResults('.editable1'));
// })
lc_lightbox('.displayPayout', {
    wrap_class: 'lcl_fade_oc',
    gallery: true,
    thumb_attr: 'data-lcl-thumb'
});
// Scroll issue for textarea and summernote
$(".slimscroll .note-editable, .slimscroll textarea").on("mousewheel", function(e){e.stopPropagation();});
$("#clearVisitOutcome").click(function () {
    $('#visitoutcome').val('');
});
// Scroll to top 
$(".filterScroll").on('hide.bs.modal', function (e) {
    $('.slimscroll').slimScroll({ scrollTo : '0px' });
});
