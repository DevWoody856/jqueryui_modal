from django.db import models


class Number(models.Model):
    username = models.CharField(max_length=10, blank=False, null=True)
    number = models.PositiveIntegerField(blank=False, null=True)

    def __str__(self):
        return self.username
