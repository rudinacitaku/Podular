# Generated by Django 5.0.3 on 2024-05-22 11:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_merge_20240522_1336'),
    ]

    operations = [
        migrations.AddField(
            model_name='podcast',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='category_podcast', to='api.podcastcategory'),
        ),
        migrations.AddField(
            model_name='podcast',
            name='creator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.creator'),
        ),
        migrations.AlterField(
            model_name='podcastimage',
            name='podcast',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='podcast_img', to='api.podcast'),
        ),
        migrations.AlterField(
            model_name='podcastrating',
            name='podcast',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='podcast_ratings', to='api.podcast'),
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('subscription_time', models.DateTimeField(auto_now_add=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.customer')),
            ],
        ),
        migrations.CreateModel(
            name='SubscriptionPodcasts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('podcast', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.podcast')),
                ('subscription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subscription_podcasts', to='api.customer')),
            ],
        ),
    ]