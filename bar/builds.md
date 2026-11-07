---
aside: false
---

<script setup>
 const cocktailBuilds = [{
    name: "crudelia",
    ingredients: [{
        name: "hoja santa bitters",
        amount: 3,
        unit: " dash",
        recipeLink: "/bar/recipes#hoja-santa-bitters"
    }, {
        name: "crudelia batch",
        amount: 3,
        recipeLink: "/bar/batches#crudelia"
    }, ],
    method: "stir",
    glass: "rocks",
    garnish: "plantain chip",
}, {
    name: "hapa-nese",
    ingredients: [{
        name: "toki suntory",
        amount: 1.5
    }, {
        name: "avocado leaf soda",
        amount: 5,
        recipeLink: "/bar/recipes#avocado-leaf-soda",
    }, ],
    method: "build in glass",
    glass: "collins",
    garnish: "lemon peel"
}, {
    name: "malverde",
    ingredients: [{
        name: "lime juice",
        amount: .25,
    }, {
        name: "acid granny juice",
        amount: 1,
        recipeLink: "/bar/recipes#acid-granny"
    }, {
        name: "cilantro syrup",
        amount: .5,
        recipeLink: "/bar/recipes#cilantro-syrup",
    }, {
        name: "mavlerde batch",
        amount: 3,
        recipeLink: "/bar/batches#malverde",
    }, ],
    method: "shake",
    glass: "rocks",
    garnish: "apple slice",
}, {
    name: "monarca daiquiri",
    ingredients: [{
        name: "lime juice",
        amount: .75,
    }, {
        name: "cantaloupe syrup",
        amount: .75,
    recipeLink: "/bar/recipes#cantaloupe-syrup",
    }, {
        name: "monarca batch",
        amount: 2,
    recipeLink: "/bar/batches#monarca",
    }, ],
    method: "shake",
    glass: "nick & nora",
    garnish: "basil oil",
  recipeLink: "/bar/recipes#basil-oil",
}, {
    name: "neon del norte",
    ingredients: [{
        name: "neon del norte batch",
        amount: 6.5,
    recipeLink: "/bar/batches#neon-del-norte",
    }, ],
    method: "build in glass",
    glass: "rocks",
    garnish: "tajin and dry lime"
}, {
    name: "pachuco",
    ingredients: [{
        name: "lime juice",
        amount: .25,
    }, {
        name: "grapefruit juice",
        amount: 1.5,
    }, {
        name: "salted gentian syrup",
        amount: .5,
    recipeLink: "/bar/recipes#salted-gentian-syrup",
    }, {
        name: "pachuco batch",
        amount: 2,
    recipeLink: "/bar/batches#pachuco",
    }, ],
    method: "shake",
    glass: "collin",
    garnish: "grapefruit peel"
}, {
    name: "san patricio",
    ingredients: [{
        name: "san patricio batch",
        amount: 4.5,
    recipeLink: "/bar/batches#san-patricio",
    }, ],
    method: "build in glass",
    glass: "rocks",
    garnish: "orange peel"
},{
  name: "mandonada michelada",
  ingredients: [{
    name: "mandonada michelada mix",
    amount: 3,
    recipeLink: "/bar/batches#mandonada-michelada-mix",
 }, {
   name: "lime juice",
   amount: .5,
 }, { name: "modelito", amount: 7
  }
   ],
   method: "build in glass",
   glass: "pint",
    garnish: "chamoy straw",
},{
  name: "classico michelada",
  ingredients: [{
    name: "classico michelada mix",
    amount: 3,
    recipeLink: "/bar/batches#classico-michelada-mix",
 }, { name: "lime juice", amount: .5
 }, { name: "modelito", amount: 7
   }],
   method: "build in glass",
   glass: "pint",
    garnish: "tajin rim & lime wedge",
 }, {
  name: "santa furia",
  ingredients: [
  {
   name: "santa furia batch",
   amount: 7,
   recipeLink: "/bar/batches#santa-furia",
  },
  ],
  method: "build in glass",
  glass: "collins",
  garnish: "lime salt rim & hoja santa disk",
 }, {
  name: "aguacatona",
  ingredients: [
  {
   name: "cilantro syrup",
   amount: .5,
   recipeLink: "/bar/recipes#cilantro-syrup",
  },
  {
   name: "lime juice",
   amount: .5,
  },
  {
   name: "club soda",
   amount: 7,
  },
  ],
  method: "build in glass",
  glass: "collins",
  garnish: "lemon peel",
 }, {
  name: "brace up",
  ingredients: [
  {
   name: "pentire seaward",
   amount: 1.5,
  },
  {
   name: "grapefruit juice",
   amount: 2,
  },
  {
   name: "habanero tincture",
   amount: 2,
  unite: "dash",
    recipeLink: "/bar/recipes#habanero-tincture",
  },
  {
   name: "salted gentian syrup",
   amount: .5,
    recipeLink: "/bar/recipes#salted-gentian-syrup",
  },
  ],
  method: "shake",
  glass: "nick & nora",
  garnish: "lemon peel",
 }, {
  name: "mangonada suero",
  ingredients: [
  {
   name: "mangoada michelada mix",
   amount: 2,
   recipeLink: "/bar/recipes#mangonada-michelada-mix",
  },
  {
   name: "lime juice",
   amount: .5,
  },
  {
   name: "club soda",
   amount: 7,
  },
  ],
  method: "build in glass",
  glass: "collins",
  garnish: "lime wedge",
 }, {
  name: "totally wired",
  ingredients: [
  {
   name: "guinness syrup",
   amount: .75,
   recipeLink: "/bar/recipes#guinness-syrup",
  },
  {
   name: "coldbrew concentrate",
   amount: 2,
  },
  {
   name: "hep & root amaro",
   amount: 1.5,
  },
  ],
  method: "shake",
  glass: "nick & nora",
  garnish: "orange peel",
 }
];

const ingredientNameReducer = (acc, { name, recipeLink }) => recipeLink
  ? `${acc}<a href=${recipeLink}>${name}</a><br>`
  : `${acc}${name}<br>`;
const ingredientAmountReducer = (acc, { amount, unit = " oz" }) => `${acc}${amount}${unit}<br>`;
</script>

# cocktail builds

<table class="avoid-break">
  <thead>
    <tr>
      <th style="text-align:left;">name</th>
      <th style="text-align:left;">ingredients</th>
      <th style="text-align:left;">amounts</th>
      <th style="text-align:right;">method</th>
      <th style="text-align:right;">glass</th>
      <th style="text-align:right;">garnish</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="build of cocktailBuilds">
      <td style="text-align:left;">{{ build.name }}</td>
      <td style="text-align:left;" v-html="build.ingredients.reduce(ingredientNameReducer, '')"/>
      <td style="text-align:right; white-space:nowrap;" v-html="build.ingredients.reduce(ingredientAmountReducer, '')"/>
      <td style="text-align:left;">{{ build.method }}</td>
      <td style="text-align:left;">{{ build.glass }}</td>
      <td style="text-align:right;">{{ build.garnish }}</td>
    </tr>
  </tbody>
</table>
