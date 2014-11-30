# -*- coding: utf-8 -*-
from django.contrib import admin
from jogadores.models import Jogador


class JogadorAdmin(admin.ModelAdmin):
	list_display = ['codigo','nome','avatar','data']
	ordering = ['-data']
	list_filter = ['avatar']
	search_fields = ['nome']

admin.site.register(Jogador, JogadorAdmin)