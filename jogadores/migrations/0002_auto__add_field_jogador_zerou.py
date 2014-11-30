# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):
        # Adding field 'Jogador.zerou'
        db.add_column('jogadores_jogador', 'zerou',
                      self.gf('django.db.models.fields.BooleanField')(default=False),
                      keep_default=False)


    def backwards(self, orm):
        # Deleting field 'Jogador.zerou'
        db.delete_column('jogadores_jogador', 'zerou')


    models = {
        'jogadores.jogador': {
            'Meta': {'object_name': 'Jogador'},
            'avatar': ('django.db.models.fields.CharField', [], {'max_length': '16'}),
            'data': ('django.db.models.fields.DateTimeField', [], {'auto_now': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'nome': ('django.db.models.fields.CharField', [], {'max_length': '16'}),
            'zerou': ('django.db.models.fields.BooleanField', [], {'default': 'False'})
        }
    }

    complete_apps = ['jogadores']