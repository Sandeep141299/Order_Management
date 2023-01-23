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

# -------------------LOG in Module Route start -------------------__


@app.route('/test2', methods=['POST'])
def test2():
    resp = flask.Response("sdfsdf")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/test', methods=['POST'])
def test():
    name = flask.request.form['name']
    password = flask.request.form['password']
    cursor = mysql.connection.cursor()
    query_string = "SELECT * FROM admin WHERE Admin_username = %s AND Admin_password= %s"
    data = (name, password,)
    cursor.execute(query_string, data)
    data1 = cursor.fetchall()
    cursor.close()
    if (data1):
        resp = flask.Response()
        resp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data1))
        resp.set_data(str(listit(data1)))
        return resp
    else:
        return "Incoreect"

# -------------------LOG in Module Route End  -------------------__

# ------------------- Add Tuters data  Module Route start -------------------__


@app.route('/tutors1', methods=['POST'])
def tutors1():
    respp = flask.Response("sdfsdf")
    respp.headers['Access-Control-Allow-Origin'] = '*'
    return respp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/tutors', methods=['POST'])
def tutors():
    Expert_firstname = flask.request.form['Expert_firstname']
    Expert_lastname = flask.request.form['Expert_lastname']
    Expert_email = flask.request.form['Expert_email']
    Expert_contact = flask.request.form['Expert_contact']
    Expert_Address = flask.request.form['Expert_Address']
    print(Expert_firstname)
    cursor = mysql.connection.cursor()
    # insert
    insertQuery = "INSERT INTO expert (Expert_firstname, Expert_lastname, Expert_email, Expert_contact, Expert_Address) VALUES (%s, %s,%s,%s,%s) "
    userInput = (Expert_firstname, Expert_lastname,
                 Expert_email, Expert_contact, Expert_Address)
    result = cursor.execute(insertQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM expert")
    data = cursor.fetchall()

    cursor.close()
    if (result):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data))
        respp.set_data(str(listit(data)))
        return respp
    else:
        return "Incoreect"

# ------------------- Add Tuters data  Module Route End -------------------__

# ------------------- Add OTM Mamber data  Module Route start -------------------__


@app.route('/otm1', methods=['POST'])
def otm1():
    respp = flask.Response("sdfsdf")
    respp.headers['Access-Control-Allow-Origin'] = '*'
    return respp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/otm', methods=['POST'])
def otm():
    Otm_username = flask.request.form['Otm_username']
    Otm_lastname = flask.request.form['Otm_lastname']
    Otm_password = flask.request.form['Otm_password']
    Otm_email = flask.request.form['Otm_email']
    Otm_contact = flask.request.form['Otm_contact']
    Otm_joiningDate = flask.request.form['Otm_joiningDate']
    Level = flask.request.form['Level']
    cursor = mysql.connection.cursor()
    print(type(Otm_contact))
    # insert
    insertQuery = "INSERT INTO otm (Otm_username, Otm_lastname, Otm_password, Otm_email, Otm_contact, Otm_joiningDate, Level) VALUES (%s, %s,%s,%s,%s,%s,%s) "
    userInput = (Otm_username, Otm_lastname,
                 Otm_password, Otm_email, Otm_contact, Otm_joiningDate, Level)
    result = cursor.execute(insertQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM otm")
    data = cursor.fetchall()

    cursor.close()
    if (result):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data))
        respp.set_data(str(listit(data)))
        return respp
    else:
        return "Incoreect"
# ------------------- Add OTM Mamber  data  Module Route End -------------------__

# ------------------- Add Task data  Module Route start -------------------__


@app.route('/addtask1', methods=['POST'])
def addtask1():
    respp = flask.Response("sdfsdf")
    respp.headers['Access-Control-Allow-Origin'] = '*'
    return respp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/addtask', methods=['POST'])
