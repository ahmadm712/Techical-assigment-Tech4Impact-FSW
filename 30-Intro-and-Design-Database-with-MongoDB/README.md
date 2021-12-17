## Intro and Design Database with MongoDB

1. Relasi _Skiljek_ dan Schema.
   Relasi: One-to-one

   Schema:

```json
{
  "_id": "ObjectId('124324ARADF')",
  "fullname": "Ahmmad",
  "email": "ahmad@mail.com",
  "phone": 0844445555111
}
```

2. Relasi _SkilShop_ dan Schema.

   Relasi : One-to-few

   Schema:

```json
{
  "_id": "ObjectId('12314ASDAD')",
  "fullname": "Jasuk",
  "phone": 0845646545,
  "address": [
    {
      "_id": "ObjectId('12314ASDAD')",
      "street_1": "Jl Merauke 2",
      "street_2": "Jl Blalala 3"
    },
    {
      "_id": "ObjectId('qw65e44qd564a')",
      "street": "Jl jojo2",
      "street": "Jl Loremsad 2"
    }
  ]
}
```

3. Relasi _SkilShop_ dan Schema

   Relasi: One-to-many

   Schema:

```json
{
  "_id": "ObjectId('8a90ds8a098d')",
  "product_name": "Kaos Polos",
  "brand": "SkilShirt",
  "varian": [
    {
      "_id": "ObjectId('678asd67as6d')",
      "varian_name": "Kaos Polos Hitam",
      "color": "Hitam",
      "qty": 12,
      "price": "Rp 99.000"
    },
    {
      "_id": "ObjectId('as789das8d89')",
      "varian_name": "Kaos Polos Navy",
      "color": "Navy",
      "qty": 10,
      "price": "Rp 99.000"
    }
  ]
}
```

4. Relasi _SkilFlix_ dan Schema

   Relasi: Many-to-many

   Schema:

   Cinema:

```json
[
{
    "_id": "ObjectId('Cinema623178')",
    "cinema_name": "XXI",
    "location": "Grage City Mall",
    "film": [{
        "_id": "ObjectId('6as8d7as7d')",
        "title": "Captain Amerika The Winter Soldier"
    },{
        "_id": "ObjectId('7a89d7asd')",
        "title": "Avenger End Game"


    },

    {
           "_id": "ObjectId('Cinema123131')",
    "cinema_name": "CGV",
    "location": "Asia Plaza",
    "film": [{
        "_id": "ObjectId('6as8d7as7d')",
        "title": "Godzila"
    },{
        "_id": "ObjectId('7a89d7asd')",
        "title": "Lions King"
    }]
    }
    ]

```
