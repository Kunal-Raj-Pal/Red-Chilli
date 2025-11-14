function SkeletonCard() {
  return (
     <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-2">
      
      {/* Image Skeleton */}
      <div className="relative h-48 w-full bg-gray-300 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      <div className="p-4 space-y-3">

        {/* Title Skeleton */}
        <div className="h-4 w-3/4 bg-gray-300 rounded-md overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Category */}
        <div className="h-3 w-16 bg-gray-300 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Description */}
        <div className="h-3 w-1/2 bg-gray-300 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        {/* Separator line */}
        <div className="h-[1px] w-full bg-gray-200"></div>

        {/* Price */}
        <div className="h-4 w-20 bg-gray-300 rounded-md overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>
    </div>

  );
}

export default SkeletonCard;
