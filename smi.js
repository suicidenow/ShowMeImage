$.fn.ShowMeImage = function (param) {
    $(this).on("change", function() {
        var files = $(this)[0].files;
        $.each(files, function(i, t) {
            var fileName = this.name
              , newFile = new FileReader;
            newFile.readAsDataURL(this),
            newFile.onloadend = function() {
                $(""+param+"").after('<div class="attach-file" data-file="' + fileName + '"><img src="' + newFile.result + '"><input type="file" style="display:none;" value="' + newFile.result + '"><div class="attach-file-delete">&times;</div></div>'),
                $(".attach-file").each(function(i) {
                    $(this).find("input").attr("name", "file-" + i)
                }),
                $(".attach-file").on("click", function() {
                    $(this).remove()
                })
            }
        })
    });
};