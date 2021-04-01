from django.db import models

# Create your models here.


class InterestionIdeas(models.Model):
    author_name = models.CharField(default="", max_length=255)
    idea_title = models.CharField(default="", max_length=255)
    idea_description = models.TextField(default="")
    idea_picture = models.ImageField(upload_to="idea_pic", default="")
