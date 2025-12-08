
export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="ATFR Logo">
      <img src="/logo_square_512.png" alt="ATFR Logo" width="28" height="28" className="h-7 w-7" />
      <span className="text-xl font-bold tracking-tight text-foreground">
        ATFR
      </span>
    </div>
  );
}
