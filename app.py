from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    mensaje = None
    if request.method == 'POST':
        nombre = request.form.get('nombre')
        if nombre:
            mensaje = f"¡Feliz Navidad, {nombre}! Te amo con todo mi corazón. ❤️🎄"
    return render_template('index.html', mensaje=mensaje)

if __name__ == '__main__':
    app.run(debug=True)