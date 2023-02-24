from django.urls import path
from . import views

app_name = 'perfume'

urlpatterns = [
    # path('perfumes/list', views.incense_list),
    path('make', views.make_perfume),
    path('choice', views.get_perfume),
    path('huminity', views.get_huminity)
]