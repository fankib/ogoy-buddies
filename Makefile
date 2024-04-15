
SHELL := /bin/bash

readme: clear_readme

	# REGISTER Buddy Lists
	source compose.sh buddies_1.js > buddies_1.o
	source compose.sh buddies_2.js > buddies_2.o

	echo "# Ogoy Buddies Visibility Toggler" >> README.md
	echo "Toggles the visibility of buddies on ogoy.app" >> README.md
	
	echo "## Installation on Chrome (on Linux)" >> README.md
	echo "1. Make your browser's bookmark bar visible by pressing \`ctrl+shift+b\`" >> README.md
	echo "2. Select all the content of the gray box below (tripple click in the box) and press \`ctrl+c\`" >> README.md
	echo "3. Now right click the book mark bar and select \`Add page...\`" >> README.md
	echo "4. Paste the content of the gray box into the \`URL:\` field by clearing its content and pressing \`ctrl+v\`." >> README.md
	echo "5. Save the bookmark, open an ogoy scene and click on the bookmark to use the new function." >> README.md

	for file in *.o ; do \
		cat $$file >> README.md ; \
	done
	
	echo "## Updates" >> README.md
	echo "If ogoy.app makes some changes to their code, the bookmark might not work anymore. Wait for this page to update, remove the bookmark and install it again." >> README.md
	
	echo "## Disclaimer" >> README.md
	echo "This is a code injection which could be used against you. Only use sources you trust." >> README.md

	# clean up:
	rm *.o
	
	
clear_readme:
	rm README.md
	touch README.md
