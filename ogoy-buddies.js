javascript:

#/*
  Toggles visibility of all tracks on Ogoy.app. 
 */
 
(
function(){

function tagsWithClass(root, tag, cls){
	tags = Array.from(root.getElementsByTagName(tag));
	return tags.filter(createClassFilter(cls));
}

function createClassFilter(cls){
	return function(tag){
		attributeClass = tag.getAttribute('class');
		return attributeClass && attributeClass.indexOf(cls) != -1;
	}
}

function createBuddyFilter(buddyList){
	return function(tag){
		return buddyList.includes(tag.innerHTML);
	}
}

function click(element){
	element.click()
}

buddyList=VAR_BUDDY_LIST;
buddyFilter = createBuddyFilter(buddyList);

#/* toggle buddies from hidden list */
hidden_list = document.getElementById('hidden');
pilots = tagsWithClass(hidden_list, 'div', 'pilot-name');
buddies = pilots.filter(buddyFilter);
buddies.forEach(click);

})()
