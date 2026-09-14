"use client"

import React from "react"
import { cn } from "@/src/lib/utils"

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  squares?: [number, number][]
  strokeDasharray?: string

  fade?: "none" | "radial" | "left" | "right"

  className?: string
  [key: string]: any
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  fade = "none",
  className,
  ...props
}: GridPatternProps) {
  const id = React.useId()

  const fadeStyles = {
    none: undefined,

    radial: {
      maskImage:
        "radial-gradient(circle at center, black 0%, transparent 90%, transparent 100%)",
      WebkitMaskImage:
        "radial-gradient(circle at center, black 0%, transparent 90%, transparent 100%)",
    },

    left: {
      maskImage:
        "linear-gradient(to right, black 0%, black 10%, transparent 80%)",
      WebkitMaskImage:
        "linear-gradient(to right, black 0%, black 10%, transparent 80%)",
    },

    right: {
      maskImage:
        "linear-gradient(to left, black 0%, black 10%, transparent 80%)",
      WebkitMaskImage:
        "linear-gradient(to left, black 0%, black 10%, transparent 80%)",
    },
  }

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className,
      )}
      style={fadeStyles[fade]}
      {...(props as any)}
    >
      <defs>
        <pattern
          height={height}
          id={id}
          patternUnits="userSpaceOnUse"
          width={width}
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      <rect
        fill={`url(#${id})`}
        height="100%"
        strokeWidth={0}
        width="100%"
      />

      {squares && (
        <svg
          aria-label="Grid squares"
          className="overflow-visible"
          role="img"
          x={x}
          y={y}
        >
          {squares.map(([x, y], index) => (
            <rect
              height={height - 1}
              key={`${x}-${y}-${index}`}
              strokeWidth="0"
              width={width - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export type { GridPatternProps }

export default GridPattern