from rest_framework import serializers
from .models import PrimarySkills, SecondarySkills, Certification, Work, Tags, Projects, Offer, CV, Email

class PrimarySkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PrimarySkills
        fields = '__all__'

class SecondarySkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondarySkills
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tags
        fields = '__all__'

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'

class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = '__all__'

class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CV
        fields = '__all__'

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'


