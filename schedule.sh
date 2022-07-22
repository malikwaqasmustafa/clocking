
[program:schedule]
command = /bin/bash -c "/var/www/html/schedule.sh"
stdout_logfile = /dev/fd/1
stdout_logfile_maxbytes=0
stderr_logfile = /dev/fd/2
stderr_logfile_maxbytes=0
user = root
autostart = true
autorestart = true
priority = 20

while [ true ]
do
 php /var/www/html/artisan schedule:run --verbose --no-interaction &
 sleep 60
done
