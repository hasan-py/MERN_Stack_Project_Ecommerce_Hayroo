#!/bin/bash
if [ -z "$1" ]; then
  echo "No argument provided. Usage: ./start.sh <directory_name>"
  exit 1
fi
# Initialize nvm and load node
export NVM_DIR="/home/$1/.nvm"
export PATH=$PATH:$NVM_DIR/versions/node/v20.13.1/bin

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Run the npm script
npm run start:dev