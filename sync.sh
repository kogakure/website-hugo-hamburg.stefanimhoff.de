#!/bin/sh
rsync --archive \
      --verbose \
      --recursive \
      --checksum \
      --delete \
      --exclude '.DS_Store' \
      ./build/production/ \
      kogakure@stefanimhoff.de:webapps/hamburg/
