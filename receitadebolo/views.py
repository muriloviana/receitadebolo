# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect


def home(request):
	return render(request, 'home.html')

def personagem(request):
	return render(request, 'personagem.html')

def iniciar(request):

	if request.method == 'GET':
		request.session['avatar'] = request.GET.get('avatar')
		request.session['player'] = request.GET.get('player')
		return redirect('/fase/1/')
	else:
		return redirect('personagem')

def fase(request, numero=None):

	if request.session.get('avatar') == 'menina':
		ajudante = 'Amanda'
	else:
		ajudante = 'Mateus'

	VARS = {
		'avatar': request.session.get('avatar'),
		'player': request.session.get('player'),
		'ajudante': ajudante,
	}

	return render(request, 'fase%s.html' % numero, VARS)