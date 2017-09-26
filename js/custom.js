var nameId;
var imgId
$(document).ready(function () {
    
    //$('#my-textarea').ckeditor();
    //CKEDITOR.replace( 'editor1');
    //$('#calendar').calendar();

    //$('#calendar').calendar({date: '2017-01-01'});
    //$('#calendar').calendar({color: '`  pink'});

    var events = [
        {start: '2017-04-01', end: '2017-04-07', summary: "Example Event", mask: true}, 
        {start: '2017-04-14', end: '2017-04-20', summary: "Example Event #2", mask: true},
        {start: '2017-05-05', end: '2017-05-15', summary: "Example Event #3", mask: true}
    ];

    $('.footerYear').html(new Date().getFullYear());


    //$('.blink').blink({
    //    delay: 200
    //
    //});
    //
    //$('.blink').unblink({ delay: 500 });

    $('.db_result').show();
        setTimeout(function () {
            $('.db-alert').fadeOut();
            $('.db_result').fadeOut();
        }, 10000);

    $('.team-1-member > h2').each(function (index) {
        nameId = $(this).closest('.team-1-member > h2').text();
        nameId = nameId.replace(/\s+/g, ''); //removing spaces
        $(this).closest('.team-1-member > h2').attr("id", nameId);
        imgId = "img_" + nameId;
        console.log(nameId + ": " + imgId);
        $(this).closest('.team-1-member').find('img').attr("id", imgId);
        var checkthis = $(this).closest('.team-1-member').find('img').attr("src");
        console.log("img attr is: " + checkthis);
    });

    $('.editTeamMember').each(function (index) {
        $(this).append('<input type="button" class="btnEditTeamMember alt-font btn btn-primary login-button btn-xs" value="Edit" /> <br/>');
    });

    $('.btnEditTeamMember').on('click', function () {
        var imgSrc = $(this).closest('.col-sm-4').find('.team-1-member>img').attr('src');
        //console.log("inside method: " + imgSrc);
        var nameTxt = $(this).closest('.col-sm-4').find('.team-1-member>h2').text();

        //$(this).closest('.editTeamMember').append('<div class="showEditContent" style="border: dotted 2px #5bc0de;"></div>');
        $(this).closest('.editTeamMember').append(
            '<form class="mbrForm" action="" method="post" enctype="multipart/form-data">'
        + '<fieldset style="position:relative; border: outset 4px #5bc0de;">'
        + '<legend> ' + nameTxt + ' New  Panel Changes </legend>'
        + '<button class="closeEditForm" style="position: absolute;right:10px;top:-5px;outline:5px solid #fff">'
        + '<img src="/Images/close_X.png" />'
        + '</button>'
        + '<img src="' + imgSrc + '"  height=150 weight=150 />'
        + '<br /> <br />'
        + '<label for="Image"><strong>Upload New Image For ' + nameTxt + ':</strong></label> <br />'
        + '<input type="file" accept="image/*" name="image" />'
        + '<br/ ><br />'
        + '<label for="Name"><strong>Board Member Name:</strong></label>'
        + '&ensp;&ensp;&ensp;<input type="text" name="Name" placeholder="If editing, enter new name" />'
        + '<br/ > <br />'
        + '<label for="Position"><strong>Board Member Position:</strong></label>'
        + '&ensp;<input type="text" name="Position" placeholder="If editing, enter new position" />'
        + '<br/ > <br />'
        + '<textarea rows="4" cols="45" name="Description" placeholder="If editing, enter new description for ' + nameTxt + '"' + ' ></textarea>'
        + '<br/>'
        + '<input type="submit" value="Submit Changes" />'
        + '</fieldset>'
        + '</form>'
        );

    });

    $('.closeEditForm').on('.click', function () {
        $(this).closest(".editTeamMember").find('.editTeamMember > form').hide();
    });

    function SessionExpireAlert(timeout) {
    var seconds = timeout / 1000;
    document.getElementsByName("secondsIdle").innerHTML = seconds;
    document.getElementsByName("seconds").innerHTML = seconds;
    setInterval(function () {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("secondsIdle").innerHTML = seconds;
    }, 1000);
    setTimeout(function () {
        //Show Popup before 20 seconds of timeout.
        $find("mpeTimeout").show();
    }, timeout - 20 * 1000);
    setTimeout(function () {
        window.location = "Expired.aspx";
    }, timeout);
};

  function ResetSession() {
     //Redirect to refresh Session.
     window.location = window.location.href;
  }
});
