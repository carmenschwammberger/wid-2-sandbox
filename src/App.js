export default function App() {
  /*
   *
   *    JAVASCRIPT hier
   *
   */

  console.log("Test2");

  const a = "Test";  //Schlüsselwort für Deklaration einer Variable
  //const a = "Teste1"; -> Fehler, da a bereits definiert, Varialen können nicht mehrfach definiert werden

  if(a === "Test"){ //Einrückung spielt keine Rolle
    console.log("A ist gleich Test"); //Befehle werden immer mit ; abeschlossen
  } //if(a === "Test") definiert eine Bedingung, {} Block -> definiert, was passiert, wenn die Bedingung eingehalten ist
  else { //else definiert, was passiert, wenn die Bedingung nicht eingehalten ist
    console.log("A ist nicht gleich Test");
  }

  //Bedingung ?:

  const user = "admin";

  user === "admin" ? "isAdmin": "isNotAdmin"; //Ternärer Operator, wenn Bedingung erfüllt, dann isAdmin, sonst isNotAdmin 


//Funktionen:

  function logger(x, y = "_3"){ //Definition der Parameter: Es braucht nicht zwingend Parameter; mit y = "_3" wird ein Default-Wert für y definiert, falls y nicht beim Ausführen der Funkiton gebraucht wird
  //Es müssen zuerst alle Parameter ohne Default-Wert definiert werden (von links nach rechts)
    const result = "Funktion ausgeführt!" + x + y; //Definition der Variable für Ausgabe
    console.log("Funktion ausgeführt!" + x + y);
    return result; //Ausgabe
  } //Definition der Funktion

  logger("_1", "_2"); //Aufruf der Funktion

//Arrays:
  const array = [1, 2, 3, "vier", false, "letztes"]; //Definition eines Arrays, Elemente mit Komma separieren; alle Datentypen möglich
  const element = array[0]; //gibt das Element an erster Stelle (Stelle 0) aus
  const elementLast = array[array.length - 1]; //gibt das letzte Element des Arrays aus, mit -2 das zweitletzte, etc. 

  const users = ["Tim", "Anna", "Admin"];
  const usersTransformed =users.map(user => user + "_user"); //map() erstellt ein neues Array, das die Elemente des alten Arrays anpasst
  console.log(usersTransformed);

  const filteredUsers = users.filter(user => user !== "Admin") //filter() erstellt neues Array, indem es Elemente aus dem alten Array filtert
  console.log(filteredUsers);
  //map() und filter() verlangen Funktionen in den Klammern

  //Array = Liste von Elementen / Werten
  //Arrays = geordnet
  //Arrays = Elemente werden über ihren Index (Position) gefunden


  //Objekte:
  const object ={
    meinString: "User",
    meineNummer: 1,
    meinArray: [],
    meinObjekt: {},
  }

  //Objekt = Liste von Schlüssel-Wert-Paaren (ähnlich wie Dictionary in Python)
  //Objekte: ungeordnet
  //Objekt: Werte werden über Schlüssel identifiziert


//Übung 1:

  console.log("Übung 1");

  const Datentyp = "Hallo Welt";

  if(typeof Datentyp === "string") {
    console.log("Datentyp ist ein String");
  }
  else if(typeof Datentyp === "number") { //tyeof detektiert bzw. prüft den Datentyp der Variable
    console.log("Datentyp ist eine Zahl");
  }
  else if (typeof Datentyp === "boolean") {
    console.log("Datentyp ist ein Boolean");
  }
  else if (typeof Datentyp === "null") {
    console.log("Datentyp ist null");
  }
  else {
    console.log("Datentyp ist nicht bekannt");
  }


  //Übung 2:

  console.log("Übung 2");

  const IsTheTruth = false;

  //Übung 3:

  console.log("Übung 3");

  function multiply(x, y = 2) {
    if(typeof x !== "number" || typeof y !== "number") {
      console.log("Fehler: x und y müssen Zahlen sein");
      return;
    }
    const result = x * y;
    console.log("Produkt: " + result);
    return result;
  }

  multiply(5, 3);


  //Übung 4:

  console.log("Übung 4");
  
  const Text = (Wort1, Wort2) => Wort1 + " " + Wort2;
  Text("Hallo", "Welt");


  return (
    /*
     *
     *    HTML hier
     *    + JavaScript in {} möglich
     *
     */
    <div>
      <div>Hallo Welt {a}</div>
      <div>{user === "admin" ? "isAdmin" : "isNotAdmin"}</div>
      <div style={{ backgroundColor: user === "admin" ? "blue" : "red" }}></div>
      <p style={{ color: IsTheTruth ? "green" : "red" }}>Heute regnet es nicht, es scheint die Sonne</p>
      <div>{logger("_1", "_2")}</div>
      <div>{element}</div>
      <div>{elementLast}</div>
      <div>{array}</div>
      <div>{users.map((user) => (<li>{user}</li>))}</div>
      <div>{object.meineNummer}</div>
      <div>{object["meinString"]}</div>
    </div>
    /*
     *
     */
  );
}
