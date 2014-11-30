from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('receitadebolo',

    url(r'^$', 'views.home', name='home'),
    url(r'^personagem/', 'views.personagem', name='personagem'),
    url(r'^iniciar/', 'views.iniciar', name='iniciar'),
    url(r'^fase/(?P<numero>[0-9]+)/', 'views.fase', name='fase'),
    url(r'^final/', 'views.final', name='final'),

    # Admin
    url(r'^admin/', include(admin.site.urls)),

) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
