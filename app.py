from flask import Flask, render_template, request, redirect

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        counter = request.form['option']
        return render_template('game.html', counter=counter)
    else:
        return render_template('index.html')


if __name__ == '__main__':
    app.run()
