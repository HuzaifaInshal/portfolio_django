from django.urls import path
from . import views


urlpatterns=[
    path('',views.Main,name="main"),
    path('projects/',views.Portfolio,name='projects'),
    path('project/<str:pk>/',views.Final,name='final'),
    path('api/all-data/', views.AllDataAPIView.as_view(), name='all-data'),
]