def addtask():
    print('in add task')
    Task_Subject = flask.request.form['Task_Subject']
    Vendor_budget = flask.request.form['Vendor_budget']
    Expert_firstname = flask.request.form['Expert_firstname']
    Client_name = flask.request.form['Client_name']
    Status = flask.request.form['Status']
    Start_date = flask.request.form['Start_date']
    End_date = flask.request.form['End_date']
    Expert_startDate = flask.request.form['Expert_startDate']
    Expert_endDate = flask.request.form['Expert_endDate']
    Qc_Expert_name = flask.request.form['Qc_Expert_name']
    Otm_username = flask.request.form['Otm_username']
    Description = flask.request.form['Description']
    Word_count = flask.request.form['Word_count']
    Expert_price = flask.request.form['Expert_price']
    cursor = mysql.connection.cursor()
    print(Task_Subject, Vendor_budget,
          Expert_firstname, Client_name, Status, Start_date, End_date, Expert_startDate, Expert_endDate, Qc_Expert_name, Otm_username, Description, Word_count, Expert_price)

    # qurey for fatch expert_id-------
    query_string = "SELECT * FROM expert WHERE Expert_firstname =%s"
    cursor.execute(query_string, (Expert_firstname,))
    data = cursor.fetchone()
    Expert_ID = int(data[0])
    print(Expert_ID)
    # qurey for fatch Client_ID-------
    query_string = "SELECT * FROM client WHERE Client_name =%s"
    cursor.execute(query_string, (Client_name,))
    data = cursor.fetchone()
    Client_id = int(data[0])
    print(Client_id)

    # qurey for fatch Qc_Expert_id -------
    query_string = "SELECT * FROM expert WHERE Expert_firstname =%s"
    cursor.execute(query_string, (Expert_firstname,))
    data = cursor.fetchone()
    Qc_Expert_id = int(data[0])
    print(Qc_Expert_id)

    # qurey for fatch expert_id-------
    query_string = "SELECT * FROM otm WHERE Otm_username =%s"
    cursor.execute(query_string, (Otm_username,))
    data = cursor.fetchone()
    Otm_id = int(data[0])
    print(Otm_id)
    # insert
    insertQuery = "INSERT INTO orders (Task_Subject, Vendor_budget, Expert_ID, Client_id, Status, Start_date, End_date, Expert_startDate, Expert_endDate, Qc_Expert_id, Otm_id, Description, Word_count, Expert_price) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s) "
    userInput = (Task_Subject, Vendor_budget,
                 Expert_ID, Client_id, Status, Start_date, End_date, Expert_startDate, Expert_endDate, Qc_Expert_id, Otm_id, Description, Word_count, Expert_price)
    result = cursor.execute(insertQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM orders")
    data = cursor.fetchall()

    cursor.close()
    if (result):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data))
        respp.set_data(str(listit(data)))
        return respp
    else:
        return "Incoreect"

# ------------------- Add Task data  Module Route End -------------------__

# ------------------- Add Client data  Module Route start -------------------__


@app.route('/addclient1', methods=['POST'])
def addclient1():
    respp = flask.Response("sdfsdf")
    respp.headers['Access-Control-Allow-Origin'] = '*'
    return respp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/addclient', methods=['POST'])
def addclient():
    Client_name = flask.request.form['Client_name']
    Client_contact = flask.request.form['Client_contact']
    Client_email = flask.request.form['Client_email']
    Client_status = flask.request.form['Client_status']
    University = flask.request.form['University']
    Business_name = flask.request.form['Business_name']
    Student_login = flask.request.form['Student_login']
    Student_password = flask.request.form['Student_password']
    cursor = mysql.connection.cursor()
    print(type(Client_contact))
    # insert
    insertQuery = "INSERT INTO client (Client_name, Client_contact, Client_email, Client_status, University, Business_name, Student_login, Student_password) VALUES (%s, %s,%s,%s,%s,%s,%s,%s) "
    userInput = (Client_name, Client_contact,
                 Client_email, Client_status, University, Business_name, Student_login, Student_password)
    result = cursor.execute(insertQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM client")
    data = cursor.fetchall()

    cursor.close()
    if (result):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data))
        respp.set_data(str(listit(data)))
        return respp
    else:
        return "Incoreect"

