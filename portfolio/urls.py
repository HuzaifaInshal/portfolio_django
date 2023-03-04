
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('main.urls'))
]



urlpatterns+= static(settings.CERF_URL,document_root=settings.CERF_PATH)
urlpatterns+= static(settings.IMG_URL,document_root=settings.IMG_PATH)
urlpatterns+= static(settings.CV_URL,document_root=settings.CV_PATH)