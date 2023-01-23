import json
from django.shortcuts import render
from django.shortcuts import render
from django.http import FileResponse, HttpResponse

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def download(request):
    if request.method == 'POST':
        variable = json.loads(request.body).get('variable')
        print(variable)
        if variable:
            response = FileResponse(variable, content_type='text/plain')
            response['Content-Disposition'] = 'attachment; filename="file.txt"'
            return response
        else:
            return HttpResponse("No variable passed",status=204)
    else:
        return HttpResponse("Invalid request method", status=405)
