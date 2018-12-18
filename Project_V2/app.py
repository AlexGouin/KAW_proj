from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('KAW_project.html')

@app.route('/foo', methods=['GET', 'POST'])
def foo():
    '''execute whatever code you want when the button gets clicked here'''
    print('Clicked!')
    return 'finished'

if __name__ == '__main__':
    app.run()