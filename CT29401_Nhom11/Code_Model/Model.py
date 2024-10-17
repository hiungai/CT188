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

#Train models
from sklearn.tree import DecisionTreeRegressor  
dtree=DecisionTreeRegressor(criterion="absolute_error",random_state=17,min_samples_leaf=3,min_samples_split=30)
dtree.fit(X.values,Y.values)
