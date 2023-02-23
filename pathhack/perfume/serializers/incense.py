from ..models import Incense
from rest_framework import serializers

class IncenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incense
        fields = '__all__'

class IncenseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incense
        fields = '__all__'