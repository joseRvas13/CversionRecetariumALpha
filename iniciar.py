import mysql.connector

conexion = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='RecetariumV5'
)

cursor = conexion.cursor()

cursor.execute("SELECT * FROM tbl_usuarios")

resultados = cursor.fetchall()

for fila in resultados:
    print(fila)

cursor.close()
conexion.close()
