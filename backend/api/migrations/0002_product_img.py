# Generated by Django 4.2 on 2023-04-17 09:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="img",
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
