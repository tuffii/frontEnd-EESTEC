export default {
  Server: {
    Connection: {
      IsRemote: false,
      IsSecure: false,
    },
    Domain: `localhost`,
    Port: 5050,
  },
  Client: {
    Connection: {
      IsRemote: false,
      IsSecure: false,
    },
    Domain: `localhost`,
    Port: 4040,
  },
} as const
