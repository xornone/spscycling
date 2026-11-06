import React from "react";

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ff2e93",
      shimmerSize = "0.08em",
      shimmerDuration = "2.5s",
      borderRadius = "4px",
      background = "linear-gradient(135deg, hsl(330 85% 45%), hsl(264 70% 32%))",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
            borderRadius,
          } as React.CSSProperties
        }
        className={`group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-8 py-4 text-white font-barlow-condensed font-bold uppercase tracking-[3px] text-sm [background:var(--bg)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_35px_rgba(255,46,147,0.45)] ${className}`}
        {...props}
      >
        {/* Spark container */}
        <div
          className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]"
        >
          {/* Spark */}
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* Spark before */}
            <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Backdrop highlight */}
        <div
          className="absolute [inset:var(--cut)] -z-20 rounded-[inherit] [background:var(--bg)] transition-colors duration-300 group-hover:brightness-110"
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
