import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useGameStore = defineStore("gameStore", () => {
  const initial_score = ref(20)
  const score = ref(20)
  const max_health = ref(100)
  const max_attack = ref(30)
  const max_defense = ref(25)
  const getScore = computed(() => {
    return score.value
  })
  const getMaxHealth = computed(() => {
    return max_health.value
  })

  const setNextAttack = () => {
    let attack = Math.ceil(Math.random() * max_attack.value)
    score.value += attack
  }
  const setNextDefense = () => {
    let defense = Math.ceil(Math.random() * max_defense.value)
    score.value -= defense
  }
  const resetScore = () => {
    score.value = initial_score.value
  }

  return {
    //
    initial_score,
    score,
    max_health,
    max_attack,
    max_defense,
    //
    getScore,
    getMaxHealth,
    //
    setNextAttack,
    setNextDefense,
    resetScore,
  }
})
