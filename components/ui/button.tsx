"use client";

import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-xl font-medium",
    "transition-all duration-200",
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-500/50",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    "active:scale-[0.98]",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-blue-600 text-white",
          "shadow-sm shadow-blue-600/20",
          "hover:bg-blue-500",
          "dark:bg-blue-500",
          "dark:hover:bg-blue-400",
        ].join(" "),

        secondary: [
          "bg-slate-900 text-white",
          "hover:bg-slate-800",
          "dark:bg-slate-100",
          "dark:text-slate-950",
          "dark:hover:bg-white",
        ].join(" "),

        outline: [
          "border border-slate-300",
          "bg-white text-slate-900",
          "hover:bg-slate-100",
          "dark:border-slate-700",
          "dark:bg-slate-950",
          "dark:text-slate-100",
          "dark:hover:bg-slate-900",
        ].join(" "),

        ghost: [
          "bg-transparent text-slate-700",
          "hover:bg-slate-100",
          "dark:text-slate-200",
          "dark:hover:bg-slate-900",
        ].join(" "),

        danger: [
          "bg-red-600 text-white",
          "shadow-sm shadow-red-600/20",
          "hover:bg-red-500",
          "focus-visible:ring-red-500/50",
          "dark:bg-red-600",
          "dark:hover:bg-red-500",
        ].join(" "),

        destructive: [
          "bg-red-600 text-white",
          "shadow-sm shadow-red-600/20",
          "hover:bg-red-500",
          "focus-visible:ring-red-500/50",
          "dark:bg-red-600",
          "dark:hover:bg-red-500",
        ].join(" "),

        success: [
          "bg-emerald-600 text-white",
          "shadow-sm shadow-emerald-600/20",
          "hover:bg-emerald-500",
          "focus-visible:ring-emerald-500/50",
          "dark:bg-emerald-600",
          "dark:hover:bg-emerald-500",
        ].join(" "),

        warning: [
          "bg-amber-500 text-white",
          "shadow-sm shadow-amber-500/20",
          "hover:bg-amber-400",
          "focus-visible:ring-amber-500/50",
          "dark:bg-amber-500",
          "dark:hover:bg-amber-400",
        ].join(" "),

        link: [
          "h-auto rounded-none p-0",
          "text-blue-600 underline-offset-4",
          "hover:underline",
          "dark:text-blue-400",
        ].join(" "),
      },

      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "size-10 p-0",
        iconSm: "size-8 p-0",
        iconLg: "size-12 p-0",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },

      fullWidth: {
        true: "w-full",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
      radius: "lg",
      fullWidth: false,
    },
  },
);

type ButtonProps = React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  };

function Button({
  className,
  variant,
  size,
  radius,
  fullWidth,
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <BaseButton
      type={type}
      className={cn(
        buttonVariants({
          variant,
          size,
          radius,
          fullWidth,
        }),
        className,
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <LoadingSpinner />

          <span>
            {loadingText ?? children}
          </span>
        </>
      ) : (
        <>
          {leftIcon && (
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 items-center"
            >
              {leftIcon}
            </span>
          )}

          {children}

          {rightIcon && (
            <span
              aria-hidden="true"
              className="inline-flex shrink-0 items-center"
            >
              {rightIcon}
            </span>
          )}
        </>
      )}
    </BaseButton>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="size-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />

      <path
        fill="currentColor"
        className="opacity-75"
        d="M12 3a9 9 0 0 1 9 9h-3a6 6 0 0 0-6-6V3Z"
      />
    </svg>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };