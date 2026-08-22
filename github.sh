#! /usr/bin/bash
#
cd /var/www/app
git pull origin main --ff-only
# we must specify the location for crontab
#
