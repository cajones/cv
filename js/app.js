var App = function($) {
    
    var DocumentView = {

        render: function(){

            $('.trigger').click(function() {
            
                $(this).next().animate({'height': 'toggle', 'opacity': 'toggle'}, 460);
            });
        }
    };

    var ProjectView = {

        render: function() {

        }        
    };

    return {

        start: function() {

            DocumentView.render();
            ProjectView.render();
        }
    };
};
