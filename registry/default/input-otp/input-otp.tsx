"use client";

import * as React from "react";
import {
  OTPInput,
  OTPInputContext,
  type OTPInputProps,
} from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

function InputOTP({
  className,
  containerClassName,
  ...props
}: OTPInputProps & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn(
        "disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  );
}

function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "flex items-center",
        className,
      )}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext =
    React.useContext(OTPInputContext);

  const slot = inputOTPContext?.slots[index];

  const char = slot?.char;
  const hasFakeCaret = slot?.hasFakeCaret;
  const isActive = slot?.isActive;

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex size-11 items-center justify-center",
        "border-y border-r border-slate-300",
        "bg-white text-sm font-medium text-slate-950",
        "transition-all duration-200",
        "first:rounded-l-xl first:border-l",
        "last:rounded-r-xl",
        "data-[active=true]:z-10",
        "data-[active=true]:border-blue-500",
        "data-[active=true]:ring-2",
        "data-[active=true]:ring-blue-500/20",
        "dark:border-slate-700",
        "dark:bg-slate-950",
        "dark:text-white",
        "dark:data-[active=true]:border-blue-400",
        "dark:data-[active=true]:ring-blue-400/20",
        className,
      )}
      {...props}
    >
      {char}

      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-5 w-px animate-caret-blink bg-slate-950 duration-1000 dark:bg-white" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      role="separator"
      className={cn(
        "flex items-center justify-center text-slate-400",
        className,
      )}
      {...props}
    >
      <Minus className="size-4" />
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
};