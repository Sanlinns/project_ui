"use client"

import * as React from "react"
import {
  AlertCircle,
  CheckCircle2,
  Info,
  LoaderCircle,
  X,
  XCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"

type ToastType =
  | "default"
  | "success"
  | "error"
  | "loading"
  | "info"

type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"

type ToastItem = {
  id: string
  title: React.ReactNode
  description?: React.ReactNode
  type?: ToastType
  duration?: number
  dismissible?: boolean
}

type ToastInput = Omit<ToastItem, "id">

type ToastContextValue = {
  toasts: ToastItem[]
  toast: (input: ToastInput) => string
  success: (
    title: React.ReactNode,
    options?: Omit<ToastInput, "title" | "type">
  ) => string
  error: (
    title: React.ReactNode,
    options?: Omit<ToastInput, "title" | "type">
  ) => string
  loading: (
    title: React.ReactNode,
    options?: Omit<ToastInput, "title" | "type">
  ) => string
  info: (
    title: React.ReactNode,
    options?: Omit<ToastInput, "title" | "type">
  ) => string
  dismiss: (id?: string) => void
}

const ToastContext =
  React.createContext<ToastContextValue | null>(null)

function createToastId() {
  return Math.random().toString(36).slice(2, 10)
}

function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [toasts, setToasts] =
    React.useState<ToastItem[]>([])

  const dismiss = React.useCallback((id?: string) => {
    if (!id) {
      setToasts([])
      return
    }

    setToasts((current) =>
      current.filter((item) => item.id !== id)
    )
  }, [])

  const toast = React.useCallback(
    (input: ToastInput) => {
      const id = createToastId()

      const item: ToastItem = {
        id,
        type: "default",
        duration: 4000,
        dismissible: true,
        ...input,
      }

      setToasts((current) => [...current, item])

      if (
        item.duration !== Infinity &&
        item.type !== "loading"
      ) {
        window.setTimeout(() => {
          setToasts((current) =>
            current.filter((toastItem) => toastItem.id !== id)
          )
        }, item.duration ?? 4000)
      }

      return id
    },
    []
  )

  const success = React.useCallback(
    (
      title: React.ReactNode,
      options?: Omit<ToastInput, "title" | "type">
    ) =>
      toast({
        title,
        type: "success",
        ...options,
      }),
    [toast]
  )

  const error = React.useCallback(
    (
      title: React.ReactNode,
      options?: Omit<ToastInput, "title" | "type">
    ) =>
      toast({
        title,
        type: "error",
        ...options,
      }),
    [toast]
  )

  const loading = React.useCallback(
    (
      title: React.ReactNode,
      options?: Omit<ToastInput, "title" | "type">
    ) =>
      toast({
        title,
        type: "loading",
        duration: Infinity,
        ...options,
      }),
    [toast]
  )

  const info = React.useCallback(
    (
      title: React.ReactNode,
      options?: Omit<ToastInput, "title" | "type">
    ) =>
      toast({
        title,
        type: "info",
        ...options,
      }),
    [toast]
  )

  return (
    <ToastContext.Provider
      value={{
        toasts,
        toast,
        success,
        error,
        loading,
        info,
        dismiss,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider."
    )
  }

  return context
}

function ToastIcon({
  type = "default",
}: {
  type?: ToastType
}) {
  if (type === "success") {
    return (
      <CheckCircle2 className="size-5 text-emerald-500" />
    )
  }

  if (type === "error") {
    return (
      <XCircle className="size-5 text-destructive" />
    )
  }

  if (type === "loading") {
    return (
      <LoaderCircle className="size-5 animate-spin text-primary" />
    )
  }

  if (type === "info") {
    return <Info className="size-5 text-sky-500" />
  }

  return (
    <AlertCircle className="size-5 text-muted-foreground" />
  )
}

function Toast({
  toast,
  onDismiss,
  className,
}: {
  toast: ToastItem
  onDismiss: (id: string) => void
  className?: string
}) {
  return (
    <div
      data-slot="toast"
      data-type={toast.type}
      className={cn(
        "pointer-events-auto relative flex w-full items-start gap-3 rounded-xl border bg-background/95 px-4 py-3.5 text-foreground shadow-lg backdrop-blur",
        "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200",
        "dark:bg-background/95",
        className
      )}
    >
      <div className="mt-0.5 shrink-0">
        <ToastIcon type={toast.type} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="text-sm font-semibold leading-5">
          {toast.title}
        </div>

        {toast.description ? (
          <div className="mt-1 text-sm leading-5 text-muted-foreground">
            {toast.description}
          </div>
        ) : null}
      </div>

      {toast.dismissible !== false ? (
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="inline-flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label="Dismiss notification"
        >
          <X className="size-4" />
        </button>
      ) : null}
    </div>
  )
}

const positionClasses: Record<
  ToastPosition,
  string
> = {
  "top-left":
    "left-4 top-4 items-start sm:left-6 sm:top-6",
  "top-center":
    "left-1/2 top-4 -translate-x-1/2 items-center sm:top-6",
  "top-right":
    "right-4 top-4 items-end sm:right-6 sm:top-6",
  "bottom-left":
    "bottom-4 left-4 flex-col-reverse items-start sm:bottom-6 sm:left-6",
  "bottom-center":
    "bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse items-center sm:bottom-6",
  "bottom-right":
    "bottom-4 right-4 flex-col-reverse items-end sm:bottom-6 sm:right-6",
}

function Toaster({
  position = "top-center",
  className,
}: {
  position?: ToastPosition
  className?: string
}) {
  const { toasts, dismiss } = useToast()

  return (
    <div
      data-slot="toaster"
      className={cn(
        "pointer-events-none fixed z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2",
        positionClasses[position],
        className
      )}
    >
      {toasts.map((item) => (
        <Toast
          key={item.id}
          toast={item}
          onDismiss={dismiss}
        />
      ))}
    </div>
  )
}

export {
  Toast,
  ToastProvider,
  Toaster,
  useToast,
}

export type {
  ToastInput,
  ToastItem,
  ToastPosition,
  ToastType,
}