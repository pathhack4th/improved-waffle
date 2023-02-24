from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Incense
from .serializers.incense import IncenseListSerializer
from rest_framework import serializers
import requests
from datetime import datetime

@api_view(['POST'])
def make_perfume(request):
    m1 = request.data.get('m1')
    m2 = request.data.get('m2')
    m3 = request.data.get('m3')
    m4 = request.data.get('m4')
    m5 = request.data.get('m5')
    result = [m1, m2, m3, m4, m5]
    # print(get_weather())
    return Response(result)

def get_weather():
    serviceKey = 'j3o1HFXwsYUITKTWdi21rAmAR+V4/YNXF23UdfXH1QcEgvEGlO551SX6OwXD2Iu9nr3uerwlRmQ13EUkC3o6tw=='
    url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'

    today = datetime.today().strftime("%Y%m%d")
    time = datetime.now().strftime("%H")
    params ={'ServiceKey' : serviceKey, 'pageNo' : '1',
     'numOfRows' : '1000', 'dataType' : 'JSON', 'base_date' : today,
      'base_time' : time+"00", 'nx' : '55', 'ny' : '127' }

    response = requests.get(url, params=params)
    body = response.json().get('response').get('body').get('items').get('item')
    for b in body:
        if b.get('category')=='REH':
            curr = b.get('obsrValue')
    return curr

def check_humidity(value):
    print(value)