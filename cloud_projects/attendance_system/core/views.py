from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import Student, AttendanceRecord

def home(request):
    return render(request, 'core/home.html')

@login_required
def dashboard(request):
    students = Student.objects.all()
    records = AttendanceRecord.objects.all()
    return render(request, 'core/dashboard.html', {'students': students, 'records': records})

@login_required
def add_student(request):
    if request.method == 'POST':
        user = User.objects.create_user(
            username=request.POST['username'],
            password=request.POST['password'],
            email=request.POST['email']
        )
        Student.objects.create(
            user=user,
            student_id=request.POST['student_id'],
            full_name=request.POST['full_name'],
            email=request.POST['email']
        )
        return redirect('dashboard')
    return render(request, 'core/add_student.html')
