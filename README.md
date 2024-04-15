# Ogoy Buddies Visibility Toggler
Toggles the visibility of buddies on ogoy.app
## Installation on Chrome (on Linux)
1. Make your browser's bookmark bar visible by pressing `ctrl+shift+b`
2. Select all the content of the gray box below (tripple click in the box) and press `ctrl+c`
3. Now right click the book mark bar and select `Add page...`
4. Paste the content of the gray box into the `URL:` field by clearing its content and pressing `ctrl+v`.
5. Save the bookmark, open an ogoy scene and click on the bookmark to use the new function.
buddies_1.js:
```
javascript:  /* Toggles visibility of all tracks on Ogoy.app. */ ( function(){ function tagsWithClass(root, tag, cls){ tags = Array.from(root.getElementsByTagName(tag)); return tags.filter(createClassFilter(cls)); } function createClassFilter(cls){ return function(tag){ attributeClass = tag.getAttribute('class'); return attributeClass && attributeClass.indexOf(cls) != -1; } } function createBuddyFilter(buddyList){ return function(tag){ return buddyList.includes(tag.innerHTML); } } function click(element){ element.click() } buddyList=['Morgenthaler Stephan', 'Stephan Morgenthaler', 'Breitinger Dominik', 'Dietrich Olivier', 'Wicki Markus S.', 'Thiébaud Fabrice', 'Dunkel Christoph', 'Aeschbacher Roger']; buddyFilter = createBuddyFilter(buddyList);  /* toggle buddies from hidden list */ hidden_list = document.getElementById('hidden'); pilots = tagsWithClass(hidden_list, 'div', 'pilot-name'); buddies = pilots.filter(buddyFilter); buddies.forEach(click); })()
```
buddies_2.js:
```
javascript:  /* Toggles visibility of all tracks on Ogoy.app. */ ( function(){ function tagsWithClass(root, tag, cls){ tags = Array.from(root.getElementsByTagName(tag)); return tags.filter(createClassFilter(cls)); } function createClassFilter(cls){ return function(tag){ attributeClass = tag.getAttribute('class'); return attributeClass && attributeClass.indexOf(cls) != -1; } } function createBuddyFilter(buddyList){ return function(tag){ return buddyList.includes(tag.innerHTML); } } function click(element){ element.click() } buddyList=['Morgenthaler Stephan', 'Stephan Morgenthaler', 'Breitinger Dominik', 'Dietrich Olivier', 'Wicki Markus S.', 'Thiébaud Fabrice', 'Dunkel Christoph', 'Aeschbacher Roger']; buddyFilter = createBuddyFilter(buddyList);  /* toggle buddies from hidden list */ hidden_list = document.getElementById('hidden'); pilots = tagsWithClass(hidden_list, 'div', 'pilot-name'); buddies = pilots.filter(buddyFilter); buddies.forEach(click); })()
```
## Updates
If ogoy.app makes some changes to their code, the bookmark might not work anymore. Wait for this page to update, remove the bookmark and install it again.
## Disclaimer
This is a code injection which could be used against you. Only use sources you trust.
