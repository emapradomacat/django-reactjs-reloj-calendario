from django.http import JsonResponse
from datetime import datetime, timedelta

def index(request):
    
    # Obtiene la hora actual
    current_time = datetime.now() - timedelta(hours=3)
    current_time = current_time.strftime("%-I:%M:%S %p")

    # Obtiene la fecha actual
    current_date = datetime.now().strftime("%d/%m/%Y")

    data = {
        'time': current_time,
        'date': current_date,
    }

    return JsonResponse(data)

