# Generated by Django 4.2 on 2024-02-12 10:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0024_coupon'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartorder',
            name='coupons',
            field=models.ManyToManyField(blank=True, to='core.coupon'),
        ),
    ]
