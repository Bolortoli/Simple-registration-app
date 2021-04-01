
from rest_framework import serializers
from .models import *


class IdeaSerializer(serializers.ModelSerializer):

    class Meta:
        model = InterestionIdeas
        fields = ('__all__')
