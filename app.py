from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.secret_key = "Dhany2005"

# Update this line for PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://postgres:Dhany%402005@localhost/gs_travels"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    contact_no = db.Column(db.String(20), nullable=False)
    pickup = db.Column(db.String(100), nullable=False)
    destination = db.Column(db.String(100), nullable=False)
    booking_time = db.Column(db.DateTime, default=datetime.utcnow)

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == "POST":
        # Extract form data
        name = request.form.get('Name')
        contact_no = request.form.get('contactno')
        pickup = request.form.get('Pickup')
        destination = request.form.get('Destiny')

        # Create new booking
        booking = Booking(
            name=name,
            contact_no=contact_no,
            pickup=pickup,
            destination=destination
        )
        db.session.add(booking)
        db.session.commit()

    allbooking = Booking.query.all()
    return render_template("index.html", allbooking=allbooking)

if __name__ == "__main__":
    app.run(debug=True)