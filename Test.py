import os

Caminho = "C:\\Users\\sustu\\Pictures\\Programmation\HTML5 , CSS3 e Js\\Teste"
Listar = os.listdir(Caminho)
Tamanho = len(Listar)

for i in range(0,Tamanho):
    with open(Caminho + "\\" + Listar[i],"r",encoding="utf-8") as arquivos:
              print(arquivos.read())
