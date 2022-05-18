# simple modal window form with Django and JqueryUI

A simple application that combines Django and jQueryUI's modal(dialog)component.  
This is a repo of <a href="https://rx-36.life/post/how-to-create-a-simple-modal-window-form-with-django-and-jqueryui-and-communicate-via-ajax/" target="_blank"><span class="link">this blog post</span></a>.

## How to download this repo locally and running the application.  

This description assumes the use of docker and windows11.  
And I use pycharm for my IDE.


1. Enter following command from the command line.
```
git clone https://github.com/DevWoody856/jqueryui_modal.git
```

2. Enter following command in command line.
   (Go to projecto root)

```python
cd jqueryui_modal/
```
3. Please switch the branch.

```python
git checkout change_design
```


4. Create an `.env` file in the root of the project.

5. In the .env file you created, write the following.

```python
DEBUG_VALUE=TRUE

DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=db_modal_220321
DB_PORT=5432

POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
```

As a reminder, DB_HOST is the service name of the database in docker-compose.yaml.  
In this docker configuration, it is `db_modal_220321`.  
Also, this time the secret key is written directly in `settings.py`.

6. From the project root, enter the following command.

```python
docker-compose up --build
```

7. If you success `docker-compose up -build`, you can see the message  
"starting development server at http://0.0.0.0:8002/".   
Once it is up and running, please **open another terminal** while docker running, enter the following command.
This is the command that enters the dokcer side and launches the command line.

```python
docker-compose exec backend sh
```

8. When you are ready to enter a command, type the following command.
```python
python manage.py makemigrations
```

9. Then, after that
```python
python manage.py migrate
```

10. Let's also create a superuser.
```python
python manage.py createsuperuser
```

11. Database set is finished.
Enter the following command and the application should start.
```python
python manage.py runserver
```

12. If  you get the following message, it is working.
```python
Starting development server at http://127.0.0.1:8000/
```
### Please note that the actual application is accessed at `http://127.0.0.1:8002/`. 