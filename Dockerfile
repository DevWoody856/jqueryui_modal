FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /modal_220321
COPY requirements.txt /modal_220321/requirements.txt

RUN pip install -r requirements.txt

COPY . /modal_220321

CMD python manage.py runserver 0.0.0.0:8002