# ------------------- Add Client data  Module Route End -------------------__


# ------------------- Add Budget data  Module Route start -------------------__


@app.route('/Budget1', methods=['POST'])
def Budegt1():
    respp = flask.Response("sdfsdf")
    respp.headers['Access-Control-Allow-Origin'] = '*'
    return respp


def listit(t):
    return list(map(listit, t)) if isinstance(t, (list, tuple)) else t


@app.route('/Budget', methods=['POST'])
def Budget():
    print("Budget")
    Client_name = flask.request.form['Client_name']
    Package_price = flask.request.form['Package_price']
    Amount_Paid = flask.request.form['Amount_Paid']
    Pending_amount = flask.request.form['Pending_amount']
    Mode_of_payment = flask.request.form['Mode_of_payment']
    Status = flask.request.form['Status']
    cursor = mysql.connection.cursor()
    print(Status, "client name==", Client_name)

    query_string = "SELECT * FROM client WHERE Client_name =%s"
    print("query run1")
    cursor.execute(query_string, (Client_name,))
    print("query run2")
    data = cursor.fetchone()
    print("query run3")
    client_id = int(data[0])
    print(client_id)
    print("query run4")

    insertQuery = "INSERT INTO Budget (Client_id, Package_price, Amount_Paid, Pending_amount, Mode_of_payment, Status) VALUES (%s, %s,%s,%s,%s,%s) "
    userInput = (client_id, Package_price,
                 Amount_Paid, Pending_amount, Mode_of_payment, Status)
    result = cursor.execute(insertQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM Budget")
    data = cursor.fetchall()

    cursor.close()
    if (result):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        print(listit(data))
        respp.set_data(str(listit(data)))
        return respp
    else:
        return "Incoreect"
# ------------------- Add OTM budget  Module Route End -------------------__

# ------------------- Fatch OTM Mamber data For data table Module Route start -------------------__


@app.route('/getotm1', methods=['GET', 'POST'])
def getotm1():
    # creating variable for connection
    print('in getotm1')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM otm")
    data = cursor.fetchall()
    print('after141')
    print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch OTM Mamber data For data table Module Route End -------------------__

# ------------------- Fatch Tutors(Expert) data For data table Module Route start -------------------__


@app.route('/getexpert', methods=['GET', 'POST'])
def getexpert():
    # creating variable for connection
    print('in Tutors')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM expert")
    data = cursor.fetchall()
    print('after141')
    print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch Tutors(Expert) data For data table Module Route Endd-------------------_

# ------------------- Fatch Client data For data table Module Route start -------------------__


@app.route('/getclientdata', methods=['GET', 'POST'])
def getclient():
    # creating variable for connection
    print('in client')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM client")
    data = cursor.fetchall()
    print('after141')
    # print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    # print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch client  data For data table Module Route End -------------------__

# ------------------- Fatch Client name data For Budget form Module Route start -------------------__


@app.route('/getclientnamedata', methods=['GET', 'POST'])
def getclientname():
    # creating variable for connection
    print('in client')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM client WHERE Client_status='student'")
    data = cursor.fetchall()
    print('after141')
    # print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    # print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch client name data For Budget form  Module Route End -------------------_

# ------------------- Fatch Budget data For data table Module Route start -------------------__


@app.route('/getbudgetdata', methods=['GET', 'POST'])
def getbudgetdata():
    # creating variable for connection
    print('in budget')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM budget")
    data = cursor.fetchall()
    print('Budget')
    # print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    # print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch Budget  data For data table Module Route End -------------------__

# ------------------- Fatch Task data For data table Module Route start -------------------__


@app.route('/getordersdata', methods=['GET', 'POST'])
def getordersdata():
    # creating variable for connection
    print('======in getordersdata======')
    cursor = mysql.connection.cursor()
    # executing query
    cursor.execute("SELECT * FROM  orders")
    data = cursor.fetchall()
    print('======Orders data=====')
    # print(data)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    # print(listit(data))
    respp.set_data(json.dumps(json.dumps(data)))
    return respp

# ------------------- Fatch Task  data For data table Module Route End -------------------__

# ------------------- Delete OTM Mamber data  from data table Module Route start -------------------__


@app.route('/deleteotm/<userId>', methods=['DELETE', "OPTIONS"])
def deleteUser(userId):
    print("request delete")
    # return userId
    # creating variable for connection
    print('in getotm1')
    cursor = mysql.connection.cursor()

    # executing query
    query = "DELETE FROM otm WHERE Otm_ID=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    mysql.connection.commit()
    print("resul", result)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.set_data('Deleted!')
    return respp

# ------------------- Delete OTM Mamber data  from data table Module Route End -------------------__

# ------------------- Delete Tutors(expert) data  from data table Module Route start -------------------__


@app.route('/deleteexpert/<userId>', methods=['DELETE', "OPTIONS"])
def deleteexpertUser(userId):
    print("request delete")
    # return userId
    # creating variable for connection
    print('in getotm1')
    cursor = mysql.connection.cursor()

    # executing query
    query = "DELETE FROM expert WHERE Expert_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    mysql.connection.commit()
    print("resul", result)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.set_data('Deleted!')
    return respp

# ------------------- Delete Tutors(expert) data  from data table Module Route End -------------------__

# ------------------- Delete client data  from data table Module Route start -------------------__


@app.route('/deleteclient/<userId>', methods=['DELETE', "OPTIONS"])
def deleteclientUser(userId):
    print("request delete")
    # return userId
    # creating variable for connection
    print('client')
    cursor = mysql.connection.cursor()

    # executing query
    query = "DELETE FROM client WHERE client_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    mysql.connection.commit()
    print("resul", result)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.set_data('Deleted!')
    return respp

# ------------------- Delete Client data  from data table Module Route End -------------------__

# ------------------- Delete Task data  from data table Module Route start -------------------__


@app.route('/deleteorders/<userId>', methods=['DELETE', "OPTIONS"])
def deleteorders(userId):
    print("request delete")
    # return userId
    # creating variable for connection
    print('in getotm1')
    cursor = mysql.connection.cursor()

    # executing query
    query = "DELETE FROM orders WHERE Order_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    mysql.connection.commit()
    print("resul", result)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.set_data('Deleted!')
    return respp

# ------------------- Delete task data  from data table Module Route End -------------------__

# ------------------- Delete Budget data  from data table Module Route start -------------------__


@app.route('/deletebudget/<userId>', methods=['DELETE', "OPTIONS"])
def deletebudget(userId):
    print("request delete")
    # return userId
    # creating variable for connection
    print('Budget')
    cursor = mysql.connection.cursor()

    # executing query
    query = "DELETE FROM budget WHERE Budget_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    mysql.connection.commit()
    print("resul", result)
    # print(json.dumps(data))
    # returning back to projectlist.html with all records from MySQL which are stored in variable data

    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.set_data('Deleted!')
    return respp

# ------------------- Delete Budget data  from data table Module Route End -------------------__

# -------------------Fatch OTM mamber Id for update  data in data table Module Route start -------------------__


@app.route('/getotmuser/<userId>', methods=['GET', 'POST', "OPTIONS"])
def getotmuserUser(userId):
    cursor = mysql.connection.cursor()
    # executing query
    query = "SELECT * FROM otm WHERE Otm_ID=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    data = cursor.fetchall()
    mysql.connection.commit()
    print("User ID", userInput)
    print("result", result)
    print("data", data)
    print(json.dumps(json.dumps(data)))
    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    respp.set_data(json.dumps(json.dumps(data)))
    # respp.set_data('Deleted!', result)
    return respp
# -------------------Fatch OTM mamber Id for update  data in data table Module Route End -------------------__

# -------------------Update OTM mamber  data in data table Module Route start -------------------__


@app.route('/updateotm/<userId>', methods=['POST'])
def updateotm(userId):
    Otm_username = flask.request.form['Otm_username']
    Otm_lastname = flask.request.form['Otm_lastname']
    Otm_password = flask.request.form['Otm_password']
    Otm_email = flask.request.form['Otm_email']
    Otm_contact = flask.request.form['Otm_contact']
    Otm_joiningDate = flask.request.form['Otm_joiningDate']
    Level = flask.request.form['Level']
    cursor = mysql.connection.cursor()
    # insert
    updateQuery = "UPDATE `otm` SET `Otm_username` = %s, `Otm_lastname` = %s, `Otm_password` = %s, `Otm_email` = %s, `Otm_contact` = %s, `Otm_joiningDate` = %s, `Level` = %s WHERE `otm`.`Otm_ID` = %s"
    userInput = (Otm_username, Otm_lastname,
                 Otm_password, Otm_email, Otm_contact, Otm_joiningDate, Level, userId)

    result = cursor.execute(updateQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM otm")
    data = cursor.fetchall()

    cursor.close()
    if (data):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data(json.dumps(json.dumps(data)))
        return respp
    else:
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data('failed')
        return respp
# -------------------Update OTM mamber  data in data table Module Route End -------------------__

# -------------------Fatch Tutors(Expert) Id for update  data in data table Module Route start -------------------__


@app.route('/gettutoruser/<userId>', methods=['GET', 'POST', "OPTIONS"])
def gettutoruser(userId):
    cursor = mysql.connection.cursor()
    # executing query
    query = "SELECT * FROM expert WHERE Expert_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    data = cursor.fetchall()
    mysql.connection.commit()
    print("User ID", userInput)
    print("result", result)
    print("data", data)
    print(json.dumps(json.dumps(data)))
    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    respp.set_data(json.dumps(json.dumps(data)))
    # respp.set_data('Deleted!', result)
    return respp

# -------------------Fatch Tutors(Expert) Id for update  data in data table Module Route End-------------------__

# -------------------Update Tutors(Expert)  data in data table Module Route Start -------------------__


@app.route('/updatetutor/<userId>', methods=['POST'])
def updatetutor(userId):
    print(userId)
    Expert_firstname = flask.request.form['Expert_firstname']
    Expert_lastname = flask.request.form['Expert_lastname']
    Expert_email = flask.request.form['Expert_email']
    Expert_contact = flask.request.form['Expert_contact']
    Expert_Address = flask.request.form['Expert_Address']
    print(Expert_Address)
    cursor = mysql.connection.cursor()
    # insert
    updateQuery = "UPDATE `expert` SET `Expert_firstname` = %s, `Expert_lastname` = %s, `Expert_email` = %s, `Expert_contact` = %s, `Expert_Address` = %s WHERE `expert`.`Expert_id`= %s"
    userInput = (Expert_firstname,
                 Expert_lastname, Expert_email, Expert_contact, Expert_Address, userId)
    print(userInput)
    result = cursor.execute(updateQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM expert")
    data = cursor.fetchall()

    cursor.close()
    if (data):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data(json.dumps(json.dumps(data)))
        return respp
    else:
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data('failed')
        return respp

# -------------------Update Tutors(Expert)  data in data table Module Route End -------------------_

# -------------------Fatch client Id for update  data in data table Module Route start -------------------__


@app.route('/getclient/<userId>', methods=['GET', 'POST', "OPTIONS"])
def getclientID(userId):
    cursor = mysql.connection.cursor()
    # executing query
    query = "SELECT * FROM client WHERE client_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    data = cursor.fetchall()
    mysql.connection.commit()
    print(result, data, userInput)
    print(json.dumps(json.dumps(data)))
    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    respp.set_data(json.dumps(json.dumps(data)))
    # respp.set_data('Deleted!', result)
    return respp

# -------------------Fatch client Id for update  data in data table Module Route End -------------------__

# -------------------Update client  data in data table Module Route start -------------------__


@app.route('/updateclient/<userId>', methods=['POST'])
def updateclient(userId):
    Client_name = flask.request.form['Client_name']
    Client_contact = flask.request.form['Client_contact']
    Client_email = flask.request.form['Client_email']
    Client_status = flask.request.form['Client_status']
    University = flask.request.form['University']
    Business_name = flask.request.form['Business_name']
    Student_login = flask.request.form['Student_login']
    Student_password = flask.request.form['Student_password']
    cursor = mysql.connection.cursor()
    # insert
    updateQuery = "UPDATE `client` SET `Client_name` = %s, `Client_contact` = %s, `Client_email` = %s, `Client_status` = %s, `University` = %s, `Business_name` = %s, `Student_login` = %s, `Student_password` = %s WHERE `client`.`client_id` = %s"
    userInput = (Client_name, Client_contact,
                 Client_email, Client_status, University, Business_name, Student_login, Student_password, userId)

    result = cursor.execute(updateQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM client")
    data = cursor.fetchall()

    cursor.close()
    if (data):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data(json.dumps(json.dumps(data)))
        return respp
    else:
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data('failed')
        return respp

# -------------------Update client data in data table Module Route End -------------------__

# -------------------Fatch budget Id for update  data in data table Module Route start -------------------__


@app.route('/getbudget/<userId>', methods=['GET', 'POST', "OPTIONS"])
def getbudget(userId):
    cursor = mysql.connection.cursor()
    # executing query
    query = "SELECT * FROM budget WHERE Budget_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    data = cursor.fetchall()
    mysql.connection.commit()
    print("budget ID", userInput)
    print("result", result)
    print("data", data)
    print(json.dumps(json.dumps(data)))
    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    respp.set_data(json.dumps(json.dumps(data)))
    # respp.set_data('Deleted!', result)
    return respp
# -------------------Fatch budget Id for update  data in data table Module Route End -------------------__

# -------------------Update budget data in data table Module Route start -------------------__


@app.route('/updatebudget/<userId>', methods=['POST'])
def updatebudget(userId):
    Client_name = flask.request.form['Client_name']
    Package_price = flask.request.form['Package_price']
    Amount_Paid = flask.request.form['Amount_Paid']
    Pending_amount = flask.request.form['Pending_amount']
    Mode_of_payment = flask.request.form['Mode_of_payment']
    Status = flask.request.form['Status']
    cursor = mysql.connection.cursor()
    print(Status, "client name==", Client_name)

    query_string = "SELECT * FROM client WHERE Client_name =%s"
    cursor.execute(query_string, (Client_name,))
    data = cursor.fetchone()
    client_id = int(data[0])
    print(client_id)

    # insert
    updateQuery = "UPDATE `budget` SET `client_id` = %s, `Package_price` = %s, `Amount_Paid` = %s, `Pending_amount` = %s, `Mode_of_payment` = %s, `Status` = %s WHERE `budget`.`Budget_id` = %s"
    userInput = (client_id, Package_price,
                 Amount_Paid, Pending_amount, Mode_of_payment, Status, userId)

    result = cursor.execute(updateQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM budget")
    data = cursor.fetchall()

    cursor.close()
    if (data):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data(json.dumps(json.dumps(data)))
        return respp
    else:
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data('failed')
        return respp

# -------------------Update budget data in data table Module Route End -------------------__

# -------------------Fatch task Id for update  data in data table Module Route start -------------------__


@app.route('/gettaskid/<userId>', methods=['GET', 'POST', "OPTIONS"])
def gettaskid(userId):
    cursor = mysql.connection.cursor()
    # executing query
    query = "SELECT * FROM orders WHERE Order_id=%s"
    userInput = (userId, )
    result = cursor.execute(query, userInput)
    data = cursor.fetchall()
    mysql.connection.commit()
    # print("task ID", userInput)
    # print("result", result)
    print("data", data)
    print(json.dumps(json.dumps(data)))
    respp = flask.Response()
    respp.headers['Access-Control-Allow-Origin'] = '*'
    respp.headers['Content-Type'] = 'application/json'
    respp.set_data(json.dumps(json.dumps(data)))
    # respp.set_data('Deleted!', result)
    return respp
# -------------------Fatch budget Id for update  data in data table Module Route End -------------------__

# -------------------Update task data in data table Module Route start -------------------__


@app.route('/updatetask/<userId>', methods=['POST'])
def updatetask(userId):
    Task_Subject = flask.request.form['Task_Subject']
    Vendor_budget = flask.request.form['Vendor_budget']
    Expert_firstname = flask.request.form['Expert_firstname']
    Client_name = flask.request.form['Client_name']
    Status = flask.request.form['Status']
    Start_date = flask.request.form['Start_date']
    End_date = flask.request.form['End_date']
    Expert_startDate = flask.request.form['Expert_startDate']
    Expert_endDate = flask.request.form['Expert_endDate']
    Qc_Expert_name = flask.request.form['Qc_Expert_name']
    Otm_username = flask.request.form['Otm_username']
    Description = flask.request.form['Description']
    Word_count = flask.request.form['Word_count']
    Expert_price = flask.request.form['Expert_price']
    cursor = mysql.connection.cursor()
    print(Task_Subject, Vendor_budget,
          Expert_firstname, Client_name, Status, Start_date, End_date, Expert_startDate, Expert_endDate, Qc_Expert_name, Otm_username, Description, Word_count, Expert_price)

    # qurey for fatch expert_id-------
    query_string = "SELECT * FROM expert WHERE Expert_firstname =%s"
    cursor.execute(query_string, (Expert_firstname,))
    data = cursor.fetchone()
    Expert_id = int(data[0])
    print(Expert_id)
    # qurey for fatch Client_ID-------
    query_string = "SELECT * FROM client WHERE Client_name =%s"
    cursor.execute(query_string, (Client_name,))
    data = cursor.fetchone()
    Client_id = int(data[0])
    print(Client_id)

    # qurey for fatch Qc_Expert_id -------
    query_string = "SELECT * FROM expert WHERE Expert_firstname =%s"
    cursor.execute(query_string, (Expert_firstname,))
    data = cursor.fetchone()
    Qc_Expert_id = int(data[0])
    print(Qc_Expert_id)

    # qurey for fatch expert_id-------
    query_string = "SELECT * FROM otm WHERE Otm_username =%s"
    cursor.execute(query_string, (Otm_username,))
    data = cursor.fetchone()
    Otm_id = int(data[0])
    print(Otm_id)

   # Update

    updateQuery = "UPDATE `orders` SET `Task_Subject` = %s, `Vendor_budget` = %s, `Expert_id` = %s, `Client_id` = %s, `Status` = %s, `Start_date` = %s, `End_date` = %s, `Expert_startDate` = %s, `Expert_endDate` = %s, `Qc_Expert_id` = %s, `Otm_id` = %s, `Description` = %s, `Word_count` = %s, `Expert_price` = %s WHERE `orders`.`Order_id` = %s"
    userInput = (Task_Subject, Vendor_budget,
                 Expert_id, Client_id, Status, Start_date, End_date, Expert_startDate, Expert_endDate, Qc_Expert_id, Otm_id, Description, Word_count, Expert_price, userId)

    result = cursor.execute(updateQuery, userInput)
    mysql.connection.commit()

    # select
    cursor.execute("SELECT * FROM budget")
    data = cursor.fetchall()

    cursor.close()
    if (data):
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data(json.dumps(json.dumps(data)))
        return respp
    else:
        respp = flask.Response()
        respp.headers['Access-Control-Allow-Origin'] = '*'
        respp.set_data('failed')
        return respp

# -------------------Update tas


if __name__ == "__main__":
    app.run()
