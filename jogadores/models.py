# -*- coding: utf-8 -*-
from django.db import models

AVATAR = (
	('menino','menino'),
	('menina','menina'),
)


class Jogador(models.Model):
	data = models.DateTimeField(auto_now=True)
	nome = models.CharField(max_length=16)
	avatar = models.CharField(max_length=16, choices=AVATAR)

	def codigo(self):
		return '%08d' % self.id

	def __unicode__(self):
		return u'%s (%s)' % (self.nome, self.id) 

	class Meta:
		verbose_name_plural = 'Jogadores'