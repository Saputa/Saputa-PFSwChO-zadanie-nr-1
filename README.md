Projekt powstaly poprzez przeprowadzenie modyfikacji aplikacji z lab9

Stworzono strone glowna (Main.js), strony historii (History.js) i dokumentacji (Documentation.js).

Wprowadzono limit indeksu k nie wiekszy niz 20

Dodano mozliwosc przegladania historii, wyświetlana jest historia 10 ostatnich 	          obliczeń. W pliku Fib.js dodano metode fetchIntoSessionStorage() pozwalajaca na
zapis danych w danej sesji. Zas odczyt tych danych w History.js jest realizowanie             przez metode getValues().
       
Uruchomienie :
docker-compose -f docker-compose.dev.yml up --build

Port: 80

![image](https://user-images.githubusercontent.com/82586310/149635175-7e775ccf-f4fa-4d41-8b30-69ca5e8c02f5.png)
