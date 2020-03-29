#!/bin/sh
python manage.py makemigrations --no-iput
python manage.py migrate
exec "$@"