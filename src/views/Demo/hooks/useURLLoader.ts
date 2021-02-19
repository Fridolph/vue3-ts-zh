// dogAPI https://dog.ceo/api/breeds/image/random
// catAPI http://api.thecatapi.com/v1/images/search?limit=1
// import { ref } from 'vue'
import axios from 'axios'

const catAPI = 'http://api.thecatapi.com/v1/images/search?limit=1'
const dogAPI = 'https://dog.ceo/api/breeds/image/random'

export default async function useURLLoader(type: string) {
  let url = ''
  let status = ''
  let msg: Error | null = null

  if (type === 'cat') {
    await axios.get(catAPI).then(res => {
      url = res.data[0].url
      status = 'loaded'
    }).catch((err: Error) => {
      console.log(err)
      status = 'loaded'
      msg = err
    })
  } else if (type === 'dog') {
    await axios.get(dogAPI).then(res => {
      url = res.data.message
      status = 'loaded'
    }).catch((err: Error) => {
      console.log(err)
      status = 'loaded'
      msg = err
    })
  }

  return {
    url,
    status,
    // msg
  }
}
