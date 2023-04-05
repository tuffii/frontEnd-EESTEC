export const WebApp = (window as any).Telegram.WebApp

export const Functions = {
  Close: (): never => {
    const CloseWebApp: () => never = WebApp.close

    CloseWebApp()
  },
} as const

export const User = {
  ID: WebApp.initDataUnsafe?.user?.id as number | undefined,
} as const
