from django.urls import path, include
from comments import views

urlpatterns=[
    path('comments/', views.user_comments)
]