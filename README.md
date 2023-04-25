# **Vue Tutorial**
A short list of principal Vue functionality

## **1. ref() and reactive()** 
Zarówno ref() jak i reactive() zwracają obiekty. Te obiekty pozostają stałe, zmieniamy jedynie wartości ich pól.

Ponieważ ref() wewnętrznie używa reactive() to właściwie można do obiektów również stosować ref(). Powoduje to dodatkowy narzut, ale może być zaletą, gdy chcemy łatwo podmienić obiekt - wystarczy podstawić nowy pod value. Najczęściej jest to przydatne w wypadku tablic, gdy zachodzi potrzeba podmiany całej tablicy.
## **2. Directives** 
* **v-text i v-html:** v-text = {{ text }} to samo v-html ale dodatkowo działają tagi html
* **v-bind:** wiąże atrybuty HTML z javascriptem możemy np zmieniać klasę
* **v-on:click lub @click**: obsługa event listenerów
* **v-model:** połączenie v-bind i v-on
* **v-if i v-show:** dyrektywy warunkowe v-if nie renderuje v-show ustawia display: none
* **v-for:** klasyczny for
## **3. Computed()** 
Częstą praktyką jest tworzenie reaktywnych zmiennych wyliczeniowych, bazujących na wartości innych zmiennych reaktywnych.

Zmienne wyliczeniowe tworzone przez computed() zapamiętują swoją ostatnią wartość i są przeliczane tylko wtedy, gdy zmieni się wartość zmiennych od których one zależą.
## **4. Watch()** 
Funkcja watch() pozwala na uruchomienie naszego kodu, gdy nastąpi zmiana wartości obserwowanej zmiennej reaktywnej.
## **5. Cykl życia**
Aplikacja Vue składa się z komponentów, które mają ściśle zdefiniowany cykl życia.

Sama aplikacja jest po prostu głównym komponentem i też jej to dotyczy. Komponent najpierw jest inicjowany, w razie potrzeby jest kompilowany jego szablon, następnie jest montowany w drzewie DOM i wreszcie jest aktualizowany, gdy zmieniają się wartości zmiennych reaktywnych. Na koniec jest odmontowywany.

Funkcje Vue takie jak na przykład onMounted, onUpdated, onUnomounted, pozwalają zdefiniować nasze własne funkcje, które zostaną wykonane w odpowiednich momentach. Aby ich użyć należy je zaimportować np.

    onMounted(() => {
        addToLog('Zamontowano aplikację')
    })
    onUpdated(() => {
        addToLog('Aktualizowano aplikację')
    })
## **6. Komponenty**
* **Tworzenie:** 
    * stworzyć plik NewComponent.vue 
    * import ve Viewsach import NewComponent from '../components/NewComponent.vue'
    * dodać do template znacznik new-component
* **Atrybutyk:** ...
* **Zdarzenia:** ...
* **Sloty:** ...
## **7. Item**
...
## **8. Item**
...

<br><br>
*Realized in Rich Internet Application course* , UEK
<br>
[Original Course - VUEK](https://vuek.netum.pl/wstep/prerekwizyty.html)
