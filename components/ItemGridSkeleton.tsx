export function ItemGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="aspect-[3/4] bg-muted rounded-sm animate-pulse"
        />
      ))}
    </div>
  );
}