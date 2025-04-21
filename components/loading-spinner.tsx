export default function LoadingSpinner({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "w-4 h-4 border-2",
    medium: "w-8 h-8 border-3",
    large: "w-12 h-12 border-4",
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div
        className={`${sizeClasses[size]} border-t-primary animate-spin rounded-full`}
        role="status"
        aria-label="Cargando"
      />
    </div>
  )
}
