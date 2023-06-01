from django.contrib import admin
from .models import PrimarySkills,SecondarySkills,Certification,Work,Projects,Offer,CV,Tags,Email
# Register your models here.
admin.site.register(PrimarySkills)
admin.site.register(SecondarySkills)
admin.site.register(Certification)
admin.site.register(Work)
admin.site.register(Projects)
admin.site.register(Offer)
admin.site.register(CV)
admin.site.register(Tags)

class RatingAdmin(admin.ModelAdmin):
    readonly_fields = ('sender','subject','message','datetimee',)

admin.site.register(Email,RatingAdmin)