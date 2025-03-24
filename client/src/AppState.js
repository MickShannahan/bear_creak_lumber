import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})


export const TestState = reactive({
  navigation: [
    {
      name: 'Products',
      icon: 'package-variant-closed',
      route: '/products'
    },
    {
      name: 'Orders',
      icon: 'package-down',
      route: '/orders'
    },
    {
      name: 'Customers',
      icon: 'account',
      route: '/customers'
    },
    {
      name: 'Users',
      icon: 'badge-account',
      route: '/users'
    }
  ],

  products: [
    {
      "common_locations": [
        "Hyrule Ridge",
        "Necluda Sea"
      ],
      "dlc": false,
      "id": 226,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_boko_club/image",
      "name": "dragonbone boko club",
      "attack": 24,
      "defense": 0,
      "price": 377.3227826271177
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 207,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/traveler's_sword/image",
      "name": "traveler's sword",
      "attack": 5,
      "defense": 0,
      "price": 788.0639470434645
    },
    {
      "common_locations": [
        "West Necluda",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 205,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boomerang/image",
      "name": "boomerang",
      "attack": 8,
      "defense": 0,
      "price": 573.7247746315151
    },
    {
      "common_locations": [
        "East Necluda",
        "Necluda Sea"
      ],
      "dlc": false,
      "id": 249,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boat_oar/image",
      "name": "boat oar",
      "attack": 14,
      "defense": 0,
      "price": 86.48899815516442
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 232,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_sword++/image",
      "name": "guardian sword++",
      "attack": 40,
      "defense": 0,
      "price": 109.12723796358858
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 237,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/meteor_rod/image",
      "name": "meteor rod",
      "attack": 10,
      "defense": 0,
      "price": 524.4090016718297
    },
    {
      "common_locations": [
        "West Necluda",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 263,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/eightfold_longblade/image",
      "name": "eightfold longblade",
      "attack": 32,
      "defense": 0,
      "price": 666.9562121051238
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 215,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moonlight_scimitar/image",
      "name": "moonlight scimitar",
      "attack": 25,
      "defense": 0,
      "price": 868.330114886653
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 255,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soldier's_claymore/image",
      "name": "soldier's claymore",
      "attack": 20,
      "defense": 0,
      "price": 348.3147834710365
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Hyrule Field"
      ],
      "dlc": true,
      "id": 260,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_smasher/image",
      "name": "stone smasher",
      "attack": 42,
      "defense": 0,
      "price": 686.3559674612552
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 254,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/traveler's_claymore/image",
      "name": "traveler's claymore",
      "attack": 10,
      "defense": 0,
      "price": 81.29440356038242
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 257,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_claymore/image",
      "name": "royal claymore",
      "attack": 52,
      "defense": 0,
      "price": 163.79923493571647
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Eldin Mountains"
      ],
      "dlc": false,
      "id": 259,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/cobble_crusher/image",
      "name": "cobble crusher",
      "attack": 15,
      "defense": 0,
      "price": 299.2160849834746
    },
    {
      "common_locations": [
        "West Necluda",
        "Lake Hylia"
      ],
      "dlc": false,
      "id": 217,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/eightfold_blade/image",
      "name": "eightfold blade",
      "attack": 15,
      "defense": 0,
      "price": 23.04451194117729
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Akkala Highlands"
      ],
      "dlc": true,
      "id": 229,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_tri-boomerang/image",
      "name": "lizal tri-boomerang",
      "attack": 36,
      "defense": 0,
      "price": 885.8633841019225
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "dlc": false,
      "id": 246,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizalfos_arm/image",
      "name": "lizalfos arm",
      "attack": 12,
      "defense": 0,
      "price": 96.74966330415025
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 252,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/iron_sledgehammer/image",
      "name": "iron sledgehammer",
      "attack": 12,
      "defense": 0,
      "price": 592.3280034364171
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 222,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/frostblade/image",
      "name": "frostblade",
      "attack": 20,
      "defense": 0,
      "price": 175.26765340934912
    },
    {
      "common_locations": [
        "East Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 248,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/farming_hoe/image",
      "name": "farming hoe",
      "attack": 16,
      "defense": 0,
      "price": 717.8168356151402
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 220,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_guard's_sword/image",
      "name": "royal guard's sword",
      "attack": 48,
      "defense": 0,
      "price": 208.67832678632413
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 204,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soup_ladle/image",
      "name": "soup ladle",
      "attack": 4,
      "defense": 0,
      "price": 869.0299227925395
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 203,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/torch/image",
      "name": "torch",
      "attack": 2,
      "defense": 0,
      "price": 775.89978915492
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 225,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_boko_club/image",
      "name": "spiked boko club",
      "attack": 12,
      "defense": 0,
      "price": 13.490332141305794
    },
    {
      "common_locations": [
        "West Necluda",
        "Hyrule Ridge"
      ],
      "dlc": false,
      "id": 240,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lightning_rod/image",
      "name": "lightning rod",
      "attack": 5,
      "defense": 0,
      "price": 686.528612898544
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Lanayru Wetlands"
      ],
      "dlc": false,
      "id": 258,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_longsword/image",
      "name": "silver longsword",
      "attack": 22,
      "defense": 0,
      "price": 704.9285288706573
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 233,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel_sword/image",
      "name": "lynel sword",
      "attack": 24,
      "defense": 0,
      "price": 723.4298747586814
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hyrule Ridge"
      ],
      "dlc": false,
      "id": 241,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/thunderstorm_rod/image",
      "name": "thunderstorm rod",
      "attack": 10,
      "defense": 0,
      "price": 686.5366261997303
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hyrule Field"
      ],
      "dlc": true,
      "id": 213,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/feathered_edge/image",
      "name": "feathered edge",
      "attack": 15,
      "defense": 0,
      "price": 274.2144245431741
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 218,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_short_sword/image",
      "name": "ancient short sword",
      "attack": 40,
      "defense": 0,
      "price": 898.6592367233119
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 231,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_sword+/image",
      "name": "guardian sword+",
      "attack": 30,
      "defense": 0,
      "price": 129.66162015382275
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "dlc": false,
      "id": 245,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/bokoblin_arm/image",
      "name": "bokoblin arm",
      "attack": 5,
      "defense": 0,
      "price": 583.9157487587994
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 256,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/knight's_claymore/image",
      "name": "knight's claymore",
      "attack": 38,
      "defense": 0,
      "price": 421.7469542013539
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Ridge"
      ],
      "dlc": false,
      "id": 262,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/golden_claymore/image",
      "name": "golden claymore",
      "attack": 28,
      "defense": 0,
      "price": 604.7847738360057
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 264,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/edge_of_duality/image",
      "name": "edge of duality",
      "attack": 50,
      "defense": 0,
      "price": 960.6906197934519
    },
    {
      "common_locations": null,
      "dlc": true,
      "id": 206,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spring-loaded_hammer/image",
      "name": "spring-loaded hammer",
      "attack": 1,
      "defense": 0,
      "price": 104.52645551225382
    },
    {
      "common_locations": [
        "Gerudo Town"
      ],
      "dlc": true,
      "id": 216,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/scimitar_of_the_seven/image",
      "name": "scimitar of the seven",
      "attack": 32,
      "defense": 0,
      "price": 858.893061431339
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 230,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_sword/image",
      "name": "guardian sword",
      "attack": 20,
      "defense": 0,
      "price": 550.2123003689314
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 244,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/one-hit_obliterator/image",
      "name": "one-hit obliterator",
      "attack": 1000000000,
      "defense": 0,
      "price": 806.9992781046726
    },
    {
      "common_locations": [
        "West Necluda",
        "Gerudo Highlands"
      ],
      "dlc": false,
      "id": 251,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/double_axe/image",
      "name": "double axe",
      "attack": 18,
      "defense": 0,
      "price": 873.3671446569496
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 219,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rusty_broadsword/image",
      "name": "rusty broadsword",
      "attack": 6,
      "defense": 0,
      "price": 717.0081914203901
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 202,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/tree_branch/image",
      "name": "tree branch",
      "attack": 2,
      "defense": 0,
      "price": 83.48041646224158
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 201,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/master_sword/image",
      "name": "master sword",
      "attack": 30,
      "defense": 0,
      "price": 500.46707820351764
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Tabantha Frontier"
      ],
      "dlc": true,
      "id": 228,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_forked_boomerang/image",
      "name": "lizal forked boomerang",
      "attack": 24,
      "defense": 0,
      "price": 718.1962889655471
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "dlc": true,
      "id": 221,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/flameblade/image",
      "name": "flameblade",
      "attack": 24,
      "defense": 0,
      "price": 243.19076981363597
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 242,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/vicious_sickle/image",
      "name": "vicious sickle",
      "attack": 16,
      "defense": 0,
      "price": 529.0530989481434
    },
    {
      "common_locations": [
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 261,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boulder_breaker/image",
      "name": "boulder breaker",
      "attack": 60,
      "defense": 0,
      "price": 813.5520710882842
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 224,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boko_club/image",
      "name": "boko club",
      "attack": 4,
      "defense": 0,
      "price": 580.5362182051886
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 209,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/knight's_broadsword/image",
      "name": "knight's broadsword",
      "attack": 26,
      "defense": 0,
      "price": 427.7668191806845
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 211,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_sword/image",
      "name": "forest dweller's sword",
      "attack": 22,
      "defense": 0,
      "price": 616.3121931512843
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 234,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_lynel_sword/image",
      "name": "mighty lynel sword",
      "attack": 36,
      "defense": 0,
      "price": 195.00014264392783
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 208,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soldier's_broadsword/image",
      "name": "soldier's broadsword",
      "attack": 14,
      "defense": 0,
      "price": 199.73476186830231
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Gerudo Desert"
      ],
      "dlc": true,
      "id": 214,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/gerudo_scimitar/image",
      "name": "gerudo scimitar",
      "attack": 16,
      "defense": 0,
      "price": 837.1319568324258
    },
    {
      "common_locations": [
        "West Necluda",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 253,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/giant_boomerang/image",
      "name": "giant boomerang",
      "attack": 25,
      "defense": 0,
      "price": 197.60678334887217
    },
    {
      "common_locations": null,
      "dlc": true,
      "id": 243,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/demon_carver/image",
      "name": "demon carver",
      "attack": 40,
      "defense": 0,
      "price": 264.5732943846977
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 247,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/korok_leaf/image",
      "name": "korok leaf",
      "attack": 1,
      "defense": 0,
      "price": 824.3490020503907
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 210,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_broadsword/image",
      "name": "royal broadsword",
      "attack": 36,
      "defense": 0,
      "price": 773.9962742622082
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 235,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/savage_lynel_sword/image",
      "name": "savage lynel sword",
      "attack": 58,
      "defense": 0,
      "price": 437.54439297292083
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 223,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/thunderblade/image",
      "name": "thunderblade",
      "attack": 22,
      "defense": 0,
      "price": 144.60868534523485
    },
    {
      "common_locations": [
        "Lake Hylia",
        "Lanayru Wetlands"
      ],
      "dlc": false,
      "id": 227,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_boomerang/image",
      "name": "lizal boomerang",
      "attack": 14,
      "defense": 0,
      "price": 903.2078619337653
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 236,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire_rod/image",
      "name": "fire rod",
      "attack": 10,
      "defense": 0,
      "price": 888.222709937076
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 239,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blizzard_rod/image",
      "name": "blizzard rod",
      "attack": 10,
      "defense": 0,
      "price": 419.6261685404885
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "East Necluda"
      ],
      "dlc": true,
      "id": 212,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/zora_sword/image",
      "name": "zora sword",
      "attack": 15,
      "defense": 0,
      "price": 397.2144041356198
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 238,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice_rod/image",
      "name": "ice rod",
      "attack": 5,
      "defense": 0,
      "price": 665.315347056699
    },
    {
      "common_locations": [
        "West Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 250,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/woodcutter's_axe/image",
      "name": "woodcutter's axe",
      "attack": 3,
      "defense": 0,
      "price": 168.91776247139867
    },
    {
      "common_locations": [
        "East Necluda",
        "Lake Hylia"
      ],
      "dlc": false,
      "id": 287,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fishing_harpoon/image",
      "name": "fishing harpoon",
      "attack": 8,
      "defense": 0,
      "price": 221.88835666915276
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 265,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_bladesaw/image",
      "name": "ancient bladesaw",
      "attack": 55,
      "defense": 0,
      "price": 418.49826492252885
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 268,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_flameblade/image",
      "name": "great flameblade",
      "attack": 34,
      "defense": 0,
      "price": 713.379489867741
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Tabantha Frontier"
      ],
      "dlc": true,
      "id": 270,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_thunderblade/image",
      "name": "great thunderblade",
      "attack": 32,
      "defense": 0,
      "price": 889.2537644805327
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 267,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_guard's_claymore/image",
      "name": "royal guard's claymore",
      "attack": 72,
      "defense": 0,
      "price": 612.343762893137
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 309,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_boko_spear/image",
      "name": "spiked boko spear",
      "attack": 6,
      "defense": 0,
      "price": 917.4712401508551
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "West Necluda"
      ],
      "dlc": false,
      "id": 283,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/windcleaver/image",
      "name": "windcleaver",
      "attack": 40,
      "defense": 0,
      "price": 568.2892684830439
    },
    {
      "common_locations": [
        "West Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 288,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/throwing_spear/image",
      "name": "throwing spear",
      "attack": 6,
      "defense": 0,
      "price": 469.2128914073881
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 326,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soldier's_bow/image",
      "name": "soldier's bow",
      "attack": 14,
      "defense": 0,
      "price": 201.14956521829308
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Hyrule Ridge"
      ],
      "dlc": false,
      "id": 293,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_spear/image",
      "name": "forest dweller's spear",
      "attack": 11,
      "defense": 0,
      "price": 786.0801826981786
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Gerudo Highlands"
      ],
      "dlc": true,
      "id": 300,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/gerudo_spear/image",
      "name": "gerudo spear",
      "attack": 16,
      "defense": 0,
      "price": 411.5941017448854
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Eldin Mountains"
      ],
      "dlc": false,
      "id": 313,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_moblin_spear/image",
      "name": "dragonbone moblin spear",
      "attack": 15,
      "defense": 0,
      "price": 894.5554817972869
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Eldin Mountains"
      ],
      "dlc": false,
      "id": 276,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_moblin_club/image",
      "name": "dragonbone moblin club",
      "attack": 45,
      "defense": 0,
      "price": 453.10628396906515
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 312,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_moblin_spear/image",
      "name": "spiked moblin spear",
      "attack": 9,
      "defense": 0,
      "price": 498.62073797433305
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 325,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/traveler's_bow/image",
      "name": "traveler's bow",
      "attack": 5,
      "defense": 0,
      "price": 532.3868412849113
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Faron Grasslands"
      ],
      "dlc": true,
      "id": 274,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin_club/image",
      "name": "moblin club",
      "attack": 9,
      "defense": 0,
      "price": 935.7400054064528
    },
    {
      "common_locations": [
        "Akkala Highlands",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 278,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_battle_axe+/image",
      "name": "ancient battle axe+",
      "attack": 45,
      "defense": 0,
      "price": 506.6132426572747
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 280,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel_crusher/image",
      "name": "lynel crusher",
      "attack": 36,
      "defense": 0,
      "price": 175.99967271172721
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 281,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_lynel_crusher/image",
      "name": "mighty lynel crusher",
      "attack": 54,
      "defense": 0,
      "price": 315.1737433224246
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Lake Hylia"
      ],
      "dlc": true,
      "id": 294,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/zora_spear/image",
      "name": "zora spear",
      "attack": 9,
      "defense": 0,
      "price": 214.79693584428472
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Hebra Mountains"
      ],
      "dlc": true,
      "id": 298,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/drillshaft/image",
      "name": "drillshaft",
      "attack": 14,
      "defense": 0,
      "price": 84.40845635810956
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 322,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/savage_lynel_spear/image",
      "name": "savage lynel spear",
      "attack": 30,
      "defense": 0,
      "price": 330.3133807646586
    },
    {
      "common_locations": [
        "East Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 285,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wooden_mop/image",
      "name": "wooden mop",
      "attack": 5,
      "defense": 0,
      "price": 510.6044726607668
    },
    {
      "common_locations": [
        "Akkala Highlands",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 295,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silverscale_spear/image",
      "name": "silverscale spear",
      "attack": 12,
      "defense": 0,
      "price": 877.5074736289257
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 318,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_spear+/image",
      "name": "guardian spear+",
      "attack": 15,
      "defense": 0,
      "price": 744.5634438357258
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 319,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_spear++/image",
      "name": "guardian spear++",
      "attack": 20,
      "defense": 0,
      "price": 341.5834947041598
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 327,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/knight's_bow/image",
      "name": "knight's bow",
      "attack": 26,
      "defense": 0,
      "price": 566.8213930674832
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "West Necluda"
      ],
      "dlc": true,
      "id": 320,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel_spear/image",
      "name": "lynel spear",
      "attack": 14,
      "defense": 0,
      "price": 641.7152146716573
    },
    {
      "common_locations": [
        "East Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 301,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/serpentine_spear/image",
      "name": "serpentine spear",
      "attack": 12,
      "defense": 0,
      "price": 339.1350971320608
    },
    {
      "common_locations": [
        "Lanayru Wetlands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 314,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_spear/image",
      "name": "lizal spear",
      "attack": 7,
      "defense": 0,
      "price": 653.1153124016522
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 324,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wooden_bow/image",
      "name": "wooden bow",
      "attack": 4,
      "defense": 0,
      "price": 896.4480257690794
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Hyrule Field"
      ],
      "dlc": true,
      "id": 269,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_frostblade/image",
      "name": "great frostblade",
      "attack": 30,
      "defense": 0,
      "price": 300.17603123173944
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Necluda Sea"
      ],
      "dlc": false,
      "id": 273,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_boko_bat/image",
      "name": "dragonbone boko bat",
      "attack": 36,
      "defense": 0,
      "price": 506.56761603743394
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 277,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_battle_axe/image",
      "name": "ancient battle axe",
      "attack": 30,
      "defense": 0,
      "price": 369.1814634748307
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 272,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_boko_bat/image",
      "name": "spiked boko bat",
      "attack": 18,
      "defense": 0,
      "price": 114.13964726109383
    },
    {
      "common_locations": [
        "East Necluda",
        "West Necluda"
      ],
      "dlc": false,
      "id": 286,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/farmer's_pitchfork/image",
      "name": "farmer's pitchfork",
      "attack": 7,
      "defense": 0,
      "price": 608.4674412819082
    },
    {
      "common_locations": [
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 296,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ceremonial_trident/image",
      "name": "ceremonial trident",
      "attack": 14,
      "defense": 0,
      "price": 229.02950475175078
    },
    {
      "common_locations": [
        "Necluda Sea",
        "Hyrule Ridge"
      ],
      "dlc": true,
      "id": 310,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_boko_spear/image",
      "name": "dragonbone boko spear",
      "attack": 12,
      "defense": 0,
      "price": 657.9886717164127
    },
    {
      "common_locations": null,
      "dlc": true,
      "id": 302,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_spear/image",
      "name": "ancient spear",
      "attack": 30,
      "defense": 0,
      "price": 556.25165845882
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 328,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_bow/image",
      "name": "royal bow",
      "attack": 38,
      "defense": 0,
      "price": 822.2263997487212
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 289,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/traveler's_spear/image",
      "name": "traveler's spear",
      "attack": 3,
      "defense": 0,
      "price": 74.4331251295125
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 291,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/knight's_halberd/image",
      "name": "knight's halberd",
      "attack": 13,
      "defense": 0,
      "price": 329.97805859930105
    },
    {
      "common_locations": [
        "Lanayru Great Spring"
      ],
      "dlc": true,
      "id": 297,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lightscale_trident/image",
      "name": "lightscale trident",
      "attack": 22,
      "defense": 0,
      "price": 761.5782644162796
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Great Hyrule Forest"
      ],
      "dlc": false,
      "id": 303,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rusty_halberd/image",
      "name": "rusty halberd",
      "attack": 5,
      "defense": 0,
      "price": 747.5333408540976
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 306,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/frostspear/image",
      "name": "frostspear",
      "attack": 20,
      "defense": 0,
      "price": 277.76637426563735
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 290,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soldier's_spear/image",
      "name": "soldier's spear",
      "attack": 7,
      "defense": 0,
      "price": 20.47085644157609
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 275,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_moblin_club/image",
      "name": "spiked moblin club",
      "attack": 27,
      "defense": 0,
      "price": 581.9330023942881
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Eldin Mountains"
      ],
      "dlc": false,
      "id": 282,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/savage_lynel_crusher/image",
      "name": "savage lynel crusher",
      "attack": 78,
      "defense": 0,
      "price": 281.1667724724829
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 266,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rusty_claymore/image",
      "name": "rusty claymore",
      "attack": 12,
      "defense": 0,
      "price": 587.7805079719926
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": true,
      "id": 271,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boko_bat/image",
      "name": "boko bat",
      "attack": 6,
      "defense": 0,
      "price": 920.4821857394143
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Akkala Highlands"
      ],
      "dlc": true,
      "id": 316,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forked_lizal_spear/image",
      "name": "forked lizal spear",
      "attack": 18,
      "defense": 0,
      "price": 967.539136496123
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": true,
      "id": 305,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/flamespear/image",
      "name": "flamespear",
      "attack": 24,
      "defense": 0,
      "price": 299.79959906582064
    },
    {
      "common_locations": [
        "West Necluda",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 308,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boko_spear/image",
      "name": "boko spear",
      "attack": 2,
      "defense": 0,
      "price": 268.8025235537441
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hyrule Field"
      ],
      "dlc": true,
      "id": 299,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/feathered_spear/image",
      "name": "feathered spear",
      "attack": 10,
      "defense": 0,
      "price": 489.5914146806004
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 304,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_guard's_spear/image",
      "name": "royal guard's spear",
      "attack": 32,
      "defense": 0,
      "price": 223.67978132190402
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 307,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/thunderspear/image",
      "name": "thunderspear",
      "attack": 22,
      "defense": 0,
      "price": 520.4137271198264
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "Gerudo Highlands"
      ],
      "dlc": false,
      "id": 311,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin_spear/image",
      "name": "moblin spear",
      "attack": 4,
      "defense": 0,
      "price": 512.7537544927625
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 315,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/enhanced_lizal_spear/image",
      "name": "enhanced lizal spear",
      "attack": 12,
      "defense": 0,
      "price": 282.7027207917359
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Deep Akkala"
      ],
      "dlc": false,
      "id": 321,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_lynel_spear/image",
      "name": "mighty lynel spear",
      "attack": 20,
      "defense": 0,
      "price": 243.46935250017455
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Gerudo Highlands"
      ],
      "dlc": true,
      "id": 279,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_battle_axe++/image",
      "name": "ancient battle axe++",
      "attack": 60,
      "defense": 0,
      "price": 731.5695049531845
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "dlc": false,
      "id": 284,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin_arm/image",
      "name": "moblin arm",
      "attack": 15,
      "defense": 0,
      "price": 449.96988315933504
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 323,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/bow_of_light/image",
      "name": "bow of light",
      "attack": 100,
      "defense": 0,
      "price": 771.163469681641
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Tabantha Frontier"
      ],
      "dlc": true,
      "id": 292,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_halberd/image",
      "name": "royal halberd",
      "attack": 26,
      "defense": 0,
      "price": 655.546196522627
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 317,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_spear/image",
      "name": "guardian spear",
      "attack": 10,
      "defense": 0,
      "price": 183.53620743269383
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Lake Hylia"
      ],
      "dlc": false,
      "id": 365,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_shield/image",
      "name": "silver shield",
      "attack": 0,
      "defense": 18,
      "price": 123.57295077993501
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 351,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/shock_arrow/image",
      "name": "shock arrow",
      "attack": null,
      "defense": null,
      "price": 459.9162346680599
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 344,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel_bow/image",
      "name": "lynel bow",
      "attack": 10,
      "defense": 0,
      "price": 381.33717118771716
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 374,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boko_shield/image",
      "name": "boko shield",
      "attack": 0,
      "defense": 3,
      "price": 195.93180997411474
    },
    {
      "common_locations": [
        "Lake Hylia",
        "East Necluda"
      ],
      "dlc": false,
      "id": 377,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_shield/image",
      "name": "lizal shield",
      "attack": 0,
      "defense": 15,
      "price": 861.8667791972894
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 383,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel_shield/image",
      "name": "lynel shield",
      "attack": 0,
      "defense": 30,
      "price": 336.4706899326202
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 343,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/steel_lizal_bow/image",
      "name": "steel lizal bow",
      "attack": 36,
      "defense": 0,
      "price": 626.9544558634792
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Gerudo Highlands"
      ],
      "dlc": false,
      "id": 367,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/gerudo_shield/image",
      "name": "gerudo shield",
      "attack": 0,
      "defense": 20,
      "price": 147.86885095264756
    },
    {
      "common_locations": null,
      "dlc": true,
      "id": 336,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_bow/image",
      "name": "ancient bow",
      "attack": 44,
      "defense": 0,
      "price": 1.947703373462728
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hyrule Ridge"
      ],
      "dlc": false,
      "id": 329,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_bow/image",
      "name": "forest dweller's bow",
      "attack": 15,
      "defense": 0,
      "price": 364.4110527512121
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 342,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/strengthened_lizal_bow/image",
      "name": "strengthened lizal bow",
      "attack": 25,
      "defense": 0,
      "price": 876.4277386509323
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 350,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice_arrow/image",
      "name": "ice arrow",
      "attack": null,
      "defense": null,
      "price": 406.8670073750877
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 366,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/kite_shield/image",
      "name": "kite shield",
      "attack": 0,
      "defense": 14,
      "price": 292.0790625213061
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Gerudo Highlands"
      ],
      "dlc": false,
      "id": 368,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/radiant_shield/image",
      "name": "radiant shield",
      "attack": 0,
      "defense": 35,
      "price": 22.94983298228459
    },
    {
      "common_locations": [
        "East Necluda",
        "Faron Grasslands"
      ],
      "dlc": false,
      "id": 381,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_shield+/image",
      "name": "guardian shield+",
      "attack": 0,
      "defense": 30,
      "price": 899.193127210488
    },
    {
      "common_locations": [
        "Tabantha Frontier"
      ],
      "dlc": false,
      "id": 333,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/great_eagle_bow/image",
      "name": "great eagle bow",
      "attack": 28,
      "defense": 0,
      "price": 498.52187759620347
    },
    {
      "common_locations": [
        "East Necluda",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 357,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/emblazoned_shield/image",
      "name": "emblazoned shield",
      "attack": 0,
      "defense": 3,
      "price": 876.6309589919553
    },
    {
      "common_locations": [
        "Great Hyrule Forest"
      ],
      "dlc": true,
      "id": 364,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_dweller's_shield/image",
      "name": "forest dweller's shield",
      "attack": 0,
      "defense": 30,
      "price": 371.86858094227324
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "dlc": true,
      "id": 378,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/reinforced_lizal_shield/image",
      "name": "reinforced lizal shield",
      "attack": 0,
      "defense": 22,
      "price": 443.9250002568209
    },
    {
      "common_locations": [
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 353,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_arrow/image",
      "name": "ancient arrow",
      "attack": null,
      "defense": null,
      "price": 512.3225067223989
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "dlc": false,
      "id": 352,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/bomb_arrow/image",
      "name": "bomb arrow",
      "attack": null,
      "defense": null,
      "price": 449.26601718521385
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 354,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hylian_shield/image",
      "name": "hylian shield",
      "attack": 0,
      "defense": 90,
      "price": 790.290263693394
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Gerudo Desert"
      ],
      "dlc": false,
      "id": 334,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/golden_bow/image",
      "name": "golden bow",
      "attack": 14,
      "defense": 0,
      "price": 966.8865570980887
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 340,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragon_bone_boko_bow/image",
      "name": "dragon bone boko bow",
      "attack": 24,
      "defense": 0,
      "price": 307.528430333426
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "dlc": true,
      "id": 348,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/arrow/image",
      "name": "arrow",
      "attack": null,
      "defense": null,
      "price": 103.54037757143209
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 363,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_shield/image",
      "name": "royal shield",
      "attack": 0,
      "defense": 55,
      "price": 564.9021587577621
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 331,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/swallow_bow/image",
      "name": "swallow bow",
      "attack": 9,
      "defense": 0,
      "price": 909.9135859518066
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 360,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/traveler's_shield/image",
      "name": "traveler's shield",
      "attack": 0,
      "defense": 4,
      "price": 862.3010687634436
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 330,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_bow/image",
      "name": "silver bow",
      "attack": 15,
      "defense": 0,
      "price": 800.7237877245245
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "dlc": false,
      "id": 355,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/pot_lid/image",
      "name": "pot lid",
      "attack": 0,
      "defense": 1,
      "price": 534.6515889343493
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Lanayru Wetlands"
      ],
      "dlc": false,
      "id": 358,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hunter's_shield/image",
      "name": "hunter's shield",
      "attack": 0,
      "defense": 3,
      "price": 467.9786208717371
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 361,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/soldier's_shield/image",
      "name": "soldier's shield",
      "attack": 0,
      "defense": 16,
      "price": 387.2702849180738
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 379,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/steel_lizal_shield/image",
      "name": "steel lizal shield",
      "attack": 0,
      "defense": 35,
      "price": 75.28055071596795
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Deep Akkala"
      ],
      "dlc": false,
      "id": 345,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_lynel_bow/image",
      "name": "mighty lynel bow",
      "attack": 20,
      "defense": 0,
      "price": 587.3103021740234
    },
    {
      "common_locations": [
        "West Necluda",
        "Lake Hylia"
      ],
      "dlc": false,
      "id": 335,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/phrenic_bow/image",
      "name": "phrenic bow",
      "attack": 10,
      "defense": 0,
      "price": 631.6976717986557
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Lanayru Wetlands"
      ],
      "dlc": false,
      "id": 341,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizal_bow/image",
      "name": "lizal bow",
      "attack": 14,
      "defense": 0,
      "price": 693.6718851709949
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Hyrule Field"
      ],
      "dlc": false,
      "id": 346,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/savage_lynel_bow/image",
      "name": "savage lynel bow",
      "attack": 32,
      "defense": 0,
      "price": 217.573541944867
    },
    {
      "common_locations": [
        "Gerudo Highlands"
      ],
      "dlc": false,
      "id": 347,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/duplex_bow/image",
      "name": "duplex bow",
      "attack": 14,
      "defense": 0,
      "price": 336.05716383506467
    },
    {
      "common_locations": [
        "Gerudo Desert"
      ],
      "dlc": true,
      "id": 369,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/daybreaker/image",
      "name": "daybreaker",
      "attack": 0,
      "defense": 48,
      "price": 885.4846372744172
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 375,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_boko_shield/image",
      "name": "spiked boko shield",
      "attack": 10,
      "defense": 0,
      "price": 619.8742585702817
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "dlc": false,
      "id": 372,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rusty_shield/image",
      "name": "rusty shield",
      "attack": 0,
      "defense": 3,
      "price": 618.3768372625644
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 332,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/falcon_bow/image",
      "name": "falcon bow",
      "attack": 20,
      "defense": 0,
      "price": 839.7128386615007
    },
    {
      "common_locations": [
        "Faron Grasslands",
        "East Necluda"
      ],
      "dlc": false,
      "id": 339,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spiked_boko_bow/image",
      "name": "spiked boko bow",
      "attack": 12,
      "defense": 0,
      "price": 584.4741897211045
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "dlc": false,
      "id": 349,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire_arrow/image",
      "name": "fire arrow",
      "attack": null,
      "defense": null,
      "price": 904.1194488000657
    },
    {
      "common_locations": [
        "West Necluda",
        "East Necluda"
      ],
      "dlc": false,
      "id": 370,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/shield_of_the_mind's_eye/image",
      "name": "shield of the mind's eye",
      "attack": 0,
      "defense": 16,
      "price": 819.499449394761
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 371,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ancient_shield/image",
      "name": "ancient shield",
      "attack": 0,
      "defense": 70,
      "price": 273.2310832007805
    },
    {
      "common_locations": [
        "West Necluda",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 380,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_shield/image",
      "name": "guardian shield",
      "attack": 0,
      "defense": 18,
      "price": 804.3119133797567
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Akkala Highlands"
      ],
      "dlc": false,
      "id": 382,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_shield++/image",
      "name": "guardian shield++",
      "attack": 0,
      "defense": 42,
      "price": 272.3086837856665
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Eldin Mountains"
      ],
      "dlc": true,
      "id": 362,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/knight's_shield/image",
      "name": "knight's shield",
      "attack": 0,
      "defense": 40,
      "price": 50.782861801452086
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 385,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/savage_lynel_shield/image",
      "name": "savage lynel shield",
      "attack": 0,
      "defense": 62,
      "price": 367.1364883386081
    },
    {
      "common_locations": null,
      "dlc": false,
      "id": 337,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_guard's_bow/image",
      "name": "royal guard's bow",
      "attack": 50,
      "defense": 0,
      "price": 164.69901559535828
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "dlc": false,
      "id": 356,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wooden_shield/image",
      "name": "wooden shield",
      "attack": 0,
      "defense": 2,
      "price": 797.5523155060265
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "dlc": false,
      "id": 338,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/boko_bow/image",
      "name": "boko bow",
      "attack": 4,
      "defense": 0,
      "price": 10.092603306101955
    },
    {
      "common_locations": null,
      "dlc": true,
      "id": 373,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/royal_guard's_shield/image",
      "name": "royal guard's shield",
      "attack": 0,
      "defense": 70,
      "price": 133.39530519323418
    },
    {
      "common_locations": [
        "East Necluda",
        "Hebra Mountains"
      ],
      "dlc": false,
      "id": 359,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fisherman's_shield/image",
      "name": "fisherman's shield",
      "attack": 0,
      "defense": 3,
      "price": 605.5761257671661
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Necluda Sea"
      ],
      "dlc": false,
      "id": 376,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dragonbone_boko_shield/image",
      "name": "dragonbone boko shield",
      "attack": 0,
      "defense": 25,
      "price": 625.6350395432986
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Lanayru Great Spring"
      ],
      "dlc": false,
      "id": 384,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_lynel_shield/image",
      "name": "mighty lynel shield",
      "attack": 0,
      "defense": 44,
      "price": 429.4162200543661
    }
  ],
  orders: [
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "cooking_effect": "",
      "description": "A common fruit found on trees all around Hyrule. Eat it fresh, or cook it to increase its effect.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 165,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/apple/image",
      "name": "apple"
    },
    {
      "common_locations": [
        "East Necluda",
        "Gerudo Desert"
      ],
      "cooking_effect": "",
      "description": "Fruit from palm trees that grow near the ocean. It doesn't offer any special effects but will increase your heart recovery when used as an ingredient.",
      "dlc": false,
      "hearts_recovered": 1,
      "id": 166,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/palm_fruit/image",
      "name": "palm fruit"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "cooking_effect": "",
      "description": "A fruit that grows in cold, snowy regions known for its tangy, sweet flavor. It doesn't offer any special effects, but it's a popular cooking ingredient.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 167,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/wildberry/image",
      "name": "wildberry"
    },
    {
      "common_locations": [
        "West Necluda",
        "Faron Grasslands"
      ],
      "cooking_effect": "extra hearts",
      "description": "This fruit's mighty odor has earned it the nickname \"king of fruits.\" It offers immense restorative powers; dishes cooked with it will temporarily increase your maximum hearts.",
      "dlc": false,
      "hearts_recovered": 3,
      "id": 168,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hearty_durian/image",
      "name": "hearty durian"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Faron Grasslands"
      ],
      "cooking_effect": "heat resistance",
      "description": "This resilient fruit can flourish even in the heat of the desert. The hydrating liquid inside provides a cooling effect that, when cooked, increases your heat resistance.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 169,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hydromelon/image",
      "name": "hydromelon"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Tabantha Frontier"
      ],
      "cooking_effect": "cold resistance",
      "description": "This pepper is exploding with spice. Cook with it to create dishes that will raise your body temperature and help you withstand the cold.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 170,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/spicy_pepper/image",
      "name": "spicy pepper"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Gerudo Highlands"
      ],
      "cooking_effect": "shock resistance",
      "description": "Cacti found in the Gerudo Desert bear this sweet fruit. It's naturally insulated, so when cooked into a dish, it provides resistance against electricity.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 171,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/voltfruit/image",
      "name": "voltfruit"
    },
    {
      "common_locations": [
        "Lanayru Wetlands",
        "Lanayru Great Spring"
      ],
      "cooking_effect": "speed up",
      "description": "The plant that bears these seeds grows near deep water. The roots draw nutrients from the water, which boosts your movement speed when the seeds are cooked into a dish.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 172,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fleet-lotus_seeds/image",
      "name": "fleet-lotus seeds"
    },
    {
      "common_locations": [
        "Faron"
      ],
      "cooking_effect": "attack up",
      "description": "This fruit grows mainly in tropical forests of the Faron region. When it's used as an ingredient, the resulting dish will temporarily increase your attack power.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 173,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_bananas/image",
      "name": "mighty bananas"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "cooking_effect": "",
      "description": "A common mushroom found near trees around Hyrule. Eat it to restore half a heart.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 174,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hylian_shroom/image",
      "name": "hylian shroom"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Hyrule Field"
      ],
      "cooking_effect": "extra stamina",
      "description": "A rare yellowish-orange mushroom. Cook it before eating to temporarily increase your stamina limit.",
      "dlc": false,
      "hearts_recovered": 1,
      "id": 175,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/endura_shroom/image",
      "name": "endura shroom"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Hyrule Field"
      ],
      "cooking_effect": "stamina recovery",
      "description": "A green mushroom that grows near trees in the forest. It's chock-full of natural energy. Cook it to release its stamina-restoration properties.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 176,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stamella_shroom/image",
      "name": "stamella shroom"
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Hyrule Field"
      ],
      "cooking_effect": "extra hearts",
      "description": "This rare mushroom has a rich scent. Cook it before eating to temporarily increase your maximum hearts.",
      "dlc": false,
      "hearts_recovered": 2,
      "id": 177,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hearty_truffle/image",
      "name": "hearty truffle"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Great Hyrule Forest"
      ],
      "cooking_effect": "extra hearts",
      "description": "Years of going unpicked have allowed this hearty truffle to grow quite large. It's chock- full of nutrients. When cooked into a dish, it temporarily increases your maximum hearts.",
      "dlc": false,
      "hearts_recovered": 3,
      "id": 178,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/big_hearty_truffle/image",
      "name": "big hearty truffle"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Mount Lanayru"
      ],
      "cooking_effect": "heat resistance",
      "description": "Often found at the base of pine trees in cold climates, these mushrooms are cool to the touch and can be used to cook dishes that allow you to stay cool even in arid regions.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 179,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/chillshroom/image",
      "name": "chillshroom"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Gerudo Highlands"
      ],
      "cooking_effect": "cold resistance",
      "description": "A bright red mushroom that grows in hot climates. Imbued with the power of heat, they can be used to cook dishes that will allow you endure the bitter cold.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 180,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/sunshroom/image",
      "name": "sunshroom"
    },
    {
      "common_locations": [
        "Deep Akkala",
        "Gerudo Highlands"
      ],
      "cooking_effect": "shock resistance",
      "description": "This mushroom grows wild in the Gerudo region. The cap is naturally insulated, so when used in cooking, it will offer protection against electricity.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 181,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/zapshroom/image",
      "name": "zapshroom"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Ridge"
      ],
      "cooking_effect": "speed up",
      "description": "A mushroom that can grow almost anywhere but prefers ceilings and sheer cliffs. Cook it before eating to temporarily increase your movement speed.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 182,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rushroom/image",
      "name": "rushroom"
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Tabantha Frontier"
      ],
      "cooking_effect": "attack up",
      "description": "This mushroom is known for the natural slice in its cap. Eating it fosters your competitive spirit. Use it when cooking to prepare a dish that will increase your strength.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 183,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/razorshroom/image",
      "name": "razorshroom"
    },
    {
      "common_locations": [
        "West Necluda",
        "East Necluda"
      ],
      "cooking_effect": "defense up",
      "description": "The cap of this mushroom is very hard. Use it when cooking to prepare a dish that increases you defense.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 184,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ironshroom/image",
      "name": "ironshroom"
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "West Necluda"
      ],
      "cooking_effect": "stealth up",
      "description": "A strange mushroom that glows softly in the forest at night. Cooking it into a dish unlocks the nutrients in its cap, resulting in a meal that will allow you to move stealthily.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 185,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silent_shroom/image",
      "name": "silent shroom"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Akkala Highlands"
      ],
      "cooking_effect": "",
      "description": "This healthy herb grows abundantly in the plains of Hyrule. Cook it before eating to increase the number of hearts it restores.",
      "dlc": false,
      "hearts_recovered": 1,
      "id": 186,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hyrule_herb/image",
      "name": "hyrule herb"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "East Necluda"
      ],
      "cooking_effect": "extra hearts",
      "description": "A rare radish that grows best in sunny plains. Cook it before eating to temporarily increase your maximum hearts.",
      "dlc": false,
      "hearts_recovered": 2.5,
      "id": 187,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hearty_radish/image",
      "name": "hearty radish"
    },
    {
      "common_locations": [
        "Akkala Highlands",
        "Lanayru Great Spring"
      ],
      "cooking_effect": "extra hearts",
      "description": "This hearty radish has grown much larger than the average radish. It's rich in analeptic compounds that, when cooked into a dish, temporarily increase your maximum hearts.",
      "dlc": false,
      "hearts_recovered": 4,
      "id": 188,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/big_hearty_radish/image",
      "name": "big hearty radish"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Gerudo Highlands"
      ],
      "cooking_effect": "heat resistance",
      "description": "This medicinal plant grows in high elevations, such as mountains in the Hebra or Gerudo regions. When cooked into a dish, it will temporarily increase your heat resistance.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 189,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/cool_safflina/image",
      "name": "cool safflina"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Hyrule Ridge"
      ],
      "cooking_effect": "cold resistance",
      "description": "This medicinal plant grows in hot regions, such as the Gerudo Desert. It's warm to the touch and increases your cold resistance when cooked into a dish.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 190,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/warm_safflina/image",
      "name": "warm safflina"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Hyrule Ridge"
      ],
      "cooking_effect": "shock resistance",
      "description": "This medicinal plant grows abundantly in the Gerudo Desert. Its peculiar fibers conduct electricity, which will increase your electricity resistance when cooked into a dish.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 191,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/electric_safflina/image",
      "name": "electric safflina"
    },
    {
      "common_locations": [
        "Kakariko Village"
      ],
      "cooking_effect": "speed up",
      "description": "This carrot is cultivated extensively in Kakariko Village. It strengthens the legs and hips when cooked into a dish, which helps increase your movement speed.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 192,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/swift_carrot/image",
      "name": "swift carrot"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Faron Grasslands"
      ],
      "cooking_effect": "extra stamina",
      "description": "Highly valued as a medicinal plant, this carrot contains large amounts of nourishing energy. When cooked into a dish, it boosts your stamina beyond its maximum limit.",
      "dlc": false,
      "hearts_recovered": 2,
      "id": 193,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/endura_carrot/image",
      "name": "endura carrot"
    },
    {
      "common_locations": [
        "Kakariko Village"
      ],
      "cooking_effect": "defense up",
      "description": "An extremely tough pumpkin raised in village fields. When cooked, that toughness manifests itself by considerably upping defense.",
      "dlc": false,
      "hearts_recovered": 0.5,
      "id": 194,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fortified_pumpkin/image",
      "name": "fortified pumpkin"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "cooking_effect": "speed up",
      "description": "This vitality-rich flower blooms mainly on cliffsides. When cooked into a dish, the nourishing compounds increase your movement speed.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 195,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/swift_violet/image",
      "name": "swift violet"
    },
    {
      "common_locations": [
        "West Necluda",
        "Faron Grasslands"
      ],
      "cooking_effect": "attack up",
      "description": "This medicinal plant is known for its sharp thorns and for the fruit it bears. The fruit contains a compound that increases attack power when cooked into a dish.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 196,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/mighty_thistle/image",
      "name": "mighty thistle"
    },
    {
      "common_locations": [
        "Akkala Highlands",
        "Hyrule Ridge"
      ],
      "cooking_effect": "defense up",
      "description": "This tough medicinal plant cannot be broken, but it can be cooked. Its durable yet flexible fibers raise your defense when cooked into a dish.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 197,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/armoranth/image",
      "name": "armoranth"
    },
    {
      "common_locations": [
        "West Necluda",
        "Lanayru Great Spring"
      ],
      "cooking_effect": "stealth up",
      "description": "A plant that grows in the quieter areas of Hyrule. At night, it gives off a soft glow. Cook with it to increase your stealth.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 198,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue_nightshade/image",
      "name": "blue nightshade"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "West Necluda"
      ],
      "cooking_effect": "stealth up",
      "description": "This lovely flower was said to have been a favorite of the princess of Hyrule. Once feared to have gone extinct, it's recently been spotted growing in the wild.",
      "dlc": false,
      "hearts_recovered": 0,
      "id": 199,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silent_princess/image",
      "name": "silent princess"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Tabantha Frontier"
      ],
      "cooking_effect": "stamina recovery",
      "description": "Honey straight from the hive is chock-full of nutrients. Cooking this into a meal unlocks the potential of these nutrients and provides a stamina-recovery effect.",
      "dlc": false,
      "hearts_recovered": 2,
      "id": 200,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/courser_bee_honey/image",
      "name": "courser bee honey"
    }
  ],
  customers: [
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "description": "This low-level, gel-based monster can be found all over Hyrule. It tends to spring its attacks on unsuspecting prey from the ground or from trees. Its strength varies by size, and the type of jelly it drops varies depending on whether the Chuchu was heated up, cooled down, or shocked.",
      "dlc": false,
      "drops": [
        "chuchu jelly"
      ],
      "id": 84,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/chuchu/image",
      "name": "chuchu"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Eldin Mountains"
      ],
      "description": "This low-level gel monster is engulfed in flames. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      "dlc": false,
      "drops": [
        "red chuchu jelly"
      ],
      "id": 85,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire_chuchu/image",
      "name": "fire chuchu"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "description": "This low-level gel monster is engulfed in freezing-cold air. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      "dlc": false,
      "drops": [
        "white chuchu jelly"
      ],
      "id": 86,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice_chuchu/image",
      "name": "ice chuchu"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "East Necluda"
      ],
      "description": "This low-level gel monster is engulfed in electricity. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised.",
      "dlc": false,
      "drops": [
        "yellow chuchu jelly"
      ],
      "id": 87,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/electric_chuchu/image",
      "name": "electric chuchu"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "description": "The unpredictable flight pattern of this noctoural bat-like species can make fighting them a nuisance, but they're weak enough to fell with a single strike. Sometimes they'll attack in packs, but even then, a pack can be sent packing with a single attack.",
      "dlc": false,
      "drops": [
        "keese wing",
        "keese eyeball"
      ],
      "id": 88,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/keese/image",
      "name": "keese"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Eldin Mountains"
      ],
      "description": "The fire that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of setting fire to anything they touch.",
      "dlc": false,
      "drops": [
        "fire keese wing",
        "keese eyeball"
      ],
      "id": 89,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire_keese/image",
      "name": "fire keese"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Gerudo Highlands"
      ],
      "description": "The intense frost that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of freezing anything they touch.",
      "dlc": false,
      "drops": [
        "ice keese wing",
        "keese eyeball"
      ],
      "id": 90,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice_keese/image",
      "name": "ice keese"
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "East Necluda"
      ],
      "description": "The electricity that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of shocking anything they touch.",
      "dlc": false,
      "drops": [
        "electric keese wing",
        "keese eyeball"
      ],
      "id": 91,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/electric_keese/image",
      "name": "electric keese"
    },
    {
      "common_locations": [
        "West Necluda",
        "Hyrule Field"
      ],
      "description": "Although they spend most of their time in water, the drop in barometric pressure that occurs when it rains causes an air sac within these octopus-like monsters to inflate and lift them into the air. The rocks they spit out can be bounced back with a shield.",
      "dlc": false,
      "drops": [
        "octorok tentacle",
        "octo balloon",
        "octorok eyeball"
      ],
      "id": 92,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/water_octorok/image",
      "name": "water octorok"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "Deep Akkala"
      ],
      "description": "Although originally an aquatic species, this type has adapted to life in the forest. They hide among the trees, disguising themselves as grass or unassuming shrubbery, and then attack when someone wanders by.",
      "dlc": false,
      "drops": [
        "octorok tentacle",
        "octo balloon",
        "octorok eyeball"
      ],
      "id": 93,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/forest_octorok/image",
      "name": "forest octorok"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Gerudo Highlands"
      ],
      "description": "This octopus-like species of monster lives in volcanic regions. When they inhale, they're preparing to spit out flaming rocks but have been known to suck up weapons or bombs in the same breath.",
      "dlc": false,
      "drops": [
        "octorok tentacle",
        "octo balloon",
        "octorok eyeball"
      ],
      "id": 94,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rock_octorok/image",
      "name": "rock octorok"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Tabantha Frontier"
      ],
      "description": "These octopus-like monsters live in snowy fields and disguise themselves as grass. When someone wanders by, they spring into action and attack by spitting snowballs.",
      "dlc": false,
      "drops": [
        "octorok tentacle",
        "octo balloon",
        "octorok eyeball"
      ],
      "id": 95,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/snow_octorok/image",
      "name": "snow octorok"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Gerudo Desert"
      ],
      "description": "These particularly clever monsters bury themselves in deep sand or snow and disguise themselves as treasure chests. Anyone who approaches the chests is attacked. The treasures chests are not magnetic, which proves that they are actually a part of these monsters' bodies.",
      "dlc": false,
      "drops": [
        "octorok tentacle",
        "octo balloon",
        "octorok eyeball",
        "green rupee",
        "blue rupee",
        "red rupee",
        "purple rupee",
        "silver rupee"
      ],
      "id": 96,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/treasure_octorok/image",
      "name": "treasure octorok"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Great Hyrule Forest"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their fire rods to hurl fireballs or to summon flaming monsters and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.",
      "dlc": false,
      "drops": [],
      "id": 97,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire_wizzrobe/image",
      "name": "fire wizzrobe"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Field"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their ice rods to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperatures around them. The weather will normalize once the Wizzrobe is defeated.",
      "dlc": false,
      "drops": [],
      "id": 98,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice_wizzrobe/image",
      "name": "ice wizzrobe"
    },
    {
      "common_locations": [
        "Hyrule Ridge",
        "West Necluda"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their lightning rods to hurl balls of electricity or to summon monsters surging with electricity and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe has been defeated.",
      "dlc": false,
      "drops": [],
      "id": 99,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/electric_wizzrobe/image",
      "name": "electric wizzrobe"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their meteor rods to hurl fireballs or to summon flaming monsters and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.",
      "dlc": false,
      "drops": [],
      "id": 100,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/meteo_wizzrobe/image",
      "name": "meteo wizzrobe"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their blizzard rods to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperature around them. The weather will normalize once the Blizzrobe is defeated.",
      "dlc": false,
      "drops": [],
      "id": 101,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blizzrobe/image",
      "name": "blizzrobe"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Tabantha Frontier"
      ],
      "description": "These spell-casting monsters can be found all over Hyrule. They use their thunderstorm rods to hurl balls of electricity or to summon monsters surging with electricity and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe is defeated.",
      "dlc": false,
      "drops": [],
      "id": 102,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/thunder_wizzrobe/image",
      "name": "thunder wizzrobe"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "description": "This common species is a nuisance all over Hyrule. Some have unified in the time following the Great Calamity and have formed factions of bandits. While not very clever, they are at least intelligent enough to hunt beasts and grill their meat for food. Though they're typically ferocious carnivores, they actually enjoy fruit as well.",
      "dlc": false,
      "drops": [
        "bokoblin horn",
        "bokoblin fang"
      ],
      "id": 103,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/bokoblin/image",
      "name": "bokoblin"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Gerudo Highlands"
      ],
      "description": "This common species is a nuisance all over Hyrule. They're tougher and have stronger weapons than the red Bokoblins - and are a little more clever, as well. At the very least, they have figured out that they can simply kick a Remote Bomb out of the way to avoid its blast.",
      "dlc": false,
      "drops": [
        "bokoblin horn",
        "bokoblin fang",
        "bokoblin guts"
      ],
      "id": 104,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue_bokoblin/image",
      "name": "blue bokoblin"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Gerudo Highlands"
      ],
      "description": "Although Bokoblins are generally a nuisance, the Black Bokoblins are among the most dangerous type. They're extremely resilient, and many are armed with more advanced weapons.",
      "dlc": false,
      "drops": [
        "bokoblin horn",
        "bokoblin fang",
        "bokoblin guts"
      ],
      "id": 105,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/black_bokoblin/image",
      "name": "black bokoblin"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Great Hyrule Forest"
      ],
      "description": "The remains of Bokoblins appear in the dark of the night. While they're fragile enough to crumble from a single blow, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting. Sometimes the body will pick up the wrong skull, but this doesn't seem to be a problem...",
      "dlc": false,
      "drops": [
        "bokoblin horn",
        "bokoblin fang"
      ],
      "id": 106,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stalkoblin/image",
      "name": "stalkoblin"
    },
    {
      "common_locations": null,
      "description": "You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. They're called \"silver\" not only because of their coloring but also to denote their rarity. The purple markings help them to stand out even more.",
      "dlc": false,
      "drops": [
        "bokoblin horn",
        "bokoblin fang",
        "bokoblin guts",
        "amber",
        "opal",
        "topaz",
        "ruby",
        "sapphire",
        "diamond"
      ],
      "id": 107,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_bokoblin/image",
      "name": "silver bokoblin"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "East Necluda"
      ],
      "description": "This heavyweight species of monster can be found all over Hyrule. They're physically very strong, their legs along strong enough to resist the force of a bomb blast. They're much more dangerous than the Bokoblins. In fact, Moblins have been known to pick up Bokoblins and throw them as makeshift projectile weapons.",
      "dlc": false,
      "drops": [
        "moblin horn",
        "moblin fang"
      ],
      "id": 108,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/moblin/image",
      "name": "moblin"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Deep Akkala"
      ],
      "description": "These heavyweight monsters can be found all over Hyrule. They're much tougher than their standard counterparts and often have much stronger weapons equipped.",
      "dlc": false,
      "drops": [
        "moblin horn",
        "moblin fang",
        "moblin guts"
      ],
      "id": 109,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue_moblin/image",
      "name": "blue moblin"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Eldin Canyon"
      ],
      "description": "These heavyweight monsters can be found all over Hyrule and are among the most dangerous types of Moblin. They're extremely resilient and are often armed with some of the strongest weapons Moblins can carry.",
      "dlc": false,
      "drops": [
        "moblin horn",
        "moblin fang",
        "moblin guts"
      ],
      "id": 110,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/black_moblin/image",
      "name": "black moblin"
    },
    {
      "common_locations": [
        "Great Hyrule Forest",
        "Gerudo Highlands"
      ],
      "description": "The remains of Moblins appear in the dark of the night. Even the toughest Moblins become fragile when they're little more than a pile of bones, so they'll crumble after just a few attacks. However, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting.",
      "dlc": false,
      "drops": [
        "moblin horn",
        "moblin fang"
      ],
      "id": 111,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stalmoblin/image",
      "name": "stalmoblin"
    },
    {
      "common_locations": null,
      "description": "The strongest of all Moblins, Ganon's fiendish magic has allowed them to surpass even the Black Moblins in strength and resilience. They're called \"silver\" for both their body color as well as their rarity. The purple patterns on their bodies also help them to stand out.",
      "dlc": false,
      "drops": [
        "moblin horn",
        "moblin fang",
        "moblin guts",
        "amber",
        "opal",
        "topaz",
        "ruby",
        "sapphire",
        "diamond"
      ],
      "id": 112,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_moblin/image",
      "name": "silver moblin"
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Gerudo Desert"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. They're a sly species that lurks underwater or uses camouflage to blend in with the environment to launch ambushes. Moreover, they never sleep. They're meat eaters by nature but will enjoy the occasional insect or two.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon"
      ],
      "id": 113,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lizalfos/image",
      "name": "lizalfos"
    },
    {
      "common_locations": [
        "Tabantha Frontier",
        "Gerudo Desert"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. Compared to the green Lizalfos, many of these carry much stronger weapons and are generally much tougher.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon",
        "lizalfos tail"
      ],
      "id": 114,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue_lizalfos/image",
      "name": "blue lizalfos"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. This particular type tends to carry some pretty strong weapons, so they are among the most dangerous Lizalfos.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon",
        "lizalfos tail"
      ],
      "id": 115,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/black_lizalfos/image",
      "name": "black lizalfos"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Hyrule Ridge"
      ],
      "description": "The remains of Lizalfos appear in the dark of night. They're as sly as ever, even now that they're just some bones stacked atop each other. However, their bodies are much more fragile, and a single solid hit can reduce them to pieces. If a skull remains intact, they will pull themselves back up and continue to fight. They've been known to grab the wrong skull at times, but they never seem to mind...",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon"
      ],
      "id": 116,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stalizalfos/image",
      "name": "stalizalfos"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Gerudo Desert"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. Their fiery breath makes them pretty dangerous, but exposure to cold will kill them instantly. They mainly make their homes in volcanic areas but have also been sighted in the Akkala region.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon",
        "red lizalfos tail"
      ],
      "id": 117,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fire-breath_lizalfos/image",
      "name": "fire-breath lizalfos"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hebra Mountains"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. The balls of ice they spit make them particularly troublesome, but exposure to fire will kill them instantly. Their homes are mainly on snowy mountains.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon",
        "icy lizalfos tail"
      ],
      "id": 118,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ice-breath_lizalfos/image",
      "name": "ice-breath lizalfos"
    },
    {
      "common_locations": [
        "Gerudo Desert",
        "Hyrule Ridge"
      ],
      "description": "These quick-witted, lizard-like monsters can be found all over Hyrule. The can emit strong electrical currents from their bodies, so don't get too close. Their horns are brimming with electricity, which will discharge and arc to nearby areas if struck by an arrow. They tend to live in desert climates.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos tail",
        "yellow lizalfos tail"
      ],
      "id": 119,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/electric_lizalfos/image",
      "name": "electric lizalfos"
    },
    {
      "common_locations": null,
      "description": "These Lizalfos have been influenced by Ganon's fiendish magic to become the strongest Lizalfos of all. They're called \"silver\" for their unique coloring and also to denote their rarity. Their purple pattern makes them even more distinct.",
      "dlc": false,
      "drops": [
        "lizalfos horn",
        "lizalfos talon",
        "lizalfos tail",
        "amber",
        "opal",
        "topaz",
        "ruby",
        "sapphire",
        "diamond"
      ],
      "id": 120,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_lizalfos/image",
      "name": "silver lizalfos"
    },
    {
      "common_locations": [
        "Lanayru Great Spring",
        "Hyrule Field"
      ],
      "description": "These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you're very well prepared.",
      "dlc": false,
      "drops": [
        "lynel horn",
        "lynel hoof",
        "lynel guts"
      ],
      "id": 121,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/lynel/image",
      "name": "lynel"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Deep Akkala"
      ],
      "description": "These fearsome monsters have lived in Hyrule since ancient times. Compared to the standard Lynel, those with blue manes much tougher and equipped with much stronger weapons. Facing off against a Lynel is ill-advised, but if you must, be sure you're well prepared.",
      "dlc": false,
      "drops": [
        "lynel horn",
        "lynel hoof",
        "lynel guts"
      ],
      "id": 122,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue-maned_lynel/image",
      "name": "blue-maned lynel"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hebra Mountains"
      ],
      "description": "These fearsome monsters have lived in Hyrule since ancient times. Their ability to breathe fire makes White-Maned Lynels among the toughest of the species; each one of their attacks is an invitation to the grave. There are so few eyewitness accounts of this breed because a White-Maned Lynel is not one to let even simple passersby escape with their lives.",
      "dlc": false,
      "drops": [
        "lynel horn",
        "lynel hoof",
        "lynel guts"
      ],
      "id": 123,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/white-maned_lynel/image",
      "name": "white-maned lynel"
    },
    {
      "common_locations": null,
      "description": "Silver Lynels are not to be trifled with. They have been influenced by Ganon's fiendish magic, so they are the strongest among the Lynel species, surpassing even the strength of those with white manes. The term \"silver\" denotes not only their color but also their rarity. The purple stripes help them to stand out even more.",
      "dlc": false,
      "drops": [
        "lynel horn",
        "lynel hoof",
        "lynel guts",
        "topaz",
        "ruby",
        "sapphire",
        "diamond",
        "star fragment"
      ],
      "id": 124,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/silver_lynel/image",
      "name": "silver lynel"
    },
    {
      "common_locations": [
        "Hyrule Field"
      ],
      "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. Its six legs give it extraordinary mobility compared to most current vehicles, and its powerful laser provides far greater offensive capability than conventional weaponry. Destroying the legs severely reduces its mobility.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core",
        "giant ancient core"
      ],
      "id": 125,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_stalker/image",
      "name": "guardian stalker"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Akkala Highlands"
      ],
      "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This flying model is an improvement over the walking type, capable of either attacking or surveying from the air. Destroying the propeller will ground it.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core",
        "giant ancient core"
      ],
      "id": 126,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_skywatcher/image",
      "name": "guardian skywatcher"
    },
    {
      "common_locations": [
        "Hyrule Castle"
      ],
      "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon. This stationary model was used for defending important structures. Its offensive power is on par with other Guardians, and omitting the legs kept the manufacturing costs low.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core",
        "giant ancient core"
      ],
      "id": 127,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_turret/image",
      "name": "guardian turret"
    },
    {
      "common_locations": [
        "Death Mountain"
      ],
      "description": "These sentries dispatched from Divine Beast Vah Rudania are equipped with searchlights that can spot intruders.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core"
      ],
      "id": 128,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/sentry/image",
      "name": "sentry"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Hyrule Castle"
      ],
      "description": "The Sheikah of ancient Hyrule developed this as a weapon to combat Ganon, but it was destroyed during the Great Calamity. Ages of weather and neglect have left it in a state of disrepair. Approach with caution; some of the derelict models have been known to awaken from stasis and attack when approached.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft"
      ],
      "id": 129,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/decayed_guardian/image",
      "name": "decayed guardian"
    },
    {
      "common_locations": null,
      "description": "Guardians were originally designed by an ancient civilization to combat Ganon, but these smaller models were placed inside shrines as part of the trials found within. The multiple legs and beam functionality were scaled down but kept mostly intact.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring"
      ],
      "id": 130,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_scout_i/image",
      "name": "guardian scout i"
    },
    {
      "common_locations": null,
      "description": "Although originally designed by an ancient civilization to combat Ganon, these scaled-down Guardians were placed inside shrines as part of the trials. In additional to the beam functionality, this particular model was designed to handle weaponry as a means of further testing the combat prowess of one undertaking the trials. It takes some serious skill to go toe-to-toe with one of these.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft"
      ],
      "id": 131,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_scout_ii/image",
      "name": "guardian scout ii"
    },
    {
      "common_locations": null,
      "description": "Although originally designed by an ancient civilisation to combat Ganon, these scaled-down Guardians were placed inside shrines as part or the trials. This model is equipped with twin-blade functionality to further test the combat prowess of one undertaking the trials. It takes a nimble fighter to overcome this one.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core"
      ],
      "id": 132,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_scout_iii/image",
      "name": "guardian scout iii"
    },
    {
      "common_locations": null,
      "description": "An ancient civilization originally designed Guardians to combat Ganon but then scaled them down to place in shrines as part of the trials. This model is very resilient and has been outfitted with triple-blade functionality, allowing it to wield three weapons. This will put any would-be hero to the test for sure. A great deal of strength and confidence alike are required to contend with one of these.",
      "dlc": false,
      "drops": [
        "ancient screw",
        "ancient spring",
        "ancient gear",
        "ancient shaft",
        "ancient core"
      ],
      "id": 133,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/guardian_scout_iv/image",
      "name": "guardian scout iv"
    },
    {
      "common_locations": null,
      "description": "The lowest-ranked members of the Yiga Clan. They've been dispatched all across Hyrule with a single task: seek out Link and end his life. They're a crafty bunch, sometimes disguising themselves as simple travelers or villagers to get the jump on you. Be wary of suspicious people you encounter. They're very agile and carry a bow and one-handed sword.",
      "dlc": false,
      "drops": [
        "green rupee",
        "blue rupee",
        "red rupee",
        "purple rupee",
        "mighty bananas"
      ],
      "id": 134,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/yiga_footsoldier/image",
      "name": "yiga footsoldier"
    },
    {
      "common_locations": null,
      "description": "These are the elite soldiers of the Yiga Clan. They favor the windcleaver blade and are extremely agile despite their bulky build. At this Yiga Clan rank, they have mastered a technique that allows them to manipulate the very earth. By striking the ground, they can create stone pillars and blasts of air.",
      "dlc": false,
      "drops": [
        "amber",
        "opal",
        "topaz",
        "ruby",
        "sapphire",
        "mighty bananas"
      ],
      "id": 135,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/yiga_blademaster/image",
      "name": "yiga blademaster"
    },
    {
      "common_locations": [
        "Yiga Clan Hideout"
      ],
      "description": "The leader of the Yiga Clan, a group formed with just a single objective: eliminate Link. He sends his minions all over Hyrule in search of you but tends to spend most of his time napping and generally loafing about. Despite this, his mastery of the esoteric arts has earned him a deep respect. Even if he were to die, his followers would never give up on their one and only task.",
      "dlc": false,
      "drops": [],
      "id": 136,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/master_kohga/image",
      "name": "master kohga"
    },
    {
      "common_locations": null,
      "description": "The arbiter of worthiness for the hero who wishes to control a Divine Beast, following a revelation from the Goddess Hylia. As the last part of the final trial, the monk offers a challenge of ancient techniques.",
      "dlc": false,
      "drops": [],
      "id": 137,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/monk_maz_koshia/image",
      "name": "monk maz koshia"
    },
    {
      "common_locations": [
        "West Necluda",
        "East Necluda"
      ],
      "description": "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "opal",
        "ruby"
      ],
      "id": 138,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_talus/image",
      "name": "stone talus"
    },
    {
      "common_locations": [
        "Gerudo Highlands",
        "Hyrule Field"
      ],
      "description": "This enormous monster is naturally camouflaged as a rock formation. Neither sword nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak. Unlike your average Stone Talus, this type's ore deposit consists mostly of luminous stone.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "opal",
        "luminous stone",
        "topaz",
        "diamond"
      ],
      "id": 139,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_talus_(luminous)/image",
      "name": "stone talus (luminous)"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Tabantha Frontier"
      ],
      "description": "This enormous monster is naturally camouflaged as a rock formation. Neither stone nor arrow can pierce its stony form, but a cunning adventurer knows to scale its body and attack the ore sprouting from its peak. Unlike your average Stone Talus, this type's ore deposit contains a large amount of precious ore.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "opal",
        "topaz",
        "ruby",
        "sapphire",
        "diamond"
      ],
      "id": 140,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_talus_(rare)/image",
      "name": "stone talus (rare)"
    },
    {
      "common_locations": [
        "Eldin Canyon"
      ],
      "description": "This enormous monster is naturally camouflaged as molten rock. Neither sword nor arrow can pierce its fiery form. Merely touching its magma-hot body can burn you pretty badly, but you may be able to scale it if you can use something to chill its flames.",
      "dlc": false,
      "drops": [
        "flint",
        "opal",
        "ruby",
        "diamond"
      ],
      "id": 141,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/igneo_talus/image",
      "name": "igneo talus"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Gerudo Highlands"
      ],
      "description": "This enormous monster is naturally camouflaged as a frozen rock formation. Neither sword nor arrow can pierce its frigid form. Merely touching its frosty body can leave you with severe frostbite, but you may be able to scale it if you use something to thaw its icy exterior.",
      "dlc": false,
      "drops": [
        "flint",
        "opal",
        "sapphire",
        "diamond"
      ],
      "id": 142,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/frost_talus/image",
      "name": "frost talus"
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "description": "A very young Stone Talus. Their bodies toughen as they mature, becoming as tough as boulders by adulthood. As a child, however, their bodies are light enough to be lifted and fragile enough to break when thrown.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "opal"
      ],
      "id": 143,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_pebblit/image",
      "name": "stone pebblit"
    },
    {
      "common_locations": [
        "Eldin Canyon",
        "Eldin Mountains"
      ],
      "description": "A very young Igneo Talus. Their bodies toughen as they mature and convert fully into lava by adulthood. As a child, however, while still covered in fire, their bodies are fragile and light enough to be blown away by a bomb's blast.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "ruby"
      ],
      "id": 144,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/igneo_pebblit/image",
      "name": "igneo pebblit"
    },
    {
      "common_locations": [
        "Hebra Mountains",
        "Gerudo Highlands"
      ],
      "description": "A very young Frost Talus. Their bodies toughen and frost over as they mature, becoming entirely made of ice by adulthood. As a child, however, their bodies are awfully fragile and are light enough to be blown away by a bomb's blast.",
      "dlc": false,
      "drops": [
        "flint",
        "amber",
        "sapphire"
      ],
      "id": 145,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/frost_pebblit/image",
      "name": "frost pebblit"
    },
    {
      "common_locations": null,
      "description": "This monster is an Igneo Talus subspecies that is camouflaged as molten rock. It lives in lava for many years before emerging at an enormous size. It is wildly powerful and emits a tremendous amount of heat, causing a constant updraft in its vicinity. This monster is so fearsome it has earned the title of Titan.",
      "dlc": false,
      "drops": [],
      "id": 146,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/igneo_talus_titan/image",
      "name": "igneo talus titan"
    },
    {
      "common_locations": [
        "East Necluda",
        "West Necluda"
      ],
      "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. A deft hand can steal weapons off the necklaces they wear.",
      "dlc": false,
      "drops": [
        "hinox toenail",
        "hinox tooth",
        "hinox guts",
        "apple",
        "wildberry",
        "palm fruit",
        "voltfruit",
        "mighty bananas",
        "fortified pumpkin",
        "hearty durian"
      ],
      "id": 147,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/hinox/image",
      "name": "hinox"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "Lanayru Great Spring"
      ],
      "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. Blue Hinox wear greaves that can be burnt away to expose their feet. A deft hand can steal weapons off the necklaces they wear.",
      "dlc": false,
      "drops": [
        "hinox toenail",
        "hinox tooth",
        "hinox guts",
        "roasted bass",
        "roasted hearty bass",
        "roasted hearty salmon",
        "roasted trout",
        "roasted carp",
        "roasted porgy",
        "sneaky river escargot",
        "blueshell escargot",
        "blackened crab"
      ],
      "id": 148,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/blue_hinox/image",
      "name": "blue hinox"
    },
    {
      "common_locations": [
        "East Necluda",
        "Hyrule Field"
      ],
      "description": "The largest monster to make its home in Hyrule, the Hinox lives primarily in forested areas. A keen awareness of your surroundings is paramount when facing one, as Hinox are known for tearing entire trees from the ground and using them as weapons. Black Hinox wear metal greaves that conduct electricity rather well. A deft hand can steal weapons off the necklaces they wear.",
      "dlc": false,
      "drops": [
        "hinox toenail",
        "hinox tooth",
        "hinox guts",
        "seared steak",
        "seared prime steak",
        "seared gourmet steak",
        "roasted bird drumstick",
        "roasted bird thigh",
        "roasted whole bird"
      ],
      "id": 149,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/black_hinox/image",
      "name": "black hinox"
    },
    {
      "common_locations": [
        "Hyrule Field",
        "West Necluda"
      ],
      "description": "The mere remains of what was once a giant monster known as a Hinox. These skeletal beasts appear at nighttime. Much like their living counterparts, the Stalnox will tear entire trees from the ground to use as weapons. Furthermore, even if it appears defeated at first, it will keep coming back for more as long as its eye is left intact.",
      "dlc": false,
      "drops": [
        "hinox tooth"
      ],
      "id": 150,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stalnox/image",
      "name": "stalnox"
    },
    {
      "common_locations": [
        "Gerudo Desert"
      ],
      "description": "This massive monster swims beneath the desert's sand. It spends most of its time submerged, but if it senses sound, it will breach the surface to feast on whatever it can grab. Running around carelessly can be dangerous if you suspect there may be one in the area.",
      "dlc": false,
      "drops": [
        "molduga fin",
        "molduga guts"
      ],
      "id": 151,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/molduga/image",
      "name": "molduga"
    },
    {
      "common_locations": null,
      "description": "This massive monster swims beneath the desert's sand. It is a subspecies of Molduga that stored up a great deal of energy by sleeping underground for hundreds of years. Its power is superior to Molduga, as its skin is rich with iron and acts as a protective shield.",
      "dlc": false,
      "drops": [
        "treasures"
      ],
      "id": 152,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/molduking/image",
      "name": "molduking"
    },
    {
      "common_locations": [
        "Eldin Mountains",
        "Tabantha Frontier"
      ],
      "description": "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
      "dlc": false,
      "drops": null,
      "id": 153,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
      "name": "dinraal"
    },
    {
      "common_locations": [
        "Mount Lanayru"
      ],
      "description": "A spirit of ice has taken the form of this giant dragon. Making its home in the Lanayru region, it's said to have served the Spring of Wisdom since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has seen this in the current age. The ice that coats its body makes it dangerous to get near, but Naydra bears no ill will toward people.",
      "dlc": false,
      "drops": null,
      "id": 154,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/naydra/image",
      "name": "naydra"
    },
    {
      "common_locations": [
        "Lake Hylia",
        "Lake Floria"
      ],
      "description": "A spirit of lightning has taken the form of this giant dragon. Making its home in the Faron region, it's said to have served the Spring of Courage since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has seen this in the current age. The electricity that coats its body makes it dangerous to get near, but Farosh bears no ill will toward people.",
      "dlc": false,
      "drops": null,
      "id": 155,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/farosh/image",
      "name": "farosh"
    },
    {
      "common_locations": null,
      "description": "The Malice has given these Bokoblin skulls a sort of life. Devoid of any intelligence the Bokoblin it once belonged to may have had, these pitiful things now exist only to attack anything that gets too close.",
      "dlc": false,
      "drops": [],
      "id": 156,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/cursed_bokoblin/image",
      "name": "cursed bokoblin"
    },
    {
      "common_locations": null,
      "description": "The Malice has given these Moblin skulls a pitiful life after death. The only fragment of their former selves they've held on to is the ferocity innate to all Moblins, so they will attack anyone that approaches.",
      "dlc": false,
      "drops": [],
      "id": 157,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/cursed_moblin/image",
      "name": "cursed moblin"
    },
    {
      "common_locations": null,
      "description": "The Malice has given these Lizalfos skulls a sorry form of life after death. Only the slyness of their former selves remains, making them faster than Bokoblin skulls. They thoughtlessly attack anyone who approaches.",
      "dlc": false,
      "drops": [],
      "id": 158,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/cursed_lizalfos/image",
      "name": "cursed lizalfos"
    },
    {
      "common_locations": [
        "Divine Beast Vah Naboris"
      ],
      "description": "This phantom of Ganon attacked the Divine Beast Vah Naboris and was responsible for the demise of the Champion Urbosa. It specializes in quick, lightning-based attacks.",
      "dlc": false,
      "drops": [],
      "id": 159,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/thunderblight_ganon/image",
      "name": "thunderblight ganon"
    },
    {
      "common_locations": [
        "Divine Beast Vah Rudania"
      ],
      "description": "This phantom of Ganon attacked the Divine Beast Vah Rudania and was responsible for the demise of the Champion Daruk. It attacks with a greatsword and fire magic.",
      "dlc": false,
      "drops": [],
      "id": 160,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/fireblight_ganon/image",
      "name": "fireblight ganon"
    },
    {
      "common_locations": [
        "Divine Beast Vah Ruta"
      ],
      "description": "This phantom of Ganon attacked the Divine Beast Vah Ruta and was responsible for the demise of the Champion Mipha. It attacks with a spear and ice magic.",
      "dlc": false,
      "drops": [],
      "id": 161,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/waterblight_ganon/image",
      "name": "waterblight ganon"
    },
    {
      "common_locations": [
        "Divine Beast Vah Medoh"
      ],
      "description": "This phantom of Ganon attacked the Divine Beast Vah Medoh and was responsible for the demise of the Champion Revali. It specializes in long-ranged wind attacks.",
      "dlc": false,
      "drops": [],
      "id": 162,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/windblight_ganon/image",
      "name": "windblight ganon"
    },
    {
      "common_locations": [
        "Hyrule Castle"
      ],
      "description": "The source of the darkness that has appeared time and again throughout Hyrule's history. It's been called many names, from \"Great King of Evil\" to \"Calamity.\" Hibernating within a cocoon, it attempted to regenerate a physical form after Link awoke but was forced to confront him in an incomplete state.",
      "dlc": false,
      "drops": [],
      "id": 163,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/calamity_ganon/image",
      "name": "calamity ganon"
    },
    {
      "common_locations": [
        "Hyrule Field"
      ],
      "description": "After Ganon was defeated by Link, the remaining Malice pulled itself together to form this bestial creature. Its appearance and fiendish magic eared it the name of Dark Beast. This form is considered to be Ganon's original, although in this state, his awareness has been consumed entirely by Malice, and all he knows is a desire to rampage and destroy.",
      "dlc": false,
      "drops": [],
      "id": 164,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dark_beast_ganon/image",
      "name": "dark beast ganon"
    }
  ],
  users: [
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "description": "Fortunes untold (potentially) await the lucky adventurer who finds one of these. Chests can often be found within shrines or at enemy camps, but there may be some crafty folks who think they're safer underground.",
      "dlc": false,
      "drops": [
        "treasures"
      ],
      "id": 386,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/treasure_chest/image",
      "name": "treasure chest"
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "description": "This deposit contains a good deal of ore. Breaking the rock will yield rock salt, flint, and other minerals of varying value.",
      "dlc": false,
      "drops": [
        "ruby",
        "diamond",
        "amber",
        "sapphire",
        "topaz",
        "opal",
        "rock salt",
        "flint"
      ],
      "id": 387,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/ore_deposit/image",
      "name": "ore deposit"
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "description": "This deposit contains a good deal of precious ore and the occasional rare mineral, like ruby and sapphire. Break it open to see what it has to offer!",
      "dlc": false,
      "drops": [
        "ruby",
        "sapphire",
        "diamond",
        "amber",
        "topaz",
        "flint"
      ],
      "id": 388,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/rare_ore_deposit/image",
      "name": "rare ore deposit"
    },
    {
      "common_locations": [
        "Greater Hyrule"
      ],
      "description": "This deposit contains quite a bit of luminous stone. Crack it open to get at the easily process rocks within.",
      "dlc": false,
      "drops": [
        "luminous",
        "flint"
      ],
      "id": 389,
      "image": "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/luminous_ore_deposit/image",
      "name": "luminous ore deposit"
    }
  ]
})

