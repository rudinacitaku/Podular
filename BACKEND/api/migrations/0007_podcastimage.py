# Generated by Django 5.0.4 on 2024-04-17 15:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_customeraddress_default_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='PodcastImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='podcast_imgs/')),
                ('podcast', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='podcast_imgs', to='api.customer')),
            ],
        ),
    ]