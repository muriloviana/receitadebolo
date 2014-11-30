# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from jogadores.models import Jogador


def home(request):
	return render(request, 'home.html')

def personagem(request):
	return render(request, 'personagem.html')

def iniciar(request):

	if request.method == 'GET':

		novo = Jogador(
			nome = request.GET.get('player'),
			avatar = request.GET.get('avatar'),
		)
		novo.save()
		request.session['jogador'] = novo

		return redirect('/fase/1/')
	else:
		return redirect('personagem')

def fase(request, numero=None):

	if request.session.get('jogador').avatar == 'menina':
		ajudante = 'Amanda'
	else:
		ajudante = 'Mateus'

	VARS = {
		'jogador': request.session.get('jogador'),
		'ajudante': ajudante,
	}

	return render(request, 'fase%s.html' % numero, VARS)

def final(request):

	jogador = Jogador.objects.get(id=request.session.get('jogador').id)
	jogador.zerou = True
	jogador.save()

	return render(request, 'final.html')