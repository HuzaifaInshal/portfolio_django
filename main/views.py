
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

from .models import PrimarySkills,SecondarySkills,Certification,Work,Projects,Offer,CV,Tags,Email

# Create your views here.


def Main(request):
    primary = PrimarySkills.objects.all()
    secondary = SecondarySkills.objects.all()
    cert = Certification.objects.all()
    work = Work.objects.all()
    projects = Projects.objects.all()
    offer = Offer.objects.all()
    cv = CV.objects.all()

    if request.method == 'POST':

        subject = request.POST['subject']
        email = request.POST['email']
        message = request.POST['message']
        Email.objects.create(sender=email,subject=subject,message=message)
        return render(request,'test.html',{'name':email})

        # subject = request.POST['subject']
        # email = request.POST['email']
        # message = request.POST['message']
        # both = ('email sent from',email,'with subject',subject)
        # send_mail(both,message,
        # 'settings.EMAIL_HOST_USER', #sender cant specify other persons email here
        # ['huzaifainshal@gmail.com'], #reciever can specify other persons email here
        # fail_silently=False)
        # #return HttpResponse('Email delivered with success, he`ll get back to you soon!!', content_type='text/plain')
        # return render(request,'test.html',{})

    context={'primary':primary,'secondary':secondary,'cert':cert,'work':work,'projects':projects,'offer':offer,'cv':cv}
    return render(request,'first.html',context)


def Portfolio(request):
    tags = Tags.objects.all()

    if request.GET.get('q')==None:
        # projects = Projects.objects.all()
        projects = Projects.objects.order_by('-priority')
    else:
        q=request.GET.get('q')
        projects = Projects.objects.filter(
            tags=q
        )

    context = {'projects':projects,'tags':tags}
    return render(request,'portfolio.html',context)

def Final(request,pk):
    final = Projects.objects.get(id=pk)
    context={'final':final}
    return render(request,'third.html',context)

