from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Incense
from .serializers.incense import IncenseListSerializer
from rest_framework import serializers

@api_view(['POST'])
def make_perfume(request):
    m1 = request.data.get('m1')
    m2 = request.data.get('m2')
    m3 = request.data.get('m3')
    m4 = request.data.get('m4')
    m5 = request.data.get('m5')
    result = [m1, m2, m3, m4, m5]
    return Response(result)