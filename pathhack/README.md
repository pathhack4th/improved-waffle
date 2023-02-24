가상환경 만들기

* `python -m venv venv`

가상환경 활성화

- `source venv/Scripts/activate`

requirements.txt 를 이용하여 패키지를 설치

* `pip install -r requirements.txt`

서버 시작

- `python manage.py runserver`

api 경로

- `http://localhost:8000/api/v1/perfumes/...`

{



"m2":0,

  "m3":0,

  "m4":0,

  "m5":1

}

### API

- 테스트용

| 메서드                                           | body                                   | response    |
| ------------------------------------------------ | -------------------------------------- | ----------- |
| POST`http://localhost:8000/api/v1/perfumes/make` | "m1":0, "m2":0, "m3":0, "m4":0, "m5":1 | [0,0,0,0,1] |
|                                                  |                                        |             |
|                                                  |                                        |             |

