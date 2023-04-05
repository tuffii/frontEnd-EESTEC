import * as SolidJS from 'solid-js'

import * as ENV from './ENV'

export const GetURL = (): string => {
  const ENVVariables = ENV.default

  const IsServerConnectionSecure = ENVVariables.Server.Connection.IsSecure

  const IsServerConnectionRemote = ENVVariables.Server.Connection.IsRemote

  const ServerDomain = ENVVariables.Server.Domain
  const ServerPort = ENVVariables.Server.Port

  const URLProtocol = IsServerConnectionSecure ? `https` : `http`

  const RemoteURLHost = `${ServerDomain}`
  const LocalURLHost = `${ServerDomain}:${ServerPort}`

  const FormedServerURL = `${URLProtocol}://${IsServerConnectionRemote ? `${RemoteURLHost}` : `${LocalURLHost}`}`

  return FormedServerURL
}

interface ServerResponse<IResponseBody extends Record<string, any>> {
  readonly Status: {
    readonly IsFinished: boolean
    readonly IsValid: boolean
  }
  readonly Body: IResponseBody
}

export const SendRequest = async <IResponseBody extends Record<string, any>>(
  endpoint: string,
  method: string,
  headers: Record<string, any>,
  body: Record<string, any>
): Promise<ServerResponse<IResponseBody>> => {
  return new Promise(async (resolve, reject) => {
    let RequestQuery: Record<string, any> = {
      method: method,
      headers: headers,
    }

    if (method === `GET`) {
      RequestQuery = {
        method: method,
        headers: headers,
      }
    } else if (method === `POST`) {
      RequestQuery = {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      }
    } else if (method === `PUT`) {
      RequestQuery = {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      }
    } else if (method === `PATCH`) {
      RequestQuery = {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
      }
    } else if (method === `UPDATE`) {
      RequestQuery = {
        method: method,
        headers: headers,
      }
    } else if (method === `DELETE`) {
      RequestQuery = {
        method: method,
        headers: headers,
      }
    }

    const ServerURL = GetURL()
    fetch(`${ServerURL}${endpoint}`, RequestQuery)
      .then(async (response) => {
        try {
          const ParsedResponseBody = (await response.json()) as IResponseBody
          const IsRequestSuccessful = response.status === 200

          const ServerResponse: ServerResponse<IResponseBody> = {
            Status: {
              IsFinished: true,
              IsValid: IsRequestSuccessful,
            },
            Body: ParsedResponseBody,
          }

          resolve(ServerResponse)
        } catch (e) {
          const ParsedResponseBody = {} as IResponseBody
          const IsRequestSuccessful = false
          const ServerResponse: ServerResponse<IResponseBody> = {
            Status: {
              IsFinished: true,
              IsValid: IsRequestSuccessful,
            },
            Body: ParsedResponseBody,
          }
          resolve(ServerResponse)
        }
      })
      .finally(async () => {
        const ParsedResponseBody = {} as IResponseBody
        const IsRequestSuccessful = false

        const ServerResponse: ServerResponse<IResponseBody> = {
          Status: {
            IsFinished: true,
            IsValid: IsRequestSuccessful,
          },
          Body: ParsedResponseBody,
        }

        resolve(ServerResponse)
      })
  })
}

export const GetResponseResource = <IResponseBody extends Record<string, any>>(
  resource: SolidJS.Resource<ServerResponse<IResponseBody>>
): ServerResponse<IResponseBody> => (resource.state === `ready` ? resource() : { Status: { IsFinished: false, IsValid: false }, Body: {} as IResponseBody })
