from flask import *
import webview,os
app = Flask(__name__)
webview.create_window("YggDrasil",app,resizable=True,width=1200,height=800,http_port=1005,js_api=True,minimized=True,on_top=True)


@app.route("/",methods=["GET","POST"])
def Home():
    return render_template("index.html")

@app.route("/DirJson",methods=["GET","POST"])
def DirJson():
    DirConte = os.listdir("C:\\")
    return jsonify(DirConte)


@app.route("/DirNew/<path:filename>",methods=["GET","POST"])
def DirNew(filename):
    PastaAtual = f"C:\\{filename}"
    DirConteNew = os.listdir(f"{PastaAtual}")
    return jsonify(DirConteNew)

@app.route("/DirLer/<path:filename>",methods=["GET","POST"])
def DirLer(filename):
    PastaAtual = f"C:\\{filename}"
    List = []
    for file_path in os.listdir(PastaAtual):
        if os.path.isfile(os.path.join(PastaAtual,file_path)):
            with open(PastaAtual + file_path,"r",encoding="utf-8") as arquivos:
                List.append(arquivos.read())
    return jsonify(List)

if __name__ == "__main__":
    app.run(port=1005,debug=True)
    # webview.start(debug=False,private_mode=False,http_server=True)