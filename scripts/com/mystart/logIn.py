import mysql.connector


def logIn(pw):
  # Connection herstellen
  connection = mysql.connector.connect(host='localhost',
                                       database='userdb',
                                       user="root",
                                       password="1234")

  # Cursor erstellen, damit man auf die DB zugreiffen kann
  cursor = connection.cursor(dictionary=True)

  # SQL Abfrage definieren und für psw_user den Parameter einfügen, Abfrage ausführen
  sqlQuery = """SELECT id FROM userdb.usert WHERE psw_user =%s"""
  cursor.execute(sqlQuery, (pw,))
  record = cursor.fetchall()

  # id in einer variablen speichern
  for row in record:
    id = row["id"]
  print(id)


logIn("MyStart2021")
