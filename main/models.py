
from django.db import models
from django.forms import FileField

# Create your models here.
class PrimarySkills(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class SecondarySkills(models.Model):
    primaryskillsname = models.ForeignKey(PrimarySkills, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    percentage = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Certification(models.Model):
    name = models.CharField(max_length=200)
    fromvia = models.TextField()
    description = models.TextField()
    certficate_path = models.FileField(upload_to='files/certificates',blank=True)
    link = models.URLField()

    def __str__(self):
        return self.name

class Work(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    duration = models.TextField()

    def __str__(self):
        return self.name

class Tags(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    img = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Projects(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    tools = models.TextField()
    tags = models.ManyToManyField(Tags,null=True,related_name='tags')
    image_path = models.ImageField(upload_to='files/images')
    report_path = models.FileField(upload_to='files/report',blank=True)
    priority = models.IntegerField(default=0)
    live_link = models.URLField(null=True,blank=True)
    git_link = models.URLField(null=True,blank=True)
    target = models.TextField(null=True,blank=True,default='web')

    def __str__(self):
        return self.name

class Offer(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.name

class CV(models.Model):
    path = models.FileField(upload_to='files/cv')



class Email(models.Model):
    sender = models.TextField(editable=False)
    subject = models.TextField(editable=False)
    message = models.TextField(editable=False)
    datetimee = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.sender