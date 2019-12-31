(function($) {

    function createToc() {
        let last_heading = {};
        $("h2, h3").each(function() {
            let current_heading = {
                text: $(this).text(),
                id: $(this).attr('id'),
                tag: $(this).prop('tagName')
            };

            if (!$.isEmptyObject(last_heading)) {
                if (last_heading.tag === "H2" && current_heading === "H3") {
                    
                } else if (last_heading.tag === "H3" && current_heading === "H2") {
                    
                    
                } else {

                }
            }
            last_heading = current_heading;
        });
    }


    $(function() {
        createToc();
    });
})( jQuery );
