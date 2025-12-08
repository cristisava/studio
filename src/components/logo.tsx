
export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="ATFR Logo">
      <img src="/logo_square_512.png" alt="ATFR Logo" width="36" height="36" className="h-9 w-9" />
      <span className="text-2xl font-bold tracking-tight text-foreground">
        ATFR
      </span>
    </div>
  );
}
