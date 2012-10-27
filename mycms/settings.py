# -*- coding: utf-8 -*-
import os
import os.path
import dj_database_url

gettext = lambda s: s

PROJECT_DIR = os.path.abspath(os.path.dirname(__file__))

HOME_CMS_PAGE_SLUG = 'test'

DEBUG = True
TEMPLATE_DEBUG = False # What does this variable do? --nagle, 9/8/12.

ADMINS = (
    # ('Your Name', 'your_email@domain.com'),
)

MANAGERS = ADMINS

LANGUAGES = [('en', 'en')]
DEFAULT_LANGUAGE = 0

# Heroku will take care of this for us later dynamicly.




# Local time zone for this installation. Choices can be found here:
# http://en.wikipedia.org/wiki/List_of_tz_zones_by_name
# although not all choices may be available on all operating systems.
# On Unix systems, a value of None will cause Django to use the same
# timezone as the operating system.
# If running in a Windows environment this must be set to the same as your
# system time zone.
USE_TZ = True
TIME_ZONE = 'America/Louisville'

# Language code for this installation. All choices can be found here:
# http://www.i18nguy.com/unicode/language-identifiers.html
LANGUAGE_CODE = 'en-us'

SITE_ID = 1

# If you set this to False, Django will make some optimizations so as not
# to load the internationalization machinery.
USE_I18N = True

# If you set this to False, Django will not format dates, numbers and
# calendars according to the current locale
USE_L10N = True

# Absolute filesystem path to the directory that will hold user-uploaded files.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = os.path.join(PROJECT_DIR, "media")

STATIC_ROOT = os.path.join(PROJECT_DIR, "static")



if os.path.exists('/Library/'): #if local on a Mac...
    DATABASES = {
        'default': {
            'NAME': 'd3odriofpvnfmr',       
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'USER': 'gbzpvhjoehknhw',
            'PASSWORD': 'RfFwBzMejeJrVijTZM1LmsMMF5',
            'HOST': 'ec2-54-243-132-44.compute-1.amazonaws.com',
            # 'HOST': 'localhost',
            'PORT': '5432',
            
            },
        }
else:
    DATABASES = {'default': dj_database_url.config(default='postgres://localhost')}



#if 'DATABASE_URL' in os.environ:
#    DATABASES = {'default': dj_database_url.config()}



# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"
MEDIA_URL = "/media/"

STATIC_URL = "/static/"

STATICFILES_DIRS = ('/static/',)

# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = '/static/admin/'

# Make this unique, and don't share it with anybody.
SECRET_KEY = '0r6%7gip5tmez*vygfv+u14h@4lbt^8e2^26o#5_f_#b7%cm)u'

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'cms.middleware.page.CurrentPageMiddleware',
    'cms.middleware.user.CurrentUserMiddleware',
    'cms.middleware.toolbar.ToolbarMiddleware',
)

TEMPLATE_CONTEXT_PROCESSORS = (
    'django.core.context_processors.auth',
    'django.core.context_processors.i18n',
    'django.core.context_processors.request',
    'django.core.context_processors.media',
    'django.core.context_processors.static',
    'cms.context_processors.media',
    'sekizai.context_processors.sekizai',
)

CMS_TEMPLATES = (
    ('template_1.html', 'Template 1'),
    ('template_2.html', 'Template 2'),
    ('blank_reading.html', 'Reading Template'),
    ('homePage.html', 'Home Page Template'),
)

ROOT_URLCONF = 'mycms.urls'

TEMPLATE_DIRS = (
    os.path.join(PROJECT_DIR, "templates"),
)

SOUTH_DATABASE_ADAPTERS = {
    'default': "south.db.sqlite3"
}

INSTALLED_APPS = (
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.messages',
    'django.contrib.admin',
    'django.contrib.staticfiles',
    'cms',
    'menus',
    'mptt',
#   'south',
    'cms.plugins.text',
    'cms.plugins.picture',
    'cms.plugins.link',
    'cms.plugins.file',
    'cms.plugins.snippet',
    'cms.plugins.googlemap',
    'sekizai',
    'gunicorn',
    'mycms.outline',
#    'mycms.snippet'
)
