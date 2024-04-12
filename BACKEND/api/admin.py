from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Creator)
admin.site.register(models.PodcastCategory)
admin.site.register(models.Podcast)

