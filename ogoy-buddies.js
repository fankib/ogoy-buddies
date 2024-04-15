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

#/* open member window first */
menus = tagsWithClass(document, 'div', 'top-menu-item');
menu_active = menus[2].parentElement.getAttribute('class').includes('hidden');
!menu_active && click(menus[2]);

buddyList=VAR_BUDDY_LIST;
buddyFilter = createBuddyFilter(buddyList);

#/* toggle buddies from hidden list */
hidden_list = document.getElementById('hidden');
pilots = tagsWithClass(hidden_list, 'div', 'pilot-name');
buddies = pilots.filter(buddyFilter);
buddies.forEach(click);

#/* close member view
confirms = tagsWithClass(document, 'div', 'confirm-button');
setTimeout(function(){    
	!menu_active && click(confirms[1]);
}, 10000); */


})()
