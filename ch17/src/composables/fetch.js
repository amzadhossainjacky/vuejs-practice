import { ref } from 'vue'


export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)
  
    const getData = async () => {
      data.value = null
      error.value = null

      try {
        const res = await fetch(url)
        const resData = await res.json()
        data.value = resData
      } catch (error) {
        error.value = error
      }
    }

    getData()
    return { data, error }
  }