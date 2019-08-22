# Manual Installation
 ```sh
$ git clone https://github.com/kmchen/yilu.git
$ cd yilu
$ npm install // Application automatically opens at http://localhost:9000
$ npm start
```

# Docker
 ```sh
$ git clone https://github.com/kmchen/yilu.git
$ cd yilu
$ docker build -t <your_name>/yilu-app .
$ docker run -p 9000:9000 -d <your_name>/yilu-app
$ Visit http://127.0.0.1:9000
```

# Test
 ```sh
$ npm test
```
