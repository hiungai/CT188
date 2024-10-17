import pandas as pd
import numpy as np

#Read CSV
data_set= pd.read_csv("data.csv",sep=" ")

#---Preprocess
#Process Categories
from sklearn.preprocessing import LabelEncoder
lb_col0=LabelEncoder()
lb_col1=LabelEncoder()
lb_col2=LabelEncoder()
value_col0=np.array(("A","B","C","D","E","F","H"))
value_col1=np.array(["X","R","S","A","H","K"])
value_col2=np.array(["X","O","I","C"])
lb_col0.fit(value_col0)
lb_col1.fit(value_col1)
lb_col2.fit(value_col2)
data_set["Class"]=lb_col0.transform(data_set["Class"].values)
data_set["Largest_spot_size"]=lb_col1.transform(data_set["Largest_spot_size"].values)
data_set["Spot_distribution"]=lb_col2.transform(data_set["Spot_distribution"].values)

#Split X,Y
from sklearn.model_selection import train_test_split
X=data_set.iloc[:,:10]
Y=data_set.iloc[:,10:]

#Selection Models

#Spilit Train and Test
from sklearn.model_selection import KFold
kfold=KFold(n_splits=10,random_state=17,shuffle=True) 

from sklearn.neighbors import KNeighborsRegressor 
from sklearn.tree import DecisionTreeRegressor         
from sklearn.linear_model import LinearRegression 
from sklearn.neural_network import MLPRegressor  


dtree=DecisionTreeRegressor(criterion="absolute_error",random_state=17,min_samples_leaf=3,min_samples_split=30)
#dtree=LinearRegression(fit_intercept=True,positive=False)
#dtree=KNeighborsRegressor(n_neighbors=17)
#dtree=MLPRegressor(hidden_layer_sizes=[30,50],activation="relu",solver="adam",alpha=0.0001,learning_rate="adaptive",max_iter=1000,random_state=17)




r2=[]
mae=[]
mse=[]

from sklearn.metrics import r2_score,mean_absolute_error,mean_squared_error
for train_idex,test_index in kfold.split(X):
    dtree.fit(X.iloc[train_idex,:],Y.iloc[train_idex,:])
    y_pred=dtree.predict(X.iloc[test_index,:])
    
    r2.append(r2_score(Y.iloc[test_index,:],y_pred))
    mae.append(mean_absolute_error(Y.iloc[test_index,:],y_pred))
    mse.append(mean_squared_error(Y.iloc[test_index,:],y_pred))

print(np.mean(r2))
print(np.mean(mae))
print(np.mean(mse))

