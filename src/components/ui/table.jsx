import React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef(function Table(
  { className, style, ...props },
  ref
) {
  return (
    <div className="relative w-full overflow-auto">
      <div
        ref={ref}
        role="table"
        className={cn("w-full caption-bottom text-sm", className)}
        style={style}
        {...props}
      />
    </div>
  );
});
Table.displayName = "Table";

const TableHeader = React.forwardRef(function TableHeader(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn("[&_div[role=row]]:border-b", className)}
      {...props}
    />
  );
});
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(function TableBody(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn("[&_div[role=row]]:last-child:border-0", className)}
      {...props}
    />
  );
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(function TableFooter(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn(
        "border-t bg-muted/50 font-medium [&>div[role=row]]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(function TableRow(
  { className, style, columns = 1, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="row"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        ...style,
      }}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted grid",
        className
      )}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(function TableHead(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="columnheader"
      className={cn(
        "h-12 px-4 flex items-center text-left font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[4px]",
        className
      )}
      {...props}
    />
  );
});
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(function TableCell(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="cell"
      className={cn(
        "p-4 flex items-center [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[4px]",
        className
      )}
      {...props}
    />
  );
});
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(function TableCaption(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
};
