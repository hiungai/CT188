from flask import render_template,redirect,request,url_for,session
from urllib.parse import urlparse
import models_ML
def encode_data_class(tmp):
    switcher={
                'A':0,
                'B':1,
                'C':2,
                'D':3,
                'E':4,
                'F':5,
                'H':6
             }
    return switcher.get(str(tmp).upper(), -1)
def encode_data_largest_spot_size(tmp):
    switcher={
                'X':0,
                'R':1,
                'S':2,
                'A':3,
                'H':4,
                'K':5
             }
    return switcher.get(str(tmp).upper(), -1)
def encode_spot_distribution(tmp):
    switcher={
                'X':0,
                'O':1,
                'I':2,
                'C':3
             }
    return switcher.get(str(tmp).upper(), -1)

def set_route(app):
    dtree=models_ML.get_model()
    @app.route("/")
    def Home_page():
        return render_template("Home_page2.html")
    @app.route("/input_data",methods=["GET","POST"])
    def input_data():
        if request.method=="POST":
            rq=request
            if rq!=None:    
                count=0
                try:
                    class_=rq.form["Class"]
                    class_=encode_data_class(class_)
                    if (class_==-1):
                        class_="Invalid"
                        count+=1
                except:
                    class_="Invalid"
                    count+=1
                try:
                    larget_spot=rq.form["Largest_spot_size"]
                    larget_spot=encode_data_largest_spot_size(larget_spot)
                    if (larget_spot==-1):
                        larget_spot="Invalid"
                        count+=1
                except:
                    larget_spot="Invalid"
                    count+=1
                try:
                    distri=rq.form["Spot_distribution"]
                    distri=encode_spot_distribution(distri)
                    if (distri==-1):
                        distri="Invalid"
                        count+=1
                except:
                    distri="Invalid"
                    count+=1
                try:
                    acti=float(rq.form["Activity"])
                except:
                    acti="Invalid"
                    count+=1
                try:
                    evol=float(rq.form["Evolution"])
                except:
                    evol="Invalid"
                    count+=1
                try:
                    pre_24=float(rq.form["Previous_24_hour_flare_activity"])
                except:
                    pre_24="Invalid"
                    count+=1
                try:
                    his=float(rq.form["Historically_complex"])
                except:
                    his="Invalid"
                    count+=1
                try:
                    did=float(rq.form["Did_region"])
                except:
                    did="Invalid"
                    count+=1
                try:
                    area=float(rq.form["Area"])
                except:
                    area="Invalid"
                    count+=1
                try:
                    area_spot=float(rq.form["Area_largest_spot"])
                except:
                    area_spot="Invalid"
                    count+=1
                if count>0:
                    dict_=dict(class_=class_,larget_spot=larget_spot,distri=distri,acti=acti,evol=evol,pre_24=pre_24,his=his,did=did,area=area,area_spot=area_spot)
                    return render_template("Error_Input.html",**dict_)
                y_pred=dtree.predict([[class_,larget_spot,distri,acti,evol,pre_24,his,did,area,area_spot],])
                session["C"]=round(y_pred[0][0])
                session["M"]=round(y_pred[0][1])
                session["X"]=round(y_pred[0][2])
                return redirect(url_for('result'))
            return render_template("Input_data2.html")
        return render_template("Input_data2.html")
    @app.route("/result")
    def result():
        #Secure 
        rff=request.headers.get("Referer")
        url_cur=urlparse(rff)
        if (rff!=None) & (url_cur.path==url_for('input_data')):
            try:
                c_class=session["C"]
                m_class=session["M"]
                x_class=session["X"]
            except:
                return render_template("Error_Input.html")
            return render_template("Result.html",c_class=c_class,m_class=m_class,x_class=x_class)
        else: return redirect(url_for('Home_page'))
import string
import secrets
def secret_key(tmp):
    chars=string.digits+string.ascii_letters+string.punctuation
    return ''.join(secrets.choice(chars) for _ in range(tmp))
    
