from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = patterns('receitadebolo',

    url(r'^$', 'views.home', name='home'),
    url(r'^personagem/$', 'views.personagem', name='personagem'),
    url(r'^fase/(?P<numero>[0-9])+/', 'views.fase', name='fase'),

) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
