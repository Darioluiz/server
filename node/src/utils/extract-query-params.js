//"search=Dario" page=2'

export function extractQueryParams(query) {
  return query
    .substring(1)
    .split('&')
    .reduce((queryParams, params) => {
      const [key, value] = params.split('=')
      queryParams[key] = value

      return queryParams

      //{ search: "Dario",  page:"2"}' retorno esperado, algo similar.
    }, {})
}
