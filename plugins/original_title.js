original_title = {
    metadata_xml: null,

    init: function(metadata_xml) {
        original_title.metadata_xml = metadata_xml;

        original_title.addTitle();
    },

    addTitle: function() {
        var original_movie_title = original_title.metadata_xml.getElementsByTagName("MediaContainer")[0].getElementsByTagName("Video")[0].getAttribute("originalTitle");
        utils.debug("original_title plugin: Got original movie title - " + original_movie_title);

        if (original_movie_title) {
            original_title.insertOriginalTitle(original_movie_title);
        }
    },

    insertOriginalTitle: function(original_movie_title) {
        var original_title_container = original_title.constructOriginalTitleContainer(original_movie_title);

        utils.debug("original_title plugin: Inserting original_title container into page");
        document.getElementsByClassName("movie-details-row")[0].appendChild(original_title_container);
    },

    constructOriginalTitleContainer: function(original_movie_title) {
        // build details-title-container
        var details_title_container_element = document.createElement("div");
        details_title_container_element.setAttribute("class", "details-title-container");
        details_title_container_element.setAttribute("id", "original-movie-title");
        details_title_container_element.setAttribute("style", "margin-top: -88px");

        // build item-title
        var item_title_element = document.createElement("h1");
        item_title_element.setAttribute("class", "item-title");
        item_title_element.setAttribute("style", "color: #999; font-size: 24px");

        // build text
        var title_text = document.createTextNode(original_movie_title);
        item_title_element.appendChild(title_text);

        details_title_container_element.appendChild(item_title_element);

        return details_title_container_element;
    }
}