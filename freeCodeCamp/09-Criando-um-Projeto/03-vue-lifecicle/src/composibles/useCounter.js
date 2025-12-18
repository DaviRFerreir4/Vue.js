import { ref } from "vue"

// Exemplo de composible
export function useCounter(initialValue = 10, step = 1) {
  const count = ref(initialValue)

  const increment = () => {
    count.value += step
  }

  const decrement = () => {
    count.value -= step
  }

  return { count, increment, decrement }
}
