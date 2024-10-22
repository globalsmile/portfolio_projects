#!/bin/bash
ssh root@<your-droplet-ip> << 'EOF'
  cd /path/to/your/app
  git pull origin main
  npm install
  pm2 restart all
EOF
