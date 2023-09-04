import {useAppStore} from '../store'

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

export const toastSuccess = (title: string, description?: string): void => {
  const sanityToast = useAppStore.getState().sanityToast
  if (sanityToast) sanityToast.push({status: 'success', title, description, duration: 1000})
}

export const toastWarning = ({title, description, duration = 3000}: ToastProps): void => {
  const sanityToast = useAppStore.getState().sanityToast
  if (sanityToast) sanityToast.push({status: 'warning', title, description, duration})
}

export const toastError = (e: unknown): void => {
  const sanityToast = useAppStore.getState().sanityToast
  let message
  if (typeof e === 'string') {
    message = e
  }
  if (e instanceof Error) {
    message = e.message
  }
  console.error(e)
  if (sanityToast)
    sanityToast.push({status: 'error', title: 'Something Went Wrong', description: message})
}
