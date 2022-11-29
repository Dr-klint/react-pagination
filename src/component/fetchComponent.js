export function fetchApi(input){
     fetch(`https://restcountries.com/v3.1/${input}`)
      .then((res) => res.json())
      .then((data) => {
        const arr = [];
        data.map((item) => arr.push(item));
        return arr
      }).catch(e=>console.log(e))
}
