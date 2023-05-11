# REST API using Django REST Framework

[![Python](https://img.shields.io/badge/Python-3.9.13.-yellow)](https://www.python.org/downloads/release/python-380/)
[![Django](https://img.shields.io/badge/Django-4.2.0-green)](https://www.djangoproject.com/download/)
[![Django REST Framework](https://img.shields.io/badge/Django%20REST%20Framework-3.14.0-red)](https://www.django-rest-framework.org/)
[![React](https://img.shields.io/badge/React-18.0.2-blue)](https://reactjs.org/)
[![Docker]() ]

This is a project where a REST API server is developed using Django framework and a simple GUI using React JS.

<p align="middle">
    <img width='30%' margin='1rem' src='frontend/public/logo512.png'>
    <img width='35%' margin='1rem' src='frontend/public/django.png'>
</p>

## Table of Contents

- [Project Overview](#projectoverview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Project Overview

The Django Project is a web application that provides a RESTful API server using the Django framework. It also includes a simple graphical user interface (GUI) built with React JS. The application allows users to interact with the API server through the GUI, making it easier to consume the data.

## Features

The Django Project includes the following features:

- A REST API server built with Django framework
- A simple GUI built with React JS
- User authentication and authorization
- Secure data storage using SQLite database
- Create, Read, Update, and Delete (CRUD) operations on data

## Installation

### Backend

To install the Django Project, follow these steps:

1. Clone the repository to your local machine

```bash
git clone https://github.com/your-username/django-project.git
```

2. Navigate to the project directory:

```bash
cd django-project
```

3. Create a virtual environment and activate it:

```bash
python3 -m venv env
source env/bin/activate
```

4. Install the required packages using the requirements.txt file:

```bash
pip install -r requirements.txt
```

5. Migrate the database:

```bash
python manage.py migrate
```

6. Create a superuser:

```bash
python manage.py createsuperuser
```

7. Run the Django server:

```bash
python manage.py runserver
```

8. Open a web browser and navigate to http://localhost:8000/ to view the GUI.

### Frontend

To install the React Project, follow these steps:

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the required packages using the package.json file:

```bash
npm install
```

3. Run the React server:

```bash
npm start
```

4. Open a web browser and navigate to http://localhost:3000/ to view the GUI.

## Usage

Once the server is running, you can interact with the API server through the GUI. The GUI provides a user-friendly interface to view, create, update, and delete data. You can also use tools such as curl or Postman to interact with the API server directly.

## Contributors

[Daniele Bocchino](https://danielebocchino.github.io/)

[![GitHub Followers](https://img.shields.io/github/followers/DanieleBocchino?style=social)](https://github.com/DanieleBocchino)  
[![LinkedIn Connect](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/daniele-bocchino-aa602a20b/)

## License

The Django Project is licensed under the MIT License.

[![GitHub License](https://img.shields.io/github/license/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project/)

[![GitHub Issues](https://img.shields.io/github/issues/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project)
[![GitHub Stars](https://img.shields.io/github/stars/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project)
[![GitHub Forks](https://img.shields.io/github/forks/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project)
[![GitHub Contributors](https://img.shields.io/github/contributors/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/DanieleBocchino/django-project)](https://github.com/DanieleBocchino/django-project)
