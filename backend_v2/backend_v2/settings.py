"""
Django settings for backend_v2 project.

Generated by 'django-admin startproject' using Django 5.0.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

import os
from pathlib import Path
from decouple import config
from .literals import (API_VERSION, ENVIROMENT)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
API_VERSION = config('API_VERSION', default=API_VERSION)
ENVIROMENT = config('ENVIROMENT', default=ENVIROMENT)

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config('DEBUG', default=True, cast=bool)

ALLOWED_HOSTS = ['*']
# CORS_ALLOWED_ORIGINS = [
# "http://*",
# "https://*",
# ]

CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True

# AUTHENTICATION_BACKENDS = [
#     "utils.authentication.backends.JWTAuthenticationByAuthServer",
# ]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    "rest_framework_simplejwt",
    'cloudinary_storage',
    "drf_yasg",
]

PROJECT_APPS = [
    "apps.cohort",
    "apps.event",
    "apps.utils",
    "apps.dapp",
    "apps.operation",
    "apps.payment"
]

INSTALLED_APPS += PROJECT_APPS

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'utils.middlewares.ErrorMiddleware',
]

ROOT_URLCONF = 'backend_v2.urls'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        "DIRS": [
            BASE_DIR / 'templates'  # Here
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend_v2.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    },
    "production": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": config("DB_NAME"),
        "USER": config("DB_USER"),
        "PASSWORD": config("DB_PASSWORD"),
        "HOST": config("DB_HOST"),
        "PORT": config("DB_PORT", default="5432"),
    }
}

# Determine the database configuration based on enviroment
if ENVIROMENT == 'production':
    DATABASES['default'] = DATABASES['production']

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

AUTH_SERVER_URL = 'https://web3bridgeauth-y4kb.onrender.com'

# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

DATE_INPUT_FORMATS = ('%y-%m-%d', '%y/%m/%d')

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = '/staticfiles/'
STATIC_ROOT = BASE_DIR / 'staticfiles'


# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# _______________________DRF_________________________
DEFAULT_RENDERER_CLASSES = (
    'rest_framework.renderers.JSONRenderer',
)

if DEBUG:
    DEFAULT_RENDERER_CLASSES = DEFAULT_RENDERER_CLASSES + (
        'rest_framework.renderers.BrowsableAPIRenderer',
    )

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',),
    'DEFAULT_RENDERER_CLASSES': DEFAULT_RENDERER_CLASSES,
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 13,
    'DEFAULT_FILTER_BACKENDS': ('rest_framework.filters.SearchFilter',
                                'rest_framework.filters.OrderingFilter'),
    'SEARCH_PARAM': 'q',
    'ORDERING_PARAM': 'ordering',

}

# ______________________cloudinary______________________
CLOUDINARY_STORAGE = {
    'CLOUD_NAME': config('cloudinary_cloud_name'),
    'API_KEY': config('cloudinary_api_key'),
    'API_SECRET': config('cloudinary_api_secret')
}

DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'

# _______________________Swagger_________________________
SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Bearer": {"type": "apiKey", "name": "Authorization", "in": "header"}
    }
}


"""""email settings"""

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = config('EMAIL_HOST')
EMAIL_PORT = config('EMAIL_PORT', cast=int)
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = config('EMAIL_USE_TLS', default=True, cast=bool)
DEFAULT_FROM_EMAIL = config('DEFAULT_FROM_EMAIL')
