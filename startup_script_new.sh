#!/bin/bash
#Log file location
LOG_FILE="/setup_project.log"

# Function to log messages
log() {
  echo "$(date +"%Y-%m-%d %T") : $1" >> "$LOG_FILE"
}

username="erenyasar"
folder_name="/home/$username/CS436-Cloud-Project"

if [ ! -d "$folder_name" ]; then
  log "Project folder '$folder_name' not found. Setting up..."
  export NVM_DIR="/home/$username/.nvm"
  if ! curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash; then
    log "Failed to download or run nvm installation script."
    exit 1
  fi

  # Load nvm if the script exists
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    . "$NVM_DIR/nvm.sh"
  fi

  # Load nvm bash_completion if the script exists
  if [ -s "$NVM_DIR/bash_completion" ]; then
    . "$NVM_DIR/bash_completion"
  fi

  if ! nvm install v20.13.1; then
    log "Failed to install LTS Node.js version with nvm."
    exit 1
  fi

  nvm use v20.13.1

  if ! git clone https://github.com/AtaErnam/CS436-Cloud-Project /home/$username/CS436-Cloud-Project; then
    log "Failed to clone project repository."
    exit 1
  fi

  # Update package lists
  sudo apt update -y && sudo apt upgrade -y

  # Install client-side dependencies
  if ! npm --prefix /home/$username/CS436-Cloud-Project/server install; then
    log "Failed to install client-side dependencies."
    exit 1
  fi

  # Fix vulnerabilities (consider manual review before using --force)
  npm --prefix /home/erenyasar/CS436-Cloud-Project/server/ audit fix --force
  log "Project setup complete."

  #Update Path variables
  export PATH=$PATH:$NVM_DIR/versions/node/v20.13.1/bin

  if [ $(id -u) -eq 0 ]; then
    sudo touch /etc/profile.d/nodejs.sh
    sudo chmod +x /etc/profile.d/nodejs.sh
    sudo echo -e "export PATH=\$PATH:$NVM_DIR/versions/node/v20.13.1/bin\nif [ -s \"$NVM_DIR/nvm.sh\" ]; then\n  . \"$NVM_DIR/nvm.sh\"\nfi\nif [ -s \"$NVM_DIR/bash_completion\" ]; then\n  . \"$NVM_DIR/bash_completion\"\nfi" >> /etc/profile.d/nodejs.sh
    log "Updated PATH for login shell in /etc/profile.d/nodejs.sh."
  else
    log "Script is not running as root. Cannot update PATH for all users."
    echo "Please run the script as root to update PATH for all users."
    exit 1
  fi
  #Dependency Installation Complete
fi
#Host node app
echo -e "Dependency Installation Complete...Setting up app..."
sudo chmod +x /home/$username/CS436-Cloud-Project/server/server.sh
sudo touch /etc/systemd/system/serverhost.service
sudo echo -e "[Unit]\nDescription=Server Host\n\n[Service]\nType=simple\nUser=root\nWorkingDirectory=/home/$username/CS436-Cloud-Project/server\nExecStart=/home/$username/CS436-Cloud-Project/server/server.sh $username\n[Install]\nWantedBy=multi-user.target\n" > /etc/systemd/system/serverhost.service
sudo systemctl daemon-reload
sudo systemctl enable serverhost
sudo systemctl start serverhost