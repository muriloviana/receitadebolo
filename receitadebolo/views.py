# -*- coding: utf-8 -*-
from django.shortcuts import render


def home(request):
	return render(request, 'home.html')

def personagem(request):
	return render(request, 'personagem.html')

def fase(request, numero=None):
	return render(request, 'fase%s.html' % numero)