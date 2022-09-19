# PruebaFrontend

## Deploy en AWS: https://main.d3oi34452ravjk.amplifyapp.com/  

#### Back-end empleado para la funcionalidad del login y resolver JWT:  
#### https://github.com/joelromero2911/prueba-backend  
  
Usuarios predeterminados para iniciar sesión:  
 · Username: joel | Password: 1234  
 · Username: jose | Password: 1234  
  
También puedes registrarte desde la aplicación desplegada en AWS.  
  
Endpoints utilizados:  
[POST] https://prueba-backend-bcts.herokuapp.com/login  
  -RequestedBody:  
    { "username":"joel", "password":"1234" }  
[POST] https://prueba-backend-bcts.herokuapp.com/register  
  -RequestedBody:  
    {
        "id": 1,
        "name": "Joel",
        "surname": "romero",
        "username": "joel",
        "password": "1234",
        "enabled": true,
        "roles": [
            {
                "id": 1,
                "name": "ADMIN"
            }
        ]
    }  
  
#### Api empleada para sacar la información:  
#### https://developers.themoviedb.org/3/getting-started/introduction  
  
Endpoints utilizados:  
- Movies  
[GET] https://api.themoviedb.org/3/movie/popular  
[GET] https://api.themoviedb.org/3/movie/{id}  
- Series  
[GET] https://api.themoviedb.org/3/tv/popular  
[GET] https://api.themoviedb.org/3/tv/{id}  
  
No puedes acceder a ninguna vista si no te has logueado. Una vez logueado, puedes acceder a la lista de peliculas y series, te mostrará una serie de detalles, puedes ver mas información de éstas si clicas el botón de 'Ver detalles'.
