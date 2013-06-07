$("#q").keyup(function () {

    // start Ajax call
    $.getJSON('data/contacts.json', function (data) {
        
        var addrBook = data.addressBook,
            count = addrBook.length;
            searchValue = $('input').val();
        
        
        $('#output').empty();
 console.log("a"+searchValue+"a"); 
               

        if (count > 0 && searchValue != "") {
            
            
            $.each(addrBook, function (i, obj) {
               
                if (obj.name.indexOf(searchValue) != -1){
                        
                   
                    $('#output').append('<p> <a href="mailto:' + 
                        obj.email + '">'+ obj.name +'</a><p>').hide().fadeIn();
                }
            
            }); // end each
        
        } // end count check



    
    }).error(function () {
    
        
        alert('there was an ajax error');
    
    }).complete(function () {
    
       
      
        
    }).success(function(){
    
      
    
    }); // end ajax call

}); 