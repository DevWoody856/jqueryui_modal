from django.contrib import admin
from .models import Number


class ModalAdmin(admin.ModelAdmin):
    list_display = ('username', 'number')


admin.site.register(Number, ModalAdmin)