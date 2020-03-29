from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    class Meta:
        verbose_name = ("Category")
        verbose_name_plural = ("Categories")

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    due_date = models.DateTimeField(auto_now_add=True)
    done = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(
        Category, 
        models.SET_NULL, 
        default="general", 
        null=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title
