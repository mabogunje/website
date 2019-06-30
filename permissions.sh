#!/bin/sh

chown -R damola:_www .
find . -type f -print0 | xargs -0 chmod 666
find ./bin -type f -print0 | xargs -0 chmod 776
find . -type d | xargs chmod 775
find . -type d | xargs chmod +s

