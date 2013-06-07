function getHTTPObject() {

    var xhr;

    if (window.XMLHttpRequest) {
        
        xhr = new XMLHttpRequest();
    
    } else if (window.ActiveXObject) {     
       
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    
    }
    
    return xhr;
}

function ajaxCall(dataUrl, outputElement, callback) {
    
    var request = getHTTPObject();
    
    //outputElement.innerHTML = "Loading";
    
    request.onreadystatechange = function() {


        if ( request.readyState === 4 && request.status === 200 ) {
            
            var contacts = JSON.parse(request.responseText);

            if(typeof callback === "function"){
                     
                callback(contacts);
            
            } 
    
        } 
    
    }
    
    request.open("GET", dataUrl, true);
    request.send(null);

}

(function(){
    
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("q");
       
    
    var addr = {
        
        search : function(event){
            
            // set the output element
            var output = document.getElementById("output"),
                mustacheTemplate = document.getElementById("mustache-template"),
                template = mustacheTemplate.innerHTML;
            
             ajaxCall('data/contacts.json', output, function (data) {
            

                var searchValue = searchField.value,
                    addrBook = data.addressBook,
                    count = addrBook.length,
                    i;
                
                event.preventDefault();
                
                output.innerHTML = "";
                
                if(count > 0 && searchValue !== ""){
                
                    
                    for(i = 0; i < count; i = i + 1) {
    
                        var obj = addrBook[i],
                            isItFound = obj.name.indexOf(searchValue);
    
                        
                        if(isItFound !== -1) {

                            var renderedContent = Mustache.to_html(template, obj);

                            output.innerHTML += renderedContent;
                            
                        }
    
                    }
    
                }
            
            });

        }
    } 

    searchField.addEventListener("keyup", addr.search, false);
})(); 
