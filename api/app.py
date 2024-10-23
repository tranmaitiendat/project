from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Cho phép CORS cho tất cả các domain

# Kết nối đến database và tạo bảng nếu chưa tồn tại
def init_db():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Hàm tiện ích để tương tác với database
def query_db(query, args=(), one=False):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute(query, args)
    result = cursor.fetchone() if one else cursor.fetchall()
    conn.commit()
    conn.close()
    return result

# Route đăng nhập
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Kiểm tra thông tin đăng nhập trong database
    user = query_db('SELECT * FROM users WHERE email = ? AND password = ?', (email, password), one=True)

    if user:
        return jsonify({"message": "Login successful!"}), 200
    else:
        return jsonify({"message": "Invalid email or password!"}), 401

# Route đăng ký người dùng mới
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    # Kiểm tra nếu email đã tồn tại trong database
    existing_user = query_db('SELECT * FROM users WHERE email = ?', (email,), one=True)
    if existing_user:
        return jsonify({"message": "Email already exists!"}), 400

    # Thêm người dùng mới vào database
    try:
        query_db('INSERT INTO users (email, password) VALUES (?, ?)', (email, password))
        return jsonify({"message": "Registration successful!"}), 201
    except sqlite3.IntegrityError:
        return jsonify({"message": "Email already exists!"}), 400

if __name__ == '__main__':
    init_db()  # Khởi tạo database khi ứng dụng bắt đầu
    app.run(debug=True)
