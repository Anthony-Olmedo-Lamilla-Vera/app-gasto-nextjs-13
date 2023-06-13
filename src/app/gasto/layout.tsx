import React from "react";

export const metadata = {
  title: "Gasto",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default layout;
