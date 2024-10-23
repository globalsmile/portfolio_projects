from django.urls import path
from .views import home, dashboard, add_student

urlpatterns = [
    path('', index, name='index'),
    path('dashboard/', dashboard, name='dashboard'),
    path('add-student/', add_student, name='add_student'),
]
