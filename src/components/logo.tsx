
export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="ATFR Logo">
      <img src="/logo_square_512.png" alt="ATFR Logo" width="48" height="48" className="h-12 w-12" />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        ATFR
      </span>
    </div>
  );
}
