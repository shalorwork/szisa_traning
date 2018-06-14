from django.shortcuts import render
from bookitems import forms,models

def updbook(request):
    if request.method=="GET":
        ISBN=request.GET.get("ISBN","")
        if ISBN!="":
            book=models.BookModel.objects.get(bISBN=ISBN)

def show(request):
    books=models.BookModel.objects.all()
    return render(request,"bookList.html",locals())

def addbook(request):
    if request.method=="GET":
        form=forms.BookForm()

    else:
        form=forms.BookForm(request.POST)
        ISBN=request.POST.get("bISBN","")
        Title=request.POST.get("bTitle","")
        Author=request.POST.get("bAuthor","")
        Price=request.POST.get("bPrice","0")
        Price=float(Price)

        book=models.BookModel(bISBN=ISBN,bTitle=Title,bAuthor=Author,bPrice=Price)
        book.save()

    return request(request,"bookManager.html",{"form":form})