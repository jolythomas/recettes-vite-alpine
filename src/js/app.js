import Alpine from "alpinejs"
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import Filtres from "./modules/Filtres.js"
import Grille from "./modules/Grille.js"

window.Alpine = Alpine;

Alpine.data("Filtres", Filtres)
Alpine.data("Grille", Grille)
Alpine.plugin(persist)
Alpine.plugin(intersect)

Alpine.start()