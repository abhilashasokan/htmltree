$(function() {
    $(".css-treeview li").draggable({
        revert: "invalid",
        refreshPositions: true,
        helper: 'clone',
        start: function(event, ui) {
            var dragging_data_csdata_type = $(event.target).attr('data-csdata_type');
            $('#outerbox [data-csdata_type="' + dragging_data_csdata_type + '"]').addClass('highlighted');
        },
        drag: function(event, ui) {
            ui.helper.addClass("draggable");
        },
        stop: function(event, ui) {
            var dragging_data_csdata_type = $(event.target).attr('data-csdata_type');
            $('#outerbox [data-csdata_type="' + dragging_data_csdata_type + '"]').removeClass('highlighted');
        }
    });

    $(".dropzones").droppable({
        accept: ".file",
        drop: function(event, ui) {
            var dragging_data_csdata_type = $(ui.draggable).attr('data-csdata_type');
            var receivers_data_csdata_type = $(this).attr('data-csdata_type');
            //console.log("dragging_data_csdata_type ==> " + dragging_data_csdata_type);
            //console.log("receivers_data_csdata_type ==> " + receivers_data_csdata_type);
            if (dragging_data_csdata_type === receivers_data_csdata_type) {
                ui.draggable.addClass("dropped");
                $(this).html($(ui.draggable).attr('data-dragcontent'));
            } else {
                alert('We can only drop this content to an element of type "' + dragging_data_csdata_type + '"');
            }
        }
    });
});
