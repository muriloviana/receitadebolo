# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding model 'Jogador'
        db.create_table('jogadores_jogador', (
            ('id', self.gf('django.db.models.fields.AutoField')(primary_key=True)),
            ('data', self.gf('django.db.models.fields.DateTimeField')(auto_now=True, blank=True)),
            ('nome', self.gf('django.db.models.fields.CharField')(max_length=16)),
            ('avatar', self.gf('django.db.models.fields.CharField')(max_length=16)),
        ))
        db.send_create_signal('jogadores', ['Jogador'])


    def backwards(self, orm):
        # Deleting model 'Jogador'
        db.delete_table('jogadores_jogador')


    models = {
        'jogadores.jogador': {
            'Meta': {'object_name': 'Jogador'},
            'avatar': ('django.db.models.fields.CharField', [], {'max_length': '16'}),
            'data': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'nome': ('django.db.models.fields.CharField', [], {'max_length': '16'})
        }
    }

    complete_apps = ['jogadores']