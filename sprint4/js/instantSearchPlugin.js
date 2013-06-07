(function($) {

    $.fn.instantSearch =  function(options){
            var defaults = { jsonurl:'', outputElement: ''};
            var options = $.extend(defaults, options);

            return this.each(function(){
                // start Ajax call
                
                    $.getJSON(options.jsonurl, function (data) {
                        
                        var addrBook = data.addressBook,
                            count = addrBook.length;
                            searchValue = $('input').val();
                       
                        
                        $(options.outputElement).empty();

                               

                        if (count > 0 && searchValue != "") {
                             
                            
                            $.each(addrBook, function (i, obj) {

                               
                                if (obj.name.indexOf(searchValue) != -1){
                                        
                                     
                                    $(options.outputElement).append('<p> <a href="mailto:' + obj.email + '">'+ obj.name +'</a><p>').hide().fadeIn();
                                }
                            
                            }); // end each
                        
                        } // end count check

                  
                    });

            });// end loop
        };
    })(jQuery);


            
