# AgriSense 🌾🚀

AgriSense is an **IoT-based smart agriculture system** that helps farmers monitor and optimize farming conditions using real-time sensor data and machine learning. It provides insights into **soil moisture, temperature, humidity, and crop health**, enabling efficient decision-making to enhance productivity.

AgriSense is an **IoT-based smart agriculture system** that collects real-time environmental data and helps farmers make informed decisions. It provides insights into soil conditions and **predicts the best crop** to grow based on various environmental factors.

## Features 🔥
- 📡 **Real-time Sensor Data**: Real-time monitoring of temperature, humidity, soil moisture, N, P, K levels, pH, and rainfall.
- 🤖 **Machine Learning Predictions**: Crop recommendation based on soil and weather conditions.
- 📊 **Data Visualization**: Displays sensor readings in an intuitive dashboard.
- 🌱 **Automated Irrigation**: Controls water supply based on soil moisture levels and also detects the water level to prevent flood.
- 📍 **Remote Monitoring**: Farmers can access data from anywhere.
- 🔔 **Alerts & Notifications**: Sends alerts for extreme weather conditions or disease detection.

## Crop Prediction Model
AgriSense uses a **RandomForestClassifier** to recommend the most suitable crop for a given soil condition. The prediction is based on:
- **Temperature**
- **Humidity**
- **Nitrogen (N)**
- **Phosphorus (P)**
- **Potassium (K)**
- **pH Level**
- **Rainfall**

## Tech Stack 🛠️
- **Backend**: FastAPI, Python
- **Frontend**: React.js
- **Database**: SQLite
- **IoT Devices**: ESP32, DHT22, Soil Moisture Sensor, NPK Soil Sensor, Float Sensor, pH Sensor, Solar Panel, Rain Sensor and more
- **Machine Learning**: scikit-learn, numpy, pandas, matplotlib, seaborn (for crop recommandation)

## Installation & Setup ⚙️
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/avik-halder/AgriSense.git
cd AgriSense
```

### 2️⃣ Backend Setup
```bash
cd backend
pip install -r requirements.txt
fastapi dev main.py
```

### 3️⃣ Frontend Setup
```bash
cd Frontend
cd frontend-cloud-server
npm install
npm run dev
```

### 4️⃣ Deploy on ESP32 (If using IoT sensors)
- Flash the ESP32 with `MicroPython`
- Upload the sensor script to the device
- Connect it to the cloud API

## API Endpoints 🖥️
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/sensor-data/` | POST | Send sensor data |
| `/data/all` | GET | Retrieve all sensor data |
| `/predict/` | POST | Predict crop health based on sensor input |

## Contributing 🤝
Feel free to contribute by submitting **issues, pull requests, or feature suggestions**!

## License 📜
This project is licensed under the **MIT License**.

## Contact 📧
- **Developer**: Avik Halder  
- **GitHub**: [avik-halder](https://github.com/avik-halder)  
- **LinkedIn**: [Avik Halder](https://www.linkedin.com/in/avik-halder/)  

---
Made with ❤️ for Smart Farming! 🚜🌿