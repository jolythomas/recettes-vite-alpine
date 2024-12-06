import recettesData from '../../data/recipes.json'

export default function Grille() {
  return {
    recettes: [],
    recettesFiltrees: [], 
    difficultes: [],
    difficulteSelectionnee: "",
    currentStep: 1, 
    stepIndex: 1, 

    init() {
      this.recettes = recettesData.recipes
      this.recettesFiltrees = this.recettes
      this.difficultes = [...new Set(this.recettes.map((recette) => recette.difficulty))];
    },

    filtrerRecettes() {
      if (this.difficulteSelectionnee === "") {
        this.recettesFiltrees = this.recettes
      } else {
        this.recettesFiltrees = this.recettes.filter(
          (recette) => recette.difficulty === this.difficulteSelectionnee
        )
      }
    },

    ouvrirVueDetaillee(recette) {
      this.recetteDetaillee = recette
      this.currentStep = 1
      this.vueDetaillee = true
    },

    fermerVueDetaillee() {
      this.vueDetaillee = false
      this.recetteDetaillee = null
      this.currentStep = 1
      this.stepIndex = 1  
    },

    changerEtape(nb) {
      this.currentStep += nb
      this.stepIndex = this.currentStep
    },
  }
}
