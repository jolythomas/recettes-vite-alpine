export default function Filtres() {
    return {
      difficulteSelectionnee: '',
  
      filtrerRecettes() {
        if (this.difficulteSelectionnee === '') {
          this.recettesFiltrees = this.recettes
        } else {
          this.recettesFiltrees = this.recettes.filter(
            (recette) => recette.difficulty === this.difficulteSelectionnee
          )
        }
      }
    }
  }
  