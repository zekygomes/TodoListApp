from django.contrib import admin
from todo import models

# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ("title",  "created_at", "due_date")

class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)

admin.site.register(models.Task, TaskAdmin)
admin.site.register(models.Category, CategoryAdmin)