(function(){

	var contacts = {
		"addressBook" : [ {"name": "abishak", "email": "abishak@happy.com",},
		                  {"name": "susan", "email": "susan@happy.com",},
		                  {"name": "james", "email": "james@happy.com",},
		                  {"name": "jason", "email": "jason@happy.com",},
		                  {"name": "jeff", "email": "jeff@happy.com",},
		                  {"name": "jenna", "email": "jenna@happy.com",},
		                  {"name": "zack", "email": "zack@happy.com",},
		                  {"name": "samuel", "email": "samuel@happy.com",},
		                  {"name": "sam", "email": "sam@happy.com",},
		                  ]
	}

	var searchForm = document.getElementById("search-form");
		searchField = document.getElementById("q");
		
		count = contacts.addressBook.length;
		target = document.getElementById("output");
		

	var addr = {
		search : function(event) {
			var searchValue = searchField.value,
			    i;
			event.preventDefault();
			target.innerHTML = "";

			if (count > 0 && searchValue != ""){
				for(i=0; i < count; i = i + 1 ) {
					var obj = contacts.addressBook[i],
					    isItFound = obj.name.indexOf(searchValue);

					    if (isItFound != -1){
					    	target.innerHTML += '<p>' + '<a href="mailto:' + 
					    	obj.email + '">' + obj.name + '</a><p>';
					    }
				}
			}


		}
	}

	searchField.addEventListener("keyup", addr.search, false);
})();