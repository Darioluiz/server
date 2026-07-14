export function buildRoutes(path) {
  const routesParameters = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(
    routesParameters,
    '(?<$1>[a-z0-9\-_]+)'
  )

  const regex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return regex
}
