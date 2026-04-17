# **PARTE 1:**

### ***¿Cómo dedujeron la estructura de las URLs?***
La documentación es bastante clara.
Por ejemplo con esta url: ```https://pokeapi.co/api/v2/pokemon/pikachu/```, la primera parte se refiere a la ruta; la v2 es la versión de la api; y después “pokemon” es un grupo de objetos de la api, y cuando especificas con el id o el nombre (ej: pikachu) seleccionas un elemento y su información.

### ***¿Qué devuelve cada endpoint?***
El nombre o el id, que son los dos endpoints que usa esta api, devuelven toda la información específica de ese elemento.

### ***¿Qué ocurre ante un error?***
En postman, aparece “Bad request” (error 400).



# **PARTE 2:**

### ***Endpoints utilizados:***
```https://pokeapi.co/api/v2/pokemon/{nombre}```: Utilizado para obtener los datos básicos, tipos e imágenes del Pokémon buscado.

### ***Estructura del proyecto:***
```text
├── index.html # Estructura de la página
├── style.css # Estilos de la interfaz
└── index.js # Consumo de API y lógica del DOM
```

### ***Decisiones tomadas:***
Usamos async en el método “fetchPokemon”, que va a buscar la información del pokémon elegido a la API para que la experiencia del usuario sea más fluida (y algo más pero no sé). Por eso, también agregamos un loader acorde a la temática y mensajes claros ante errores. El diseño es básico y simple, pero aún así sigue la temática y muestra la información de forma ordenada. Al darnos cuenta que los pokémon podían tener más de un tipo, decidimos recibir esa información como una lista, para evitar errores.

### ***Dificultades encontradas:***
Al principio fue difícil encontrar la URL de la imagen dentro del objeto tan grande que devuelve la PokéAPI (tuvimos que revisar todas las carpetas hasta que encontramos ```sprites.other['official-artwork'].front_default```).
