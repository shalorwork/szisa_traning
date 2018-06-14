from django import forms

class BookForm(forms.Form):
    bISBN = forms.CharField(label="ISBN",max_length=32,required = True)
    bTitle = forms.CharField(label="书名",max_length=128,required=True)
    bAuthor = forms.CharField(label="作者",max_length=128,required=False)
    bPrice = forms.FloatField(label="价格",required=False)