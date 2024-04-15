#!/bin/bash

BUDDIES="$(<$1)"
TEMPLATE=$(<"ogoy-buddies.js")
echo "$1:"
echo "\`\`\`"
# #-hack to make comments in js ..
echo ${TEMPLATE//VAR_BUDDY_LIST/$BUDDIES} | tr "#" " " # | tr "\#/*" "\/*"
echo "\`\`\`"