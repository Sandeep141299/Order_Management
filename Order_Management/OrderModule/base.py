from flask import Flask, render_template, request
import pymysql
from flask_mysqldb import MySQL


app = Flask(__name__)


# MySQL configurations
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'ordermodule1'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql = MySQL(app)


@app.route('/')
def hello():
    return render_template('form.html')


@app.route('/login', methods=['POST', 'GET'])
def login():
    if request.method == 'GET':
        return render_template('form.html')

    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password']
        cursor = mysql.connection.cursor()
        query_string = "SELECT * FROM admin WHERE Admin_username = %s AND Admin_password= %s"
        data = (name, password,)
        cursor.execute(query_string, data)
        data1 = cursor.fetchall()
        cursor.close()
        if (data1):
            return render_template('index.html', data=data1)
        else:
            return "Incoreect"


if __name__ == "__main__":
    app.run()
