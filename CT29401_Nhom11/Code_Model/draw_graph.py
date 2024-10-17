import matplotlib.pyplot as plt

# Data
models = ["LinearRegression", "KNN", "DecisionTreeRegression", "MLPRegression"]
r_squared = [0.05244900472996787, 0.022010450947282743, 0.14018499226415354, 0.015508478813562477]
mae = [0.17415165403331279, 0.16874327936076566, 0.12224034561805679, 0.1836657381237835]
mse = [0.23813411592785488, 0.24344402214711844, 0.2768978134367836, 0.24322767543795196]

# Draw graph
fig, ax = plt.subplots(figsize=(10, 6))

bar_width = 0.2
index = range(len(models))

plt.bar(index, r_squared, bar_width, label='R-squared', alpha=0.7)
plt.bar([i + bar_width for i in index], mae, bar_width, label='MAE', alpha=0.7)
plt.bar([i + 2 * bar_width for i in index], mse, bar_width, label='MSE', alpha=0.7)

plt.xlabel('Models')
plt.ylabel('Scores')
plt.title('Comparison of Model Performance')
plt.xticks([i + bar_width for i in index], models)
plt.legend()

plt.tight_layout()
plt.show()
