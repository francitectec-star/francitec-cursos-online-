from flask import Flask, jsonify, request
import os

app = Flask(__name__)


@app.route("/")
def home():
    return jsonify({
        "status": "online",
        "message": "Francitec Payments API funcionando!"
    })


@app.route("/health")
def health():
    return jsonify({
        "status": "ok"
    })


@app.route("/test-payment", methods=["POST"])
def test_payment():
    data = request.get_json(silent=True) or {}

    amount = data.get("amount", 0)
    student = data.get("student", "Aluno de teste")

    return jsonify({
        "success": True,
        "mode": "TEST",
        "message": "Pagamento de teste criado com sucesso!",
        "student": student,
        "amount": amount,
        "currency": "MZN",
        "transaction_id": "TEST-" + os.urandom(6).hex()
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